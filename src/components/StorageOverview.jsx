// components/StorageOverview.js
import { DocumentIcon, FolderIcon, PhotoIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

export default function StorageOverview() {
  return (
    <section className="p-6">
      <h2 className="text-lg font-semibold mb-4">Storage Overview</h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23%' }}></div>
      </div>

      {/* Storage details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Shared Files */}
        <div className="bg-orange-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <ArchiveBoxIcon className="h-6 w-6 text-orange-600" />
            <h3 className="text-sm font-semibold">Shared Files</h3>
          </div>
          <p className="text-xs text-gray-600">1,203 files</p>
          <p className="text-lg font-semibold">3.2 GB</p>
        </div>

        {/* Media */}
        <div className="bg-yellow-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <PhotoIcon className="h-6 w-6 text-yellow-600" />
            <h3 className="text-sm font-semibold">Media</h3>
          </div>
          <p className="text-xs text-gray-600">1,203 files</p>
          <p className="text-lg font-semibold">2.1 GB</p>
        </div>

        {/* Documents */}
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <DocumentIcon className="h-6 w-6 text-blue-600" />
            <h3 className="text-sm font-semibold">Documents</h3>
          </div>
          <p className="text-xs text-gray-600">1,203 files</p>
          <p className="text-lg font-semibold">38 GB</p>
        </div>

        {/* Others */}
        <div className="bg-green-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <FolderIcon className="h-6 w-6 text-green-600" />
            <h3 className="text-sm font-semibold">Others</h3>
          </div>
          <p className="text-xs text-gray-600">1,203 files</p>
          <p className="text-lg font-semibold">24 MB</p>
        </div>
      </div>
    </section>
  );
}
