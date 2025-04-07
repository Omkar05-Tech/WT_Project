// // // export default function PreferencesTab() {
// // //   return (
// // //     <div>
// // //       <h3 className="text-xl font-semibold mb-4">Preferences</h3>
// // //       <div className="space-y-4">
// // //         <div>
// // //           <label className="block mb-2 text-gray-700">Language</label>
// // //           <select className="w-full p-2 border rounded-lg">
// // //             <option>English</option>
// // //             <option>Spanish</option>
// // //             <option>French</option>
// // //           </select>
// // //         </div>
// // //         <div>
// // //           <label className="block mb-2 text-gray-700">Theme</label>
// // //           <select className="w-full p-2 border rounded-lg">
// // //             <option>Light</option>
// // //             <option>Dark</option>
// // //           </select>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from 'react';

// // const PreferencesTab = () => {
// //   const [language, setLanguage] = useState('English');
// //   const [theme, setTheme] = useState('Light');
// //   const [notifications, setNotifications] = useState(true);

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-2xl font-bold">Preferences</h2>
// //       <div className="space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium">Language</label>
// //           <select
// //             className="mt-1 border p-2 rounded w-full"
// //             value={language}
// //             onChange={(e) => setLanguage(e.target.value)}
// //           >
// //             <option>English</option>
// //             <option>Hindi</option>
// //             <option>Marathi</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium">Theme</label>
// //           <select
// //             className="mt-1 border p-2 rounded w-full"
// //             value={theme}
// //             onChange={(e) => setTheme(e.target.value)}
// //           >
// //             <option>Light</option>
// //             <option>Dark</option>
// //           </select>
// //         </div>

// //         <div className="flex items-center justify-between">
// //           <span className="text-sm">Receive Email Notifications</span>
// //           <input
// //             type="checkbox"
// //             checked={notifications}
// //             onChange={() => setNotifications(!notifications)}
// //             className="w-5 h-5"
// //           />
// //         </div>
// //       </div>

// //       <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
// //         Save Preferences
// //       </button>
// //     </div>
// //   );
// // };

// // export default PreferencesTab;


// import React, { useState } from 'react';

// const PreferencesTab = () => {
//   const [language, setLanguage] = useState('English');
//   const [theme, setTheme] = useState('Light');
//   const [notifications, setNotifications] = useState(true);
//   const [autosave, setAutosave] = useState(false);
//   const [dashboardLayout, setDashboardLayout] = useState('Grid');

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold">Preferences</h2>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Language</label>
//           <select
//             className="mt-1 border p-2 rounded w-full"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//           >
//             <option>English</option>
//             <option>Hindi</option>
//             <option>Marathi</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Theme</label>
//           <select
//             className="mt-1 border p-2 rounded w-full"
//             value={theme}
//             onChange={(e) => setTheme(e.target.value)}
//           >
//             <option>Light</option>
//             <option>Dark</option>
//           </select>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-sm">Receive Email Notifications</span>
//           <input
//             type="checkbox"
//             checked={notifications}
//             onChange={() => setNotifications(!notifications)}
//             className="w-5 h-5"
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-sm">Enable Autosave for Drafts</span>
//           <input
//             type="checkbox"
//             checked={autosave}
//             onChange={() => setAutosave(!autosave)}
//             className="w-5 h-5"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Dashboard Layout</label>
//           <select
//             className="mt-1 border p-2 rounded w-full"
//             value={dashboardLayout}
//             onChange={(e) => setDashboardLayout(e.target.value)}
//           >
//             <option>Grid</option>
//             <option>List</option>
//             <option>Compact</option>
//           </select>
//         </div>
//       </div>

//       <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//         Save Preferences
//       </button>
//     </div>
//   );
// };

// export default PreferencesTab;


import React, { useState, useEffect } from 'react';

const PreferencesTab = () => {
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [autosave, setAutosave] = useState(false);
  const [dashboardLayout, setDashboardLayout] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPreferences() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found. Please log in.');
          setLoading(false);
          return;
        }
        const response = await fetch('/api/preferences', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch preferences: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          setLanguage(data.language);
          setTheme(data.theme);
          setNotifications(data.notifications);
          setAutosave(data.autosave);
          setDashboardLayout(data.dashboardLayout);
        }
      } catch (err) {
        console.error('Error fetching preferences:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPreferences();
  }, []);

  const handleSavePreferences = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }
      const preferencesData = { language, theme, notifications, autosave, dashboardLayout };
      const response = await fetch('/api/preferences', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(preferencesData),
      });
      if (response.ok) {
        alert('Preferences saved!');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save preferences.');
      }
    } catch (err) {
      console.error('Error saving preferences:', err);
      setError('Failed to save preferences.');
    }
  };

  if (loading) {
    return <div>Loading preferences...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Preferences</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Language</label>
          <select
            className="mt-1 border p-2 rounded w-full"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Theme</label>
          <select
            className="mt-1 border p-2 rounded w-full"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Receive Email Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Enable Autosave for Drafts</span>
          <input
            type="checkbox"
            checked={autosave}
            onChange={() => setAutosave(!autosave)}
            className="w-5 h-5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Dashboard Layout</label>
          <select
            className="mt-1 border p-2 rounded w-full"
            value={dashboardLayout}
            onChange={(e) => setDashboardLayout(e.target.value)}
          >
            <option>Grid</option>
            <option>List</option>
            <option>Compact</option>
          </select>
        </div>
      </div>

      <button onClick={handleSavePreferences} className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Preferences
      </button>
    </div>
  );
};

export default PreferencesTab;