
import { apiRoutes, ApiResponse } from '../api';

export async function handleApiRequest(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Check if the request path matches any of our API routes
  if (pathname in apiRoutes) {
    try {
      console.log(`Handling API request to ${pathname}`);
      const handler = apiRoutes[pathname as keyof typeof apiRoutes];
      const result = await handler(request);
      
      // Check if result is a Response object or an ApiResponse object
      if (result instanceof Response) {
        // If it's already a Response object, return it directly
        return result;
      } else {
        // It's an ApiResponse object, so convert it to a Response
        return new Response(JSON.stringify(result), {
          status: result.success ? 200 : 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
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
