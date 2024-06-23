import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.scss';
import UserTable from './UserTable';
import Loading from '../components/Loading';

const DashBoard: React.FC = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3
        const response = await axios.get('https://run.mocky.io/v3/3a73bc72-6809-4772-8bed-cdef597074d2');
        localStorage.setItem('users', JSON.stringify(response.data));
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
    <div className="dashboard-container">
      {isDataFetched ? <h1>Dashboard</h1> : ''}
      {isDataFetched ? <UserTable /> : <Loading/>
      }
    </div>
  );
};

export default DashBoard;

