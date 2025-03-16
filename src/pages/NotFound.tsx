
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy text-slate-light p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold mb-4 text-aqua">404</h1>
        <p className="text-2xl mb-8 text-slate-light">Oops! Page not found</p>
        <p className="text-slate mb-8">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-block border border-aqua text-aqua px-6 py-3 rounded font-mono hover:bg-aqua/10 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
