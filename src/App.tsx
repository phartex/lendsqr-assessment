import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import UserDetails from './pages/UserDetails';
import SideMenu from './components/SideMenu';
import Login from './pages/Login';
import './App.css'; 
import Navbar from './pages/NavBar';
import DashBoard from './pages/DashBoard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated ? (
          <>
            <Navbar onToggleMenu={handleToggleMenu} />
            <SideMenu isOpen={isMenuOpen} />
            <div className="main-content">
              <Routes>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/users" element={<User />} />
                <Route path="/users/:id" element={<UserDetails />} />
              </Routes>
            </div>
          </>
        ) : (
          
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
