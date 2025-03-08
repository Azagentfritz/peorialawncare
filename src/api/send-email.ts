
import { ApiResponse } from './index';

// We'll use a mock success response for the preview environment
// In a real implementation, you'd use a backend service/API to handle this
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

    // In a preview/development environment, we'll simulate success
    // without actually sending emails to avoid exposing API keys
    
    // For production, you would implement:
    // 1. Server-side API endpoint that securely uses Resend
    // 2. Use environment variables for API keys
    // 3. Add proper CORS headers if needed
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return success response
    return { 
      success: true,
      message: "Email successfully simulated in preview environment"
    };
  } catch (error) {
    console.error('Error sending email:', error);
    // Return a more structured error response
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
