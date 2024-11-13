import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react';

const PrivacyPolicy =()=>{

    return(
    <div className='contactus'>
        <h1>Privacy Policy</h1>
      <p>At <strong>Rupee-Rise</strong>, your privacy is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is collected and recorded by Rupee-Rise and how we use it.</p>

      <h2>Information We Collect</h2>
      <p>We collect personal information that you provide to us when using the Rupee-Rise platform, including:</p>
      <ul>
        <li><strong>Account Information:</strong> Such as your name, email address, and payment details when you register and use the platform.</li>
        <li><strong>Referral Information:</strong> Data regarding your referrals and their interactions on the platform.</li>
        <li><strong>Technical Information:</strong> Including IP address, browser type, device information, and access times which help us improve the user experience.</li>
        <li><strong>Usage Data:</strong> Information on how you use our website or platform, such as actions, pages visited, and preferences.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>The information we collect is used for the following purposes:</p>
      <ul>
        <li><strong>Provide Services:</strong> To allow you to use the Rupee-Rise platform and access your account.</li>
        <li><strong>Personalization:</strong> To customize your experience and provide content tailored to your preferences.</li>
        <li><strong>Communication:</strong> To send important account-related updates, security notifications, and promotional content if you opt-in.</li>
        <li><strong>Improvement:</strong> To enhance and optimize our platform based on usage data.</li>
        <li><strong>Referral Tracking:</strong> To manage your referral activities and track your rewards.</li>
      </ul>

      <h2>Data Security</h2>
      <p>We use industry-standard security measures to protect your personal data. Your information is stored securely, and access to it is restricted to authorized personnel only. However, please note that no method of electronic storage or transmission over the internet is 100% secure.</p>

      <h2>Cookies</h2>
      <p>We use cookies to enhance your experience on the platform. Cookies are small data files that are stored on your device to help us remember your preferences and improve site functionality. You can control cookie settings through your browser, but disabling cookies may impact your experience on the platform.</p>

      <h2>Third-Party Disclosure</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted third-party service providers who assist us in operating the platform, conducting business, or servicing you, provided that these parties agree to keep your information confidential. We may also disclose information when required by law or to protect our legal rights.</p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> any personal data we hold about you.</li>
        <li><strong>Rectify</strong> any inaccurate or incomplete personal data.</li>
        <li><strong>Request</strong> deletion of your personal data under certain circumstances, such as if it is no longer necessary for the purposes for which it was collected.</li>
        <li><strong>Opt-Out</strong> of marketing communications by following the unsubscribe link in emails or by contacting us directly.</li>
      </ul>

      <h2>Changes to This Privacy Policy</h2>
      <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the date of the most recent update. Please check this page periodically for any updates. Continued use of the platform after any changes to this policy will constitute your acceptance of the updated terms.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please feel free to contact us:</p>
      <ul>
        <li><strong>Email:</strong> support@rupeerise.com</li>
        <li><strong>Phone:</strong> +91-123-456-7890</li>
      </ul>

        <a href="/" class="cta-button" style={{
        border:`solid 2px black`,
        borderRadius:`2px`,
        padding:`2px`
      }}>Get Started</a>
    </div>)

}

export default PrivacyPolicy;
