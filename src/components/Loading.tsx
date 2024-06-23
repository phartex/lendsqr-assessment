import React from 'react';
import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <img src={`/assets/lendsqr-logo.png`} alt='logo' />
    </div>
  );
};

export default Loading;
