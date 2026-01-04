import { Link } from 'react-router-dom';

// Icons
const Icons = {
  Client: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z"/></svg>
  ),
  Cloud: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.47 5.47 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3 3 3z"/></svg>
  ),
  Server: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 24 24"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"/></svg>
  )
};

// Status Block Component
const StatusBlock = ({ icon: Icon, title, status, isError }) => {
  // Is error or not to determine styles
  const bgClass = isError 
    ? "bg-[#fce8e6] dark:bg-[#270501]" 
    : "bg-[#e6f4ea] dark:bg-[#07220f]";
  const textClass = isError
    ? "text-[#c5221f] dark:text-[#c5221f]"
    : "text-[#137333] dark:text-[#137333]";

  return (
    <div className={`flex-1 p-8 rounded-lg flex flex-col items-start gap-2 ${bgClass}`}>
      <Icon className={`w-12 h-12 ${textClass}`} />
      <span className="text-xl font-normal mt-2">{title}</span>
      <span className={textClass}>{status}</span>
    </div>
  );
};

// MAIN - NotFoundPage Component
export const NotFoundPage = () => {
  return (
    <div className="min-h-screen font-sans text-black bg-white dark:bg-black dark:text-white/90 p-8 md:px-[10%] md:py-[8%] transition-colors duration-200">
      
      {/* Header */}
      <nav className="mb-6 flex flex-col md:flex-row md:items-baseline gap-4">
        <h1 className="text-6xl md:text-[3.545rem] font-mono leading-none font-normal">404 Error</h1>
        <span className="text-xl md:text-[1.245rem] text-gray-600 dark:text-white/40 font-normal">Not Found</span>
      </nav>

      {/* Status Diagram */}
      <div className="flex flex-col md:flex-row gap-8 mt-14 mb-6 justify-center items-stretch">
        <StatusBlock icon={Icons.Client} title="Your Client" status="Working" isError={false} />
        <StatusBlock icon={Icons.Cloud} title="Network" status="Working" isError={false} />
        <StatusBlock icon={Icons.Server} title="Web Server" status="Not Found" isError={true} />
      </div>

      {/* Explanation */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
        <div className="flex-1 max-w-full md:max-w-[40%]">
          <h2 className="text-[1.45rem] font-semibold mb-2">What happened?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The web server reported that the page you requested could not be found.
          </p>
        </div>
        
        <div className="flex-1 max-w-full md:max-w-[40%]">
          <h2 className="text-[1.45rem] font-semibold mb-2">What can I do?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Please check the URL or go back to the homepage.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center justify-center mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm 
            text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-600 dark:text-white/40 mt-8 border-t border-gray-200 dark:border-gray-800 pt-4">
        <div className="mb-2">Running with React & Tailwind</div>
        <div className="font-mono text-xs opacity-75">
            Cloudflare Ray ID: <span className="select-all">mock-ray-id-12345</span><br />
            Your IP: <span className="select-all">127.0.0.1</span>
        </div>
      </footer>
    </div>
  );
};