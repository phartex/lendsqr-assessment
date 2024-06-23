import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import User from './pages/User';
import UserDetails from './pages/UserDetails';
import Dashboard from './pages/DashBoard';
import SideMenu from './components/SideMenu';
import Navbar from './pages/NavBar';

const App: React.FC = () => {
  return (
    <Router>
    <div className="app-container">
    <Navbar />
      <SideMenu />
      <div className="main-content">
      
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;

