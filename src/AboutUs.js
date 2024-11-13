import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react';

const AboutUs =()=>{

    return(
    <div className='aboutus'>

      <h1>Welcome to Rupee-Rise!</h1>
      <p>At <strong>Rupee-Rise</strong>, we believe in creating opportunities for everyone to grow their earnings in a secure, transparent, and fair way. Our innovative referral-based platform allows you to earn and multiply your money by simply helping others discover our service.</p>

      <h2>Our Mission</h2>
      <p>Our mission is to empower individuals by providing a simple yet effective way to earn by sharing opportunities. We aim to create a community-driven platform where users can help each other grow and benefit through a structured referral process. We’re committed to providing a legitimate, risk-free opportunity to anyone looking to make their money work for them.</p>

      <h2>How It Works</h2>
      <ul>
        <li><strong>Simple Start</strong>: You begin by making a small payment of Rs. 5 to the website.</li>
        <li><strong>Referral Rewards</strong>: After making the payment, you will receive a unique referral code.</li>
        <li><strong>Earn More</strong>: By inviting two new users to join using your referral code, your initial Rs. 5 will be doubled and credited back to you.</li>
        <li><strong>Continue to Grow</strong>: If you choose to continue, further earnings can be achieved by paying a small portion of the doubled amount to keep the cycle going and unlock even greater rewards.</li>
      </ul>

      <h2>Why Choose Rupee-Rise?</h2>
      <ul>
        <li><strong>Transparent and Fair</strong>: We operate with full transparency, so you always know exactly how the referral process works and where your money goes.</li>
        <li><strong>Community-Oriented</strong>: Rupee-Rise is built around a community of users helping one another. Your growth is linked to others' growth, making it a cooperative, win-win process.</li>
        <li><strong>Safe and Secure</strong>: We prioritize the safety of your transactions and personal data. Our platform uses industry-standard security measures to keep your information secure.</li>
      </ul>

      <h2>Our Vision</h2>
      <p>We envision a world where everyone has the opportunity to grow their financial resources without the need for complex investments. With Rupee-Rise, we’re breaking down barriers and providing an accessible and straightforward path for financial growth, one step at a time.</p>

      <h2>Get Started Today</h2>
      <p>Join thousands of other users who are already growing their earnings with Rupee-Rise. It’s easy to get started, and you’ll be part of a thriving community of like-minded individuals.</p>

      <a href="/" class="cta-button" style={{
        border:`solid 2px black`,
        borderRadius:`2px`,
        padding:`2px`
      }}>Get Started</a>
    </div>
    )

}

export default AboutUs;