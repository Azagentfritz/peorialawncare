
import { Resend } from 'resend';
import { ApiResponse } from './index';

// Initialize the Resend client
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail(data: {
  from: string;
  name: string;
  phone: string;
  service: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    // Validate email address
    if (!data.from || !data.from.includes('@')) {
      return {
        success: false,
        error: "Please provide a valid email address."
      };
    }

    // Validate required fields
    if (!data.name || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields."
      };
    }

    // Prepare service text (convert slug to readable format)
    let serviceText = data.service;
    if (data.service) {
      serviceText = data.service
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.from}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service Requested:</strong> ${serviceText || 'Not specified'}</p>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Peoria Lawn Care <contact@peoria-lawncare.com>',
      to: ['contact@peoria-lawncare.com'], // Change this to your actual business email
      subject: `New Website Inquiry: ${data.service || 'General Inquiry'}`,
      html: emailContent,
      reply_to: data.from
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        success: false,
        error: "Failed to send email. Please try again later."
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We will contact you soon."
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later."
    };
  }
}
