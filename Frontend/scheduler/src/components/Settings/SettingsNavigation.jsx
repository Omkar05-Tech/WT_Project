// export default function SettingsNavigation() {
//     return (
//       <div className="md:col-span-1">
//         <div className="space-y-2">
//           <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">
//             <i className="fas fa-user-circle mr-2"></i> Account
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
//             <i className="fas fa-bell mr-2"></i> Notifications
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
//             <i className="fas fa-shield-alt mr-2"></i> Security
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
//             <i className="fas fa-share-alt mr-2"></i> Social Accounts
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
//             <i className="fas fa-credit-card mr-2"></i> Billing
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
//             <i className="fas fa-sliders-h mr-2"></i> Preferences
//           </button>
//         </div>
//       </div>
//     );
//   }

export default function SettingsNavigation({ setActiveTab, activeTab }) {
  const tabs = [
    { name: 'Account', icon: 'fas fa-user-circle' },
    { name: 'Security', icon: 'fas fa-shield-alt' },
    { name: 'Social Accounts', icon: 'fas fa-share-alt' },
    { name: 'Billing', icon: 'fas fa-credit-card' },
    { name: 'Preferences', icon: 'fas fa-sliders-h' },
  ];

  return (
    <div className="md:col-span-1">
      <div className="space-y-2">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === tab.name ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
            }`}
          >
            <i className={`${tab.icon} mr-2`}></i> {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
