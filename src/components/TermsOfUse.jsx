import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last Updated: November 16, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-300 mb-4">
            These Terms of Use constitute a legally binding agreement made between you and Dhvani Cast, concerning your access to and use of the Dhvani Cast website and mobile application. By accessing or using our service, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, then you may not access the service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="text-gray-300 mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Dhvani Cast and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Dhvani Cast.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p className="text-gray-300 mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p className="text-gray-300 mb-4">
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
          <p className="text-gray-300 mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="text-gray-300 mb-4">
            By posting content on or through the Service, you represent and warrant that: (i) the content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
          <p className="text-gray-300 mb-4">
            You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">In any way that violates any applicable national or international law or regulation.</li>
            <li className="mb-2">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li className="mb-2">To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
          <p className="text-gray-300 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            In no event shall Dhvani Cast, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-300 mb-4">
            Email: legal@dhvanicast.com<br />
            Address: 123 Tech Street, Innovation City, 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
