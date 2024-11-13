import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = ()=> {

    return (
        <div className="termsandconditions">
            <h1>Terms & Conditions</h1>
      <p>Welcome to <strong>Rupee-Rise</strong>. These Terms & Conditions govern your use of our platform, website, and services. By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the Rupee-Rise platform, you agree to comply with these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use the platform.</p>

      <h2>2. Account Registration</h2>
      <p>To access certain features of Rupee-Rise, you are required to create an account. When registering, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities under your account.</p>

      <h2>3. Payment and Referrals</h2>
      <p>As a part of using Rupee-Rise, users are required to make an initial payment to participate in the referral system. The payment amount is Rs. 5, and it will be doubled after successful referral activities. To continue benefiting, users may need to make additional payments as per our policies.</p>
      <p>By participating in the referral program, you agree to follow the rules and not engage in fraudulent activities or mislead other users. We reserve the right to suspend or terminate your account if we detect any violation of our referral program rules.</p>

      <h2>4. User Conduct</h2>
      <p>You agree to use the Rupee-Rise platform in accordance with all applicable laws and regulations. You will not use the platform for any illegal, harmful, or fraudulent activities. You are prohibited from:</p>
      <ul>
        <li>Posting or transmitting any unlawful, harmful, or offensive content.</li>
        <li>Engaging in any activities that could damage, disable, or impair the functioning of the platform.</li>
        <li>Attempting to gain unauthorized access to the platform or its servers.</li>
      </ul>

      <h2>5. Payment Methods and Fees</h2>
      <p>Payments made on Rupee-Rise must be through the payment methods accepted by the platform. You are responsible for any transaction fees, taxes, or charges imposed by your payment provider. We reserve the right to modify the payment methods or fees at any time.</p>

      <h2>6. Rewards and Withdrawals</h2>
      <p>Users can earn rewards by referring other users to the platform, and these rewards may be credited to their accounts. The platform reserves the right to set terms for withdrawals or conversions of rewards. All users are required to follow the process laid out for withdrawing rewards, and we may suspend or limit withdrawals if any fraud or violation is detected.</p>

      <h2>7. Limitation of Liability</h2>
      <p>Rupee-Rise will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of the platform. You acknowledge that your use of the platform is at your own risk and that Rupee-Rise does not guarantee any outcomes from participating in our services.</p>

      <h2>8. Changes to Terms</h2>
      <p>Rupee-Rise reserves the right to modify or update these Terms & Conditions at any time. Any changes will be effective once posted on this page. You are advised to review these terms periodically. Your continued use of the platform after changes to the terms constitutes your acceptance of the updated terms.</p>

      <h2>9. Termination</h2>
      <p>Rupee-Rise reserves the right to suspend or terminate your account at any time, without notice, for violations of these Terms & Conditions or any illegal activities. Upon termination, all rights granted to you will be revoked, and you must immediately cease using the platform.</p>

      <h2>10. Governing Law</h2>
      <p>These Terms & Conditions will be governed by and construed in accordance with the laws of India. Any disputes arising from the use of the platform will be subject to the exclusive jurisdiction of the courts located in India.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about these Terms & Conditions or the Rupee-Rise platform, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@rupeerise.com</li>
        <li><strong>Phone:</strong> +91-123-456-7890</li>
      </ul>
      <a href="/" class="cta-button" style={{
        border:`solid 2px black`,
        borderRadius:`2px`,
        padding:`2px`
      }}>Get Started</a>
        </div>
    )
};

export default TermsAndConditions;