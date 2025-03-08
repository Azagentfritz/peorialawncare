
import { apiRoutes } from '../api';

export async function handleApiRequest(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Check if the request path matches any of our API routes
  if (pathname in apiRoutes) {
    try {
      const handler = apiRoutes[pathname as keyof typeof apiRoutes];
      const result = await handler(request);
      
      // Return the API response
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('API error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  
  // Not an API route, continue with normal request
  return null;
}
