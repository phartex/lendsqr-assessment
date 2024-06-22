import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.scss';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3') 
      .then(response => {
        console.log(response.data)
        const user = response.data.find((user: any) => String(user.id) === id);
      
        setUser(user);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-details-container">
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}, {user.city}, {user.country}</p>
          <button onClick={() => localStorage.setItem('userDetails', JSON.stringify(user))}>
            Save Details
          </button>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
