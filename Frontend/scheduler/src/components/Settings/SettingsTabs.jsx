// import AccountTab from './AccountTab';

// export default function SettingsTabs() {
//   return (
//     <div className="md:col-span-2">
//       <AccountTab />
//       {/* Other tabs would go here */}
//     </div>
//   );
// }

import AccountTab from './AccountTab';
import SecurityTab from './SecurityTab';
import SocialTab from './SocialAccountsTab';
import BillingTab from './SubscriptionTab';
import PreferencesTab from './PreferencesTab';

export default function SettingsTabs({ activeTab }) {
  return (
    <div className="md:col-span-2">
      {activeTab === 'Account' && <AccountTab />}
      {activeTab === 'Security' && <SecurityTab />}
      {activeTab === 'Social Accounts' && <SocialTab />}
      {activeTab === 'Billing' && <BillingTab />}
      {activeTab === 'Preferences' && <PreferencesTab />}
    </div>
  );
}
