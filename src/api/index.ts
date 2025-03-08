
import { sendContactEmail } from './send-email';

// This file creates a mapping between API routes and their handlers
export const apiRoutes = {
  '/api/send-email': async (request: Request) => {
    if (request.method === 'POST') {
      const data = await request.json();
      return await sendContactEmail(data);
    }
    
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
