import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react';

const ContactUs =()=>{

    return(
    <div className='contactus'>
        <h1>Contact Us</h1>
        <p>If you have any questions, need assistance, or want to know more about how Rupee-Rise works, we're here to help. Please feel free to reach out to us through the form below, or use any of the other contact options available. We look forward to hearing from you!</p>

      <h2>Send Us a Message</h2>
      <div class="contact-form">
        <form action="submit-form" method="POST">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
          </div>

          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Write your message here" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <h2>Other Ways to Contact Us</h2>
      <p>If you prefer, you can also reach us through the following channels:</p>
      <ul>
        <li><strong>Email:</strong> support@rupeerise.com</li>
        <li><strong>Phone:</strong> +91-123-456-7890</li>
        <li><strong>Social Media:</strong>
          <ul>
            <li>Facebook: <a href="https://www.facebook.com/rupeerise" target="_blank">RupeeRise</a></li>
            <li>Twitter: <a href="https://twitter.com/rupeerise" target="_blank">RupeeRise</a></li>
            <li>Instagram: <a href="https://www.instagram.com/rupeerise" target="_blank">RupeeRise</a></li>
          </ul>
        </li>
      </ul>

      <a href="/" class="cta-button" style={{
        border:`solid 2px black`,
        borderRadius:`2px`,
        padding:`2px`
      }}>Get Started</a>
    </div>)

}

export default ContactUs;