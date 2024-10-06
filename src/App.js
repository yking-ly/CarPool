import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Login from './components/Login'; 
import Signup from './components/Signup';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/services" element={<Services />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;