import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

import User from './pages/User';
import UserDetails from './pages/UserDetails';
import Dashboard from './pages/DashBoard';
import SideMenu from './components/SideMenu';

const App: React.FC = () => {
  return (
    <Router>
    <div className="app-container">
      <SideMenu />
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<UserDetails />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;

