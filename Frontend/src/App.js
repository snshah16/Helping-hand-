import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donate from './pages/Donate';
import PickupDelivery from './pages/PickupDelivery';
import SignUp from './pages/SignUp'; // New SignUp page
import Login from './pages/Login'; // New Login page
import Dashboard from './pages/Dashboard'; // New protected page
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/pickup-delivery" element={<PickupDelivery />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
