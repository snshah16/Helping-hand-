// src/pages/Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      // You can fetch user notifications, messages, or other data here
      axios.get('http://localhost:5000/api/user', {
        headers: { Authorization: token }
      }).then(res => {
        console.log(res.data);
      });
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the donations notification and messaging area.</p>
    </div>
  );
}

export default Home;
