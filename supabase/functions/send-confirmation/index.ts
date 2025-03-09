
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  service?: string;
  message?: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message, phone }: ContactEmailRequest = await req.json();

    console.log(`Sending confirmation email to ${email} for ${name}`);
    
    if (!email || !name) {
      console.error("Missing required fields:", { email, name });
      throw new Error("Missing required fields: email and name are required");
    }

    // Format the service name for display
    let formattedService = '';
    if (service) {
      formattedService = service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }

    // HTML template for emails
    const customerEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h1 style="color: #4CAF50; margin-bottom: 20px;">Thank You for Contacting Us</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Peoria Lawn Care. We have received your inquiry${service ? ` about our ${formattedService} service` : ''}.</p>
        <p>Our team will review your message and get back to you as soon as possible, typically within 1-2 business days.</p>
        <p>In the meantime, feel free to explore our website for more information about our services.</p>
        <div style="margin: 30px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">
          <p style="margin: 0;"><strong>Peoria Lawn Care</strong></p>
          <p style="margin: 5px 0;">Phone: (623) 845-2626</p>
          <p style="margin: 5px 0;">Email: info@peoria-lawncare.com</p>
        </div>
        <p>Best regards,</p>
        <p>The Peoria Lawn Care Team</p>
      </div>
    `;

    const notificationEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h1 style="color: #4CAF50; margin-bottom: 20px;">New Website Contact Form Submission</h1>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service Requested:</strong> ${formattedService}</p>` : ''}
        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="margin-top: 10px;">${message || 'No message provided'}</p>
        </div>
      </div>
    `;

    // Send confirmation email to the customer
    console.log("Attempting to send customer confirmation email...");
    const customerEmailResponse = await resend.emails.send({
      from: "Peoria Lawn Care <info@peoria-lawncare.com>", // Using the correct verified domain
      to: [email],
      subject: "Thank You for Contacting Peoria Lawn Care",
      html: customerEmailTemplate,
    });

    console.log("Customer email sent successfully:", customerEmailResponse);

    // Send notification emails to the business owner and the additional email
    if (message || service || phone) {
      console.log("Attempting to send notification emails...");
      
      // Send to the new email address
      const notificationEmailResponse = await resend.emails.send({
        from: "Peoria Lawn Care <info@peoria-lawncare.com>", // Using the correct verified domain
        to: ["peorialawncare@icloud.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: notificationEmailTemplate,
      });

      console.log("Notification emails sent successfully:", notificationEmailResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error.message);
    console.error("Error details:", error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
