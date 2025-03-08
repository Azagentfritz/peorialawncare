
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
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service }: ContactEmailRequest = await req.json();

    console.log(`Sending confirmation email to ${email} for ${name}`);

    // Format the service name for display
    let formattedService = '';
    if (service) {
      formattedService = service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }

    const emailResponse = await resend.emails.send({
      from: "Peoria Lawn Care <onboarding@resend.dev>",
      to: [email],
      subject: "Thank You for Contacting Peoria Lawn Care",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #4CAF50; margin-bottom: 20px;">Thank You for Contacting Us</h1>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Peoria Lawn Care. We have received your inquiry${service ? ` about our ${formattedService} service` : ''}.</p>
          <p>Our team will review your message and get back to you as soon as possible, typically within 1-2 business days.</p>
          <p>In the meantime, feel free to explore our website for more information about our services.</p>
          <div style="margin: 30px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">
            <p style="margin: 0;"><strong>Peoria Lawn Care</strong></p>
            <p style="margin: 5px 0;">Phone: (623) 845-2626</p>
            <p style="margin: 5px 0;">Email: info@peorialawncare.com</p>
          </div>
          <p>Best regards,</p>
          <p>The Peoria Lawn Care Team</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
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
