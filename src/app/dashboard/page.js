import RecentFiles from "@/components/RecentFiles";
import StorageOverview from "@/components/StorageOverview";

export default function DashboardPage() {
    return (
      <div className="container mx-auto">
        <div className="bg-white  p-4">
          <h1 className="text-xl font-bold border-b pb-4">Overview</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Upgrade Account
          </button>
          <StorageOverview />
          {/* <RecentFiles /> */}
        </div>
      </div>
    );
  }
  