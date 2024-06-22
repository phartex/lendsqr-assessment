import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <NavLink to="/dashboard"  className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/users"  className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
        </li>
        {/* <li>
          <NavLink to="/"  className={({ isActive }) => isActive ? 'active' : ''}>Guarantors</NavLink>
        </li>
        <li>
          <NavLink to="/"  className={({ isActive }) => isActive ? 'active' : ''}>Loans</NavLink>
        </li>
        <li>
          <NavLink to="/"  className={({ isActive }) => isActive ? 'active' : ''}>Decision Models</NavLink>
        </li>
        <li>
          <NavLink to="/"  className={({ isActive }) => isActive ? 'active' : ''}>Savings</NavLink>
        </li>
        <li>
          <NavLink to="/" className="active">Loan Requests</NavLink>
        </li>
        <li>
          <NavLink to="/" className="active">Whitelist</NavLink>
        </li>
        <li>
          <NavLink to="/" className="active">Karma</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default SideMenu
