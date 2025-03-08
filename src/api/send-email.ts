
import { Resend } from 'resend';
import { ApiResponse } from './index';

// In a real production environment, this would use environment variables
// Since we're in a frontend-only app, we'll use a client-side key
// NOTE: This is not ideal for production - a proper backend service would be better
const resend = new Resend('re_yourResendApiKeyHere');

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

    // For demonstration, we'll check if we're in development by looking at the domain
    const isDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname.includes('preview') ||
                          window.location.hostname.includes('lovable.dev');
    
    if (isDevelopment) {
      // Simulate success in development to avoid exposing API keys
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Email sending simulated in development environment');
      return { 
        success: true,
        message: "Email successfully simulated in development environment"
      };
    } else {
      // In production, actually send the email
      const { data: emailData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use a verified domain in production
        to: 'your-email@example.com', // Replace with the actual recipient email
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
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Email sent successfully:', emailData);
      return { 
        success: true,
        message: "Your message has been sent successfully"
      };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
