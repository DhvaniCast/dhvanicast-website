import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use / User Agreement</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-400">
            <strong>Effective Date:</strong> 31 December 2025<br />
            <strong>Jurisdiction:</strong> India
          </p>

          <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
            <p className="text-gray-300 mb-2">
              <strong>General Support & Enquiries:</strong> <a href="mailto:Support@dcaudiorooms.com" className="text-primary hover:text-primary-light">Support@dcaudiorooms.com</a>
            </p>
            <p className="text-gray-300">
              <strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dcaudiorooms.com" className="text-primary hover:text-primary-light">csae@dcaudiorooms.com</a>
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.1 Introduction and Scope</h2>
          <p className="text-gray-300 mb-4">
            Welcome to DC Audio Rooms.
          </p>
          <p className="text-gray-300 mb-4">
            These Terms of Use ("Terms") govern your access to and use of the DC Audio Rooms platform, including its mobile application, backend services, communication infrastructure, paid features, and all related functionalities (collectively referred to as the "Service").
          </p>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms is a live audio communication platform built on a frequency-based radio model, where users can join numbered frequencies to communicate with multiple participants in real time using voice, text chat, and image sharing. Each frequency functions as a shared live communication space rather than a one-to-one calling service.
          </p>
          <p className="text-gray-300 mb-4">
            By accessing, registering for, or using DC Audio Rooms in any manner, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms. If you do not agree with any part of these Terms, you must immediately discontinue use of the Service.
          </p>
          <p className="text-gray-300 mb-4">
            These Terms constitute a legally binding agreement between you and the operator of DC Audio Rooms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.2 Eligibility and Age Restriction (Strict 18+ Platform)</h2>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms is designed and operated exclusively for adult users.
          </p>
          <p className="text-gray-300 mb-4">
            Only individuals who are <strong>18 years of age or older</strong> are permitted to create an account, access frequencies, or use any feature of the platform. There are <strong>no teen accounts, no child accounts, and no minor-accessible modes</strong> available on DC Audio Rooms.
          </p>
          <p className="text-gray-300 mb-4">
            By registering on the platform, the user explicitly represents and warrants that:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>They are at least 18 years old at the time of registration</li>
            <li>All information provided during registration is truthful and accurate</li>
            <li>They possess the legal capacity to enter into a binding agreement</li>
          </ul>
          <p className="text-gray-300 mb-4">
            If DC Audio Rooms becomes aware, through reports, investigations, or technical detection, that an account belongs to a person under 18 years of age, such account will be <strong>immediately suspended or permanently terminated</strong> without prior notice. Any associated data may be retained solely for legal and compliance obligations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.3 Account Registration and Security</h2>
          <p className="text-gray-300 mb-4">
            To access DC Audio Rooms, users must create an account using a valid and active email address. Each user is permitted to maintain only one account unless explicitly authorized by DC Audio Rooms.
          </p>
          <p className="text-gray-300 mb-4">
            Users are solely responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Maintaining the confidentiality of their login credentials</li>
            <li>All activity conducted through their account</li>
            <li>Ensuring that their account is not accessed by unauthorized individuals</li>
          </ul>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms will not be responsible for losses arising from unauthorized access resulting from user negligence, including sharing login details or failing to secure email access.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.4 User Responsibilities and Acceptable Use</h2>
          <p className="text-gray-300 mb-4">
            Users agree to use DC Audio Rooms in a lawful, respectful, and responsible manner. Participation in frequencies requires adherence to community norms, platform rules, and applicable laws.
          </p>
          <p className="text-gray-300 mb-4">
            Users are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Their spoken audio during live communication</li>
            <li>Messages sent through chat features</li>
            <li>Images shared within frequencies</li>
            <li>Conduct toward other users</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Any misuse of the platform that disrupts communication, harms others, or violates legal standards may result in enforcement action.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.5 Prohibited Activities</h2>
          <p className="text-gray-300 mb-4">
            To maintain platform integrity and user safety, DC Audio Rooms strictly prohibits activities including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Harassment, intimidation, threats, or abusive behavior</li>
            <li>Hate speech, discrimination, or demeaning language</li>
            <li>Sharing sexually explicit, obscene, or illegal content</li>
            <li>Recording, storing, or redistributing live conversations without consent</li>
            <li>Impersonation of other users or entities</li>
            <li>Automated usage, bots, scraping, or exploitation of platform vulnerabilities</li>
            <li>Misuse of private frequencies for illegal or harmful purposes</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Violations may result in warnings, temporary restrictions, permanent account bans, and reporting to authorities where legally required.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.6 User Content and License</h2>
          <p className="text-gray-300 mb-4">
            Users retain ownership of any content they create or share on DC Audio Rooms. However, by using the Service, users grant DC Audio Rooms a limited, non-exclusive, royalty-free license to transmit, host, and display such content solely for the purpose of operating and improving the Service.
          </p>
          <p className="text-gray-300 mb-4">
            This license does not transfer ownership of user content to DC Audio Rooms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.7 Suspension and Termination</h2>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms reserves the right to suspend or terminate user accounts at its sole discretion when necessary to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
            <li>Enforce these Terms</li>
            <li>Protect platform safety</li>
            <li>Comply with legal obligations</li>
            <li>Address repeated or severe violations</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Termination decisions may be final, especially in cases involving illegal activity or CSAE concerns.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.8 Disclaimer and Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms is provided on an "as-is" and "as-available" basis. The platform does not guarantee uninterrupted service, frequency availability, or error-free operation.
          </p>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms is not liable for user-generated content, user conduct, or interactions between users.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.9 Governing Law</h2>
          <p className="text-gray-300 mb-4">
            These Terms are governed by the laws of India, including the Information Technology Act, 2000.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1.10 Changes to Terms</h2>
          <p className="text-gray-300 mb-4">
            DC Audio Rooms may modify these Terms periodically. Continued use of the platform after changes constitutes acceptance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
