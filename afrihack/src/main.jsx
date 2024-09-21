import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Profile from './assets/Components/Profile';
import LandingPage from '../LandingPage.jsx';

createRoot(document.getElementById('root')).render(

  <Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/profileMaker" element={<App />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Router>

)


