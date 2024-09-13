import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MobileSold from './components/MobileSold';
import MobileRemaining from './components/MobileRemaining';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mobile-sold" element={<MobileSold/>} />
        <Route path="/mobile-remaining" element={<MobileRemaining/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;