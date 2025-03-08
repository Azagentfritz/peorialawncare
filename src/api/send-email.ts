
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

    // For now we're just storing the contact, but we could also implement email sending here
    console.log('Contact submission stored successfully');
    
    return { 
      success: true, 
      message: "Your message has been received. We'll be in touch soon!" 
    };
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    return { 
      success: false, 
      error: "An unexpected error occurred. Please try again later." 
    };
  }
}
