import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top when the route changes,
 * or to the specific section if a hash is present in the URL
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL and we're on the home page
    if (hash && pathname === '/') {
      // Handle scrolling to the section
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } 
    // Otherwise scroll to top when pathname changes and there's no hash
    else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
