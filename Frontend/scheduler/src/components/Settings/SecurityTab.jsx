// export default function SecurityTab() {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">Security</h3>
//       <div className="space-y-4">
//         <div>
//           <label className="block mb-2 text-gray-700">Current Password</label>
//           <input type="password" className="w-full p-2 border rounded-lg" />
//         </div>
//         <div>
//           <label className="block mb-2 text-gray-700">New Password</label>
//           <input type="password" className="w-full p-2 border rounded-lg" />
//         </div>
//         <div>
//           <label className="block mb-2 text-gray-700">Confirm Password</label>
//           <input type="password" className="w-full p-2 border rounded-lg" />
//         </div>
//         <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4">Update Password</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

const SecurityTab = () => {
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [twoFactor, setTwoFactor] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    // Logic to handle password change here
  };

  const toggle2FA = () => {
    setTwoFactor((prev) => !prev);
    alert(twoFactor ? '2FA Disabled' : '2FA Enabled');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Security Settings</h2>

      <form onSubmit={handlePasswordSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Current Password</label>
          <input type="password" name="current" value={passwords.current} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input type="password" name="new" value={passwords.new} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm New Password</label>
          <input type="password" name="confirm" value={passwords.confirm} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Change Password
        </button>
      </form>

      <div className="flex items-center justify-between mt-6">
        <div>
          <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-500">Adds extra security to your account.</p>
        </div>
        <button onClick={toggle2FA} className={`px-4 py-2 rounded text-white ${twoFactor ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {twoFactor ? 'Disable 2FA' : 'Enable 2FA'}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Recent Logins</h3>
        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Device</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Chrome on Windows</td>
              <td className="p-2 border">Pune, India</td>
              <td className="p-2 border">2025-04-04</td>
            </tr>
            <tr>
              <td className="p-2 border">Safari on iPhone</td>
              <td className="p-2 border">Mumbai, India</td>
              <td className="p-2 border">2025-04-03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecurityTab;