import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentPolicy = () => {
  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-primary">8. Payment Policy</h2>
        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 31 December 2025<br /><strong>Jurisdiction:</strong> India</p>
        <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li><strong>General Support & Enquiries:</strong> <a href="mailto:Support@dcaudiorooms.com" className="text-primary hover:text-primary-light">Support@dcaudiorooms.com</a></li>
            <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dcaudiorooms.com" className="text-primary hover:text-primary-light">csae@dcaudiorooms.com</a></li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Payment Processing, Pricing, and Disclosure</h3>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms offers certain paid features, including private frequency access, which are processed exclusively through Razorpay, a regulated Indian payment gateway.
        </p>
        <p className="text-gray-300 mb-4">Before any purchase is completed, users are clearly informed of:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>The price of the service</li>
          <li>The duration and nature of the service</li>
          <li>Any applicable terms or limitations</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Charges are applied only after successful transaction confirmation from Razorpay. DC Audio Rooms does not process payments directly and does not store sensitive payment credentials such as card numbers, CVV codes, or UPI identifiers.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Fraud Detection and Risk Management</h3>
        <p className="text-gray-300 mb-4">
          To protect users and the platform from financial misuse, DC Audio Rooms monitors transactions for indicators of fraud, abuse, or unauthorized activity. This may include detecting unusual transaction patterns, repeated failed payment attempts, chargeback abuse, or violations of payment gateway policies.
        </p>
        <p className="text-gray-300 mb-4">Where suspicious activity is detected, DC Audio Rooms may:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Temporarily block or cancel transactions</li>
          <li>Suspend or restrict associated accounts</li>
          <li>Require additional verification</li>
          <li>Cooperate with Razorpay, financial institutions, or authorities</li>
        </ul>
        <p className="text-gray-300 mt-4">
          These measures are implemented to protect legitimate users, ensure compliance with financial regulations, and maintain platform integrity.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">8.3 User Payment Responsibilities</h3>
        <p className="text-gray-300 mb-4">Users are responsible for:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Reviewing pricing and service details before purchase</li>
          <li>Ensuring that payment methods used are authorized and secure</li>
          <li>Maintaining the confidentiality of their payment credentials</li>
        </ul>
        <p className="text-gray-300 mt-4">
          DC Audio Rooms is not responsible for unauthorized transactions resulting from user negligence, compromised payment methods, or third-party access to user accounts.
        </p>
      </div>
    </div>
  );
};

export default PaymentPolicy;