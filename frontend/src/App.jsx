import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/signup/SignupPage";
import LoginPage from "./pages/auth/login/LoginPage";
import Notification from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";


import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* common component cause it s not wrapped in routes */}
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>

      <RightPanel />
    </div>
  );
}

export default App;
