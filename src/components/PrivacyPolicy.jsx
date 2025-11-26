import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">DhvaniCast – Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            At DhvaniCast, we aim to provide a seamless, high-quality communication experience through our internet-based radio and global-connect platform. This Refund Policy explains the conditions under which refunds may be issued for our digital services or subscriptions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Digital Service Nature</h2>
          <p className="text-gray-300 mb-4">
            DhvaniCast operates entirely online. All features, premium tools, and subscriptions are digital services and do not involve any physical product or shipment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Refund Eligibility</h2>
          <p className="text-gray-300 mb-4">
            Refunds are handled carefully to prevent misuse. You may be eligible for a refund only under the following conditions:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">a. Duplicate Payment</h3>
          <p className="text-gray-300 mb-4">
            If you were charged twice for the same subscription or feature, we will issue a full refund after verification.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">b. Technical Issues (Unresolved)</h3>
          <p className="text-gray-300 mb-4">
            If you experience a technical problem that prevents you from using a paid feature and our support team cannot resolve it within 72 hours, you may request a refund.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">c. Service Not Activated</h3>
          <p className="text-gray-300 mb-4">
            If a paid feature or premium access was never activated on your account despite successful payment, a refund will be issued.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Non-Refundable Situations</h2>
          <p className="text-gray-300 mb-4">
            Refunds will not be provided in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Change of mind after purchase</li>
            <li className="mb-2">Partial usage of a subscription</li>
            <li className="mb-2">Temporary outages or server maintenance</li>
            <li className="mb-2">User error or incorrect account details during purchase</li>
            <li className="mb-2">Violation of DhvaniCast's terms leading to account restrictions</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Once digital services have been accessed or used, they are considered consumed and cannot be refunded.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refund Request Process</h2>
          <p className="text-gray-300 mb-4">
            To submit a refund request, please contact our support team through:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">In-App Support → Help → Billing</li>
            <li className="mb-2">Email: support@dhvanicast.com</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Please provide:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Registered mobile number / email</li>
            <li className="mb-2">Payment ID / Transaction ID</li>
            <li className="mb-2">Description of the issue</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Refund evaluations typically take 3–7 working days.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Mode & Timeline</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Approved refunds will be processed back to the original payment method.</li>
            <li className="mb-2">Refund completion may take 5–10 working days, depending on the bank or payment provider.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Subscription Cancellations</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">You may cancel your DhvaniCast subscription anytime.</li>
            <li className="mb-2">However, cancellation does not generate an automatic refund.</li>
            <li className="mb-2">Your premium access will continue until the end of the billing period.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Policy Changes</h2>
          <p className="text-gray-300 mb-4">
            DhvaniCast reserves the right to update or modify this Refund Policy at any time. Changes will be posted within the app or on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
