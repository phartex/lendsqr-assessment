import React, { useState } from 'react';
import './ThreeDotMenu.scss';

interface ThreeDotMenuProps {
  onViewDetails: () => void;
  onBlacklistUser: () => void;
  onActivateUser: () => void;
}

const ThreeDotMenu: React.FC<ThreeDotMenuProps> = ({ onViewDetails, onBlacklistUser, onActivateUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="three-dot-menu">
      <button onClick={toggleMenu} className="three-dot-button">⋮</button>
      {isOpen && (
        <ul className="menu">
          <li onClick={onViewDetails}>View Details</li>
          <li onClick={onBlacklistUser}>Blacklist User</li>
          <li onClick={onActivateUser}>Activate User</li>
        </ul>
      )}
    </div>
  );
};

export default ThreeDotMenu;
