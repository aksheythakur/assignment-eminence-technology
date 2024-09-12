// components/Header.js
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';

export default function Header({ toggleSidebar, isMobile }) {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 flex items-center justify-between z-50">
      {/* Left Section: Logo and Sidebar Toggle */}
      <div className="flex items-center space-x-4">
        {/* Sidebar Toggle Button */}
        <button
          className="text-gray-600 focus:outline-none "
          onClick={toggleSidebar}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/path/to/logo.png" alt="Dlex Logo" className="h-8 w-8" /> */}
          <span className="ml-2 text-xl font-bold text-gray-700">Dlex</span>
        </div>
      </div>

      {/* Right Section: Notification and Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <button className="relative">
          <BellIcon className="h-6 w-6 text-gray-600" />
          {/* Optional: Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </button>

        {/* Profile Icon */}
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <img src="/images/img.jpg" alt="Profile" className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
}
