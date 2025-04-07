import WelcomeSection from '../components/Dashboard/WelcomeSection';
import ConnectedAccounts from '../components/Dashboard/ConnectAccounts';
import QuickStats from '../components/Dashboard/QuickStats';
import RecentActivity from '../components/Dashboard/RecentActivity';

export default function DashboardPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <WelcomeSection />
      <ConnectedAccounts />
      <QuickStats />
      <RecentActivity />
    </div>
  );
}

// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

// export default function DashboardLayout() {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />
//       <main className="dashboard-content">
//         <Outlet />
//       </main>
//     </div>
//   );
// }