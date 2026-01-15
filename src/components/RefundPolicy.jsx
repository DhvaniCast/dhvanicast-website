import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Refund and Cancellation Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            <strong>Effective Date:</strong> 31 December 2025<br />
            <strong>Jurisdiction:</strong> India
          </p>

          <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li><strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a></li>
              <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9.1 Nature of Digital Services</h2>
          <p className="text-gray-300 mb-4">
            Private frequencies offered on DC Audio Rooms are time-bound, exclusive digital services. Once activated, these services are immediately consumed by reserving exclusive access to a specific frequency for a defined duration.
          </p>
          <p className="text-gray-300 mb-4">
            Due to the nature of these services, private frequencies:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Cannot be reused once activated</li>
            <li>Cannot be transferred to another user</li>
            <li>Cannot be resold or extended after expiry</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9.2 Refund Eligibility Criteria</h2>
          <p className="text-gray-300 mb-4">
            Refunds are granted only in limited circumstances where:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Payment has been successfully completed, and</li>
            <li>The purchased service is not delivered due to a verified technical failure attributable solely to DC Audio Rooms</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Refunds are not issued for reasons including, but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>User dissatisfaction</li>
            <li>Accidental purchases</li>
            <li>Failure to use the service within the validity period</li>
            <li>Issues arising from password sharing or user error</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9.3 Refund Request and Processing</h2>
          <p className="text-gray-300 mb-4">
            Refund requests must be submitted within 24 hours of the transaction and must include relevant transaction details, such as the payment reference number and account information.
          </p>
          <p className="text-gray-300 mb-4">
            All refund requests are reviewed on a case-by-case basis. If approved, refunds are processed through the original payment method in accordance with Razorpay's processing timelines and applicable regulations.
          </p>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms reserves the right to deny refund requests that do not meet the eligibility criteria or where misuse or abuse is identified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
