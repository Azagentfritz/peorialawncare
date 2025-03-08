
import { ApiResponse } from './index';
import { supabase } from "@/integrations/supabase/client";

export async function sendContactEmail(data: {
  from: string;
  name: string;
  phone: string;
  service: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    // Store the contact submission in Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.from,
        phone: data.phone || null,
        service: data.service || null,
        message: data.message
      });

    if (error) {
      console.error('Error storing contact submission:', error);
      return { 
        success: false, 
        error: "Failed to save your message. Please try again." 
      };
    }

    // Send confirmation email using the Supabase Edge Function
    try {
      console.log('Sending confirmation email to:', data.from);
      
      const emailResponse = await supabase.functions.invoke('send-confirmation', {
        body: {
          name: data.name,
          email: data.from,
          service: data.service,
          message: data.message,
          phone: data.phone
        }
      });
      
      console.log('Confirmation email response:', emailResponse);
      
      if (!emailResponse.error) {
        console.log('Confirmation email sent successfully');
      } else {
        // Just log the error but don't fail the whole request
        console.error('Error sending confirmation email:', emailResponse.error);
        return { 
          success: true, 
          message: "Your message has been received, but we couldn't send a confirmation email. We'll still be in touch soon!" 
        };
      }
    } catch (emailError) {
      // Just log the error but don't fail the whole request
      console.error('Exception sending confirmation email:', emailError);
      return { 
        success: true, 
        message: "Your message has been received, but we couldn't send a confirmation email. We'll still be in touch soon!" 
      };
    }
    
    return { 
      success: true, 
      message: "Your message has been received. We'll be in touch soon! Please check your email for a confirmation." 
    };
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    return { 
      success: false, 
      error: "An unexpected error occurred. Please try again later." 
    };
  }
}
