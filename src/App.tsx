import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

import User from './pages/User';
import UserDetails from './pages/UserDetails';
import Dashboard from './pages/DashBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

