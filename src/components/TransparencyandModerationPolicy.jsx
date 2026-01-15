import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransparencyandModerationPolicy = () => {
  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <h2 className="text-4xl font-semibold mb-2 text-white py-6">7. Transparency and Moderation Policy</h2>
        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 31 December 2025<br /><strong>Jurisdiction:</strong> India</p>
        <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li><strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a></li>
            <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Moderation Framework</h3>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms is committed to maintaining a safe, lawful, and respectful environment across all frequencies and platform features. To achieve this, the platform operates a hybrid moderation framework that combines automated detection technologies with human review by trained moderation personnel.
        </p>
        <p className="text-gray-300 mb-4">
          Automated systems are used to identify potential policy violations at scale, including patterns associated with abuse, spamming, coordinated misuse, illegal activity, and CSAE-related risks. These systems are designed to act as early-warning mechanisms and to prioritize content or accounts for further review.
        </p>
        <p className="text-gray-300 mb-4">
          Human moderators provide contextual judgment that automated systems alone cannot achieve. Moderators review reported content, flagged activity, and edge cases to ensure that enforcement decisions are proportionate, accurate, and aligned with platform policies and applicable laws.
        </p>
        <p className="text-gray-300 mb-4">
          Moderation applies uniformly to public frequencies, private paid frequencies, chat messages, images, and user profiles.
        </p>
        <p className="text-gray-300 mb-4">
          The moderation framework is continuously evaluated and refined to balance user safety, freedom of expression, operational feasibility, and legal compliance.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Transparency, Accountability, and Record-Keeping</h3>
        <p className="text-gray-300 mb-4">
          To ensure accountability and consistency, DC Audio Rooms maintains internal records of moderation actions taken on the platform. These records may include information such as the nature of the violation, the type of enforcement action applied, timestamps, and reference identifiers.
        </p>
        <p className="text-gray-300 mb-4">Moderation logs are maintained for the following purposes:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Ensuring consistent application of platform rules</li>
          <li>Supporting internal audits and quality reviews</li>
          <li>Responding to user inquiries or appeals</li>
          <li>Complying with legal, regulatory, or law enforcement requirements</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Access to moderation records is restricted to authorized personnel only and is governed by internal access controls and data protection policies. Logs are retained only for as long as necessary to meet operational, legal, or compliance obligations.
        </p>
        <p className="text-gray-300 mt-4">
          DC Audio Rooms may disclose moderation-related information to authorities when legally required or to protect the safety and integrity of the platform and its users.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">7.3 User Notifications, Appeals, and Finality</h3>
        <p className="text-gray-300 mb-4">
          Where appropriate and feasible, users may be notified of significant moderation actions affecting their accounts, such as suspensions or permanent bans. Notification may be provided through in-app messages, email communication, or account status updates.
        </p>
        <p className="text-gray-300 mb-4">
          Users may contact support@dhvanicast.com to request a review of certain moderation actions. Appeals are reviewed by DC Audio Rooms on a case-by-case basis, taking into account platform rules, user history, available evidence, and safety considerations.
        </p>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms reserves the right to make final determinations regarding moderation outcomes. In cases involving serious violations, illegal activity, CSAE concerns, or repeated abuse, enforcement decisions may be final and not subject to appeal, in order to protect platform integrity and user safety.
        </p>
      </div>
    </div>
  );
};

export default TransparencyandModerationPolicy;