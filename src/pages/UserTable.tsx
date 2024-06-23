import React, { useEffect, useState } from 'react';
import './UserTable.scss';
import ThreeDotMenu from '../components/ThreeDotMenu';
import { useNavigate } from 'react-router-dom';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);


  const handleViewDetails = (userId: number) => {
    console.log(userId)
    navigate(`/users/${userId}`);
  };

  const handleBlacklistUser = (userId: number) => {
    console.log('Blacklist user:', userId);
  };

  const handleActivateUser = (userId: number) => {
    console.log('Activate user:', userId);
  };


  return (
    <div className="user-table-container">
      <table>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.organisation}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <ThreeDotMenu
                  onViewDetails={() => handleViewDetails(user.id)}
                  onBlacklistUser={() => handleBlacklistUser(user.id)}
                  onActivateUser={() => handleActivateUser(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
