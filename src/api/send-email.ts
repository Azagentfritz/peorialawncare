
import { Resend } from 'resend';
import { ApiResponse } from './index';

// Since we're in a frontend-only app, we'll use a client-side key
const resend = new Resend('re_7y2Me4us_jQUMqPoaCFsUgXwqtHYRTZKA');

// This is the email that will receive contact form submissions
const RECIPIENT_EMAIL = 'your-email@example.com'; // Replace with your actual email

export async function sendContactEmail(data: {
  from: string;
  name: string;
  phone: string;
  service: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    console.log('Sending contact email with data:', {
      ...data,
      message: data.message.substring(0, 30) + (data.message.length > 30 ? '...' : '')
    });

    // Always send real emails, regardless of environment
    try {
      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use a verified domain in production
        to: RECIPIENT_EMAIL,
        subject: `New contact from ${data.name} - ${data.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.from}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${data.service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
        reply_to: data.from // Allow replying directly to the sender
      });

      console.log('Email sent successfully:', emailResponse);
      return { 
        success: true,
        message: "Your message has been sent successfully"
      };
    } catch (emailError) {
      console.error('Resend API error:', emailError);
      throw emailError;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred while sending email'
    };
  }
}
