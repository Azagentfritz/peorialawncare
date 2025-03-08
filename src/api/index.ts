
import { sendContactEmail } from './send-email';

// Define a common response type for API handlers
export type ApiResponse = { 
  success: boolean; 
  error?: string;
  message?: string;
};

// This file creates a mapping between API routes and their handlers
export const apiRoutes = {
  '/api/send-email': async (request: Request): Promise<Response | ApiResponse> => {
    if (request.method === 'POST') {
      try {
        console.log(`Handling API request to /api/send-email`);
        const data = await request.json();
        return await sendContactEmail(data);
      } catch (error) {
        console.error('API route error:', error);
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error processing request'
        };
      }
    }
    
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
