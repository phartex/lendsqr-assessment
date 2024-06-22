import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const DashBoard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Link to="/users">View Users</Link>
    </div>
  );
};

export default DashBoard;
