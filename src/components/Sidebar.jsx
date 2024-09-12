// components/Sidebar.js
import { HomeIcon, Cog6ToothIcon, FolderIcon, ClockIcon, DocumentIcon, PhotoIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ sidebarOpen, isMobile }) {
  return (
    <aside
      className={`${
        sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'
      } ${isMobile ? 'fixed z-30 h-screen top-20 w-64' : 'relative'}
        top-0 left-0  bg-white  h-screen transform transition-transform duration-300 ease-in-out rounded-lg`}
    >
      {/* Workspace section */}
      <div className="p-4 border-b mt-10 bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
            DX
          </div>
          <div>
            <h2 className="text-lg font-semibold">Dlex workspace</h2>
            <p className="text-sm text-gray-500">5 members</p>
          </div>
        </div>
      </div>

      {/* General Section */}
      <div className="mt-6">
        <h3 className="px-4 py-2 text-xs font-bold text-gray-500 uppercase">General</h3>
        <ul>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <HomeIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Overview</a>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <Cog6ToothIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Menu Section */}
      <div className="mt-6">
        <h3 className="px-4 py-2 text-xs font-bold text-gray-500 uppercase">Main Menu</h3>
        <ul>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100 " >
            <FolderIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">All Files</a>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <ClockIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Recent</a>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <DocumentIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Docs</a>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <PhotoIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Photos</a>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-sky-100">
            <TrashIcon className="h-5 w-5 mr-3 text-gray-600" />
            <a href="#" className="text-gray-700 font-medium">Trash</a>
          </li>
        </ul>
      </div>

      {/* Storage Section */}
      <div className="mt-6 p-4">
        <div className="border-t pt-4">
          <p className="text-sm font-medium">Storage</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23%' }}></div>
          </div>
          <p className="text-xs text-gray-500">
            3.4 GB of 15 GB
            <span className="float-right text-blue-500 cursor-pointer">Upgrade</span>
          </p>
        </div>
        <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-md hover:bg-blue-700">
          + Create new
        </button>
      </div>
    </aside>
  );
}
