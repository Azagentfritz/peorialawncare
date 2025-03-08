
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
        status: result.success === false ? 400 : 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('API error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return new Response(JSON.stringify({ success: false, error: errorMessage }), {
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
