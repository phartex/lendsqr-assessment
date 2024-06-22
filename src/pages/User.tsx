import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.scss';

const User: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3') // Replace with your mock API URL
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="user-container">
      <p>Loading...</p>
      <img src={`/assets/lendsqr-logo.png`} alt='logo'/>
    </div>;
  }

  return (
    <div className="user-container">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;

// 'https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3'