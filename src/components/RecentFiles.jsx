// components/RecentFiles.js
import { DocumentTextIcon, PresentationChartBarIcon, PhotoIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function RecentFiles() {
  const files = [
    { id: 1, name: 'Presentation', type: 'presentation', members: 'Only you', date: '—' },
    { id: 2, name: 'Design guidelines', type: 'pdf', members: 'Only you', date: 'Nov 13, 2020' },
    { id: 3, name: 'Resources', type: 'document', members: 'Only you', date: '—' },
    { id: 4, name: 'Objectives', type: 'document', members: 'Only you', date: '—' },
    { id: 5, name: 'Screenshot', type: 'image', members: 'Only you', date: '—' },
  ];

  const getIconForType = (type) => {
    switch (type) {
      case 'presentation':
        return <PresentationChartBarIcon className="h-5 w-5 text-orange-600" />;
      case 'pdf':
        return <DocumentTextIcon className="h-5 w-5 text-red-600" />;
      case 'image':
        return <PhotoIcon className="h-5 w-5 text-green-600" />;
      default:
        return <DocumentTextIcon className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Files</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
              <th className="p-4">Name</th>
              <th className="p-4">Members</th>
              <th className="p-4">Last modified</th>
              <th className="p-4"></th>
            </tr>
          </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="border-b last:border-none hover:bg-gray-50">
                  {/* Checkbox + File Name + Icon */}
                  <td className="p-4 flex items-center space-x-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <div className="flex items-center space-x-2">
                      {getIconForType(file.type)}
                      <span className="font-medium text-gray-700">{file.name}</span>
                    </div>
                  </td>

                  {/* Members */}
                  <td className="p-4 text-gray-600">{file.members}</td>

                  {/* Last Modified */}
                  <td className="p-4 text-gray-600">{file.date}</td>

                  {/* More Options (Three Dots) */}
                  <td className="p-4 text-right">
                    <button className="text-gray-600 hover:text-gray-900">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            
        </table>
      </div>
    </section>
  );
}
