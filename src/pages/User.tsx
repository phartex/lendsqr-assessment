import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.scss';
import Loading from '../components/Loading';
import UserTable from './UserTable';

const User: React.FC = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3
        const response = await axios.get('https://run.mocky.io/v3/3a73bc72-6809-4772-8bed-cdef597074d2');
        localStorage.setItem('users', JSON.stringify(response.data));
        console.log('---')
        setIsDataFetched(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!localStorage.getItem('users')) {
      fetchData();
    } else {
      setIsDataFetched(true);
    }
  }, []);

  return (
    <div className="user-container">
      {isDataFetched ? <h1>User</h1> : ''}
      {isDataFetched ? <UserTable /> : <Loading/>
      }
    </div>
  );
};

export default User;

// 'https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3'