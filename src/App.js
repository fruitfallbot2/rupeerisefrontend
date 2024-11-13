import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import CancellationRefundPolicies from './CancellationRefundPolicies';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/termsandconditions' element={<TermsAndConditions/>} />
          <Route path='/cancellationrefundpolicies' element={<CancellationRefundPolicies/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
