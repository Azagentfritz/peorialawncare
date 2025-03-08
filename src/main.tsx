import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { handleApiRequest } from './middleware/api'

// Intercept fetch requests to handle API endpoints
const originalFetch = window.fetch;
window.fetch = async (input, init) => {
  const request = new Request(input, init);
  const url = new URL(request.url);
  
  // Only intercept requests to our own domain and API routes
  if (url.origin === window.location.origin && url.pathname.startsWith('/api/')) {
    const response = await handleApiRequest(request);
    if (response) return response;
  }
  
  // Otherwise, use the original fetch
  return originalFetch(input, init);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
