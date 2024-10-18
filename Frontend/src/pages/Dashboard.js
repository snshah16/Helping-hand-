// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem('token');
  if (!token) {
    alert('You must be logged in to access this page!');
    navigate('/login'); // Redirect to login if no token
  }

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected page only accessible by logged-in users.</p>
    </div>
  );
}

export default Dashboard;
