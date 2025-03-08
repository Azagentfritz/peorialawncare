import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_');  // Replace 're_' with your actual Resend API key

export async function sendContactEmail(data: {
  from: string;
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    // Email to owner/business
    await resend.emails.send({
      from: 'contact@peoria-lawncare.com',
      to: 'azagentfritz@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.from}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${data.service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Confirmation email to customer
    await resend.emails.send({
      from: 'contact@peoria-lawncare.com',
      to: data.from,
      subject: 'Thank You for Contacting Peoria Lawn Care',
      html: `
        <h2>Thank You for Contacting Peoria Lawn Care</h2>
        <p>Hello ${data.name},</p>
        <p>We appreciate you reaching out to us. This is a confirmation that we've received your message about ${data.service || 'your inquiry'}.</p>
        <p>Our team will review your request and get back to you shortly. If you need immediate assistance, please call us at (623) 845-2626.</p>
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Service interested in:</strong> ${data.service || 'Not specified'}</li>
          <li><strong>Your message:</strong> "${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}"</li>
        </ul>
        <p>Thank you for considering Peoria Lawn Care for your landscaping needs.</p>
        <p>Best regards,<br>The Peoria Lawn Care Team</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
