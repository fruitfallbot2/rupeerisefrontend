import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CancellationRefundPolicies = ()=> {

    return (
        <div className="cancellationrefundpolicies">
            <h1>Cancellation & Refund Policy</h1>
      <p>At <strong>Rupee-Rise</strong>, we aim to provide the best experience for all our users. However, we understand that there may be instances where you need to cancel a payment or request a refund. This Cancellation & Refund Policy outlines our approach to cancellations and refunds for payments made through our platform.</p>

      <h2>1. Cancellation Policy</h2>
      <p>We believe in transparency and fairness. Once a payment has been successfully processed on Rupee-Rise, it is considered final and non-cancellable. However, in the following exceptional circumstances, cancellation may be considered:</p>
      <ul>
        <li>If there was a technical error during the payment process that resulted in a duplicate charge or incorrect payment.</li>
        <li>If the transaction was made without the user's consent (e.g., fraud or unauthorized access to the account).</li>
      </ul>
      <p>If you believe that your payment was made in error or was unauthorized, please contact our support team immediately at <strong>support@rupeerise.com</strong> for assistance.</p>

      <h2>2. Refund Policy</h2>
      <p>We want all our users to be satisfied with the services provided on Rupee-Rise. However, given the nature of the platform, we have specific guidelines for refund requests:</p>
      <ul>
        <li><strong>Refund Eligibility:</strong> Refunds are only eligible in cases where a payment was made in error, or the platform encountered a technical fault that prevented the intended service (e.g., failure to process the doubling of funds due to system issues).</li>
        <li><strong>Refund Requests:</strong> To request a refund, users must contact our support team within 7 days of the payment date. Refunds will not be granted for payments made more than 7 days prior to the request.</li>
        <li><strong>Refund Method:</strong> If your refund is approved, the amount will be returned via the original payment method. Please note that the time taken for the refund to process may depend on the payment service provider and may take up to 7-10 business days.</li>
        <li><strong>Non-Refundable Payments:</strong> Payments made for referral services or for participation in the doubling program will not be refunded once processed, as these are considered part of our service terms. This also applies to any additional payments made for further doubling of funds.</li>
      </ul>

      <h2>3. How to Request a Refund</h2>
      <p>If you are eligible for a refund, please follow these steps:</p>
      <ul>
        <li>Contact our support team via email at <strong>support@rupeerise.com</strong> with your payment details (transaction ID, amount, date, etc.).</li>
        <li>Provide a brief description of the reason for the refund request.</li>
        <li>Our support team will review your request and process the refund if applicable, within the given time frame.</li>
      </ul>

      <h2>4. Dispute Resolution</h2>
      <p>In case of any disputes related to cancellation or refunds, we encourage you to first contact our support team. We will make every effort to resolve the issue promptly. If the dispute cannot be resolved to your satisfaction, it will be governed by the applicable laws of India, and disputes will be handled by the courts in India.</p>

      <h2>5. Changes to This Policy</h2>
      <p>We reserve the right to update or modify this Cancellation & Refund Policy at any time. Any changes will be posted on this page with an updated date. Please review this page periodically to stay informed about our policy. Continued use of our platform after any changes to this policy will constitute your acceptance of the updated terms.</p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions or concerns about our Cancellation & Refund Policy, please feel free to contact us at:</p>
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

export default CancellationRefundPolicies;