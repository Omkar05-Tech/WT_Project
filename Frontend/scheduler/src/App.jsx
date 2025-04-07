// // // import { useState, useEffect } from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // import Sidebar from "./components/Sidebar";
// // // import DashboardPage from "./pages/DashboardPage";
// // // import CreatePostPage from "./pages/CreatePostPage";
// // // import CalendarPage from "./pages/CalendarPage";
// // // import AnalyticsPage from "./pages/AnalyticsPage";
// // // import SettingsPage from "./pages/SettingsPage";
// // // import ProfilePage from "./pages/ProfilePage";
// // // import Login from "./pages/Login";
// // // import Register from "./pages/Register"; // 1. Import the Register component

// // // function App() {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// // //   useEffect(() => {
// // //     // Check localStorage for authentication
// // //     const authStatus = localStorage.getItem("isAuthenticated");
// // //     if (authStatus === "true") {
// // //       setIsAuthenticated(true);
// // //     }
// // //   }, []);

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Public Routes */}
// // //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
// // //         <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        
// // //         {/* Default redirect */}
// // //         <Route path="/" element={<Navigate to="/login" />} />

// // //         {/* Protected Routes */}
// // //         <Route
// // //           path="/dashboard"
// // //           element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
// // //         />
        
// // //         {/* Login Route */}
// // //         <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

// // //         {/* Protected Routes (Redirect if not logged in) */}
// // //         <Route
// // //           path="/dashboard"
// // //           element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
// // //         />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // // Dashboard Wrapper with Sidebar
// // // function Dashboard() {
// // //   const [activePage, setActivePage] = useState("dashboard");

// // //   const renderPage = () => {
// // //     switch (activePage) {
// // //       case "dashboard":
// // //         return <DashboardPage />;
// // //       case "create-post":
// // //         return <CreatePostPage />;
// // //       case "calendar":
// // //         return <CalendarPage />;
// // //       case "analytics":
// // //         return <AnalyticsPage />;
// // //       case "settings":
// // //         return <SettingsPage />;
// // //       case "profile":
// // //         return <ProfilePage />;
// // //       default:
// // //         return <DashboardPage />;
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-gray-100 h-screen flex">
// // //       <Sidebar setActivePage={setActivePage} />
// // //       {renderPage()}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import { useState, useEffect } from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import DashboardLayout from './components/DashboardLayout';

// // function App() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(
// //     !!localStorage.getItem('token')
// //   );

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/login" element={
// //           <Login setIsAuthenticated={setIsAuthenticated} />
// //         } />
// //         <Route path="/register" element={
// //           <Register setIsAuthenticated={setIsAuthenticated} />
// //         } />
// //         <Route path="/dashboard/*" element={
// //           isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
// //         } />
// //         <Route path="/" element={<Navigate to="/login" />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// // import { useState, useEffect } from "react";
// // // import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Sidebar from "./components/Sidebar";
// // import DashboardPage from "./pages/DashboardPage";
// // import CreatePostPage from "./pages/CreatePostPage";
// // import CalendarPage from "./pages/CalendarPage";
// // import AnalyticsPage from "./pages/AnalyticsPage";
// // import SettingsPage from "./pages/SettingsPage";
// // import ProfilePage from "./pages/ProfilePage";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";

// // function App() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(
// //     !!localStorage.getItem("token") || localStorage.getItem("isAuthenticated") === "true"
// //   );

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
// //         <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
// //         <Route path="/" element={<Navigate to="/login" />} />

// //         {/* Protected Routes (Dashboard + Subpages) */}
// //         <Route
// //           path="/dashboard/*"
// //           element={
// //             isAuthenticated ? (
// //               <DashboardLayout />
// //             ) : (
// //               <Navigate to="/login" />
// //             )
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // // Dashboard Layout Wrapper (Sidebar + Dynamic Content)
// // function DashboardLayout() {
// //   const [activePage, setActivePage] = useState("dashboard");

// //   const renderPage = () => {
// //     switch (activePage) {
// //       case "dashboard":
// //         return <DashboardPage />;
// //       case "create-post":
// //         return <CreatePostPage />;
// //       case "calendar":
// //         return <CalendarPage />;
// //       case "analytics":
// //         return <AnalyticsPage />;
// //       case "settings":
// //         return <SettingsPage />;
// //       case "profile":
// //         return <ProfilePage />;
// //       default:
// //         return <DashboardPage />;
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 h-screen flex">
// //       <Sidebar setActivePage={setActivePage} />
// //       {renderPage()}
// //     </div>
// //   );
// // }

// // export default App; 

// import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Sidebar from './components/Sidebar';
// import DashboardPage from './pages/DashboardPage';
// import CreatePostPage from './pages/CreatePostPage';
// import CalendarPage from './pages/CalendarPage';
// import AnalyticsPage from './pages/AnalyticsPage';
// import SettingsPage from './pages/SettingsPage';
// import ProfilePage from './pages/ProfilePage';
// import Login from './pages/Login';
// import Register from './pages/Register';

// // Layout Components
// function AuthLayout() {
//   return (
//     <div className="bg-gray-100 h-screen flex items-center justify-center">
//       <Outlet />
//     </div>
//   );
// }

// function ProtectedLayout() {
//   return (
//     <div className="bg-gray-100 h-screen flex">
//       <Sidebar />
//       <main className="flex-1 overflow-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// // Auth Wrapper
// function ProtectedRoute({ children }) {
//   const isAuthenticated = !!localStorage.getItem("token") || 
//                          localStorage.getItem("isAuthenticated") === "true" ||
//                          localStorage.getItem("googleAuth") === "true";

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// // Router Configuration
// const router = createBrowserRouter([
//   // Redirect empty path to /login
//   {
//     path: '/',
//     element: <Navigate to="/login" replace />,
//   },
//   // Auth routes
//   {
//     path: '/',
//     element: <AuthLayout />,
//     children: [
//       { path: 'login', element: <Login /> },
//       { path: 'register', element: <Register /> }
//     ],
//   },
//   // Protected routes
//   {
//     path: '/',
//     element: <ProtectedRoute><ProtectedLayout /></ProtectedRoute>,
//     children: [
//       { path: 'dashboard', element: <DashboardPage /> },
//       { path: 'create-post', element: <CreatePostPage /> },
//       { path: 'calendar', element: <CalendarPage /> },
//       { path: 'analytics', element: <AnalyticsPage /> },
//       { path: 'settings', element: <SettingsPage /> },
//       { path: 'profile', element: <ProfilePage /> }
//     ],
//   },
// ], {
//   basename: "/social-scheduler"
// });

// // Main App Component
// function App() {
//   // Replace with your actual Google Client ID
//   const googleClientId = "91442474676-1tgi4tffeud6fjvffubbag90vfmfqbdr.apps.googleusercontent.com";
  
//   return (
//     <GoogleOAuthProvider clientId={googleClientId}>
//       <RouterProvider router={router} />
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import CreatePostPage from "./pages/CreatePostPage";
import CalendarPage from "./pages/CalendarPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") || localStorage.getItem("isAuthenticated") === "true"
  );

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Protected Routes (Dashboard + Subpages) */}
        <Route path="/dashboard" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route index element={<DashboardPage />} /> {/* Default dashboard view */}
          <Route path="create-post" element={<CreatePostPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Dashboard Layout Wrapper (Sidebar + Dynamic Content)
function DashboardLayout() {
  return (
    <div className="bg-gray-100 h-screen flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet /> {/* This is where the child routes will render */}
      </div>
    </div>
  );
}

export default App;