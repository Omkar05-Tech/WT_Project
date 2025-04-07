// export default function SocialTab() {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">Social Accounts</h3>
//       <p className="text-gray-600 mb-2">Connect your social accounts for scheduling posts.</p>
//       <div className="space-y-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Connect Facebook</button>
//         <button className="bg-sky-500 text-white px-4 py-2 rounded">Connect Twitter</button>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded">Connect Instagram</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const SocialAccountsTab = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, platform: 'Instagram', username: '@yourinsta' },
    { id: 2, platform: 'Twitter', username: '@yourtwitter' },
    { id: 3, platform: 'LinkedIn', username: 'Your LinkedIn' },
  ]);

  const removeAccount = (id) => {
    setAccounts(accounts.filter((acc) => acc.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Connected Social Accounts</h2>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div key={account.id} className="flex justify-between items-center border rounded p-4">
            <div>
              <h4 className="font-medium">{account.platform}</h4>
              <p className="text-sm text-gray-500">{account.username}</p>
            </div>
            <button
              onClick={() => removeAccount(account.id)}
              className="text-red-600 hover:text-red-800 flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-1" /> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccountsTab;