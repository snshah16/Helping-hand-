import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      localStorage.setItem('token', response.data.token);
      alert('Login Successful!');
      navigate('/');
    } catch (error) {
      alert('Login Failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
