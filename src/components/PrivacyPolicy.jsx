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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">DhvaniCast – Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last Updated: December 6, 2025
          </p>
          
          <p className="text-gray-300 mb-6">
            At DhvaniCast, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you use our internet-based radio and global communication platform.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">a. Personal Information</h3>
          <p className="text-gray-300 mb-4">
            When you register for DhvaniCast, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Name and email address</li>
            <li className="mb-2">Phone number</li>
            <li className="mb-2">Profile picture and bio (optional)</li>
            <li className="mb-2">Date of birth (to verify you are at least 18 years old)</li>
            <li className="mb-2">Payment information (processed securely through third-party payment processors)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">b. Usage Information</h3>
          <p className="text-gray-300 mb-4">
            We automatically collect information about your interactions with our service:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Device information (type, operating system, browser)</li>
            <li className="mb-2">IP address and location data</li>
            <li className="mb-2">Audio streaming preferences and listening history</li>
            <li className="mb-2">Communication patterns and contacts</li>
            <li className="mb-2">App usage statistics and performance data</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">c. Audio and Voice Data</h3>
          <p className="text-gray-300 mb-4">
            When you use voice communication features, we may process audio data to provide our services. This data is encrypted and transmitted securely. We do not store voice recordings unless required for specific features you've opted into.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Provide and maintain our communication services</li>
            <li className="mb-2">Process payments and manage subscriptions</li>
            <li className="mb-2">Personalize your experience and improve our platform</li>
            <li className="mb-2">Send service-related notifications and updates</li>
            <li className="mb-2">Ensure platform security and prevent fraud</li>
            <li className="mb-2">Comply with legal obligations</li>
            <li className="mb-2">Analyze usage patterns to enhance features</li>
            <li className="mb-2">Provide customer support</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-300 mb-4">
            We do not sell your personal information. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2"><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
            <li className="mb-2"><strong>Service Providers:</strong> Third-party vendors who help us operate our platform (e.g., cloud hosting, payment processing, analytics)</li>
            <li className="mb-2"><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
            <li className="mb-2"><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">End-to-end encryption for voice communications</li>
            <li className="mb-2">Secure data transmission using SSL/TLS protocols</li>
            <li className="mb-2">Regular security audits and updates</li>
            <li className="mb-2">Access controls and authentication measures</li>
            <li className="mb-2">Secure data centers with physical and digital safeguards</li>
          </ul>
          <p className="text-gray-300 mb-4">
            However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Privacy Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2"><strong>Access:</strong> Request a copy of your personal data</li>
            <li className="mb-2"><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li className="mb-2"><strong>Deletion:</strong> Request deletion of your account and data</li>
            <li className="mb-2"><strong>Portability:</strong> Receive your data in a portable format</li>
            <li className="mb-2"><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            <li className="mb-2"><strong>Restrict Processing:</strong> Limit how we use your data</li>
          </ul>
          <p className="text-gray-300 mb-4">
            To exercise these rights, contact us at privacy@dhvanicast.com
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies and Tracking</h2>
          <p className="text-gray-300 mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Remember your preferences and settings</li>
            <li className="mb-2">Analyze traffic and usage patterns</li>
            <li className="mb-2">Improve platform functionality</li>
            <li className="mb-2">Provide personalized content</li>
          </ul>
          <p className="text-gray-300 mb-4">
            You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
          <p className="text-gray-300 mb-4">
            DhvaniCast is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we discover that we have collected information from a child under 18, we will delete it immediately.
          </p>
          <p className="text-gray-300 mb-4">
            If you believe a child under 18 has provided us with personal information, please contact us at privacy@dhvanicast.com
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
          <p className="text-gray-300 mb-4">
            We retain your personal information only as long as necessary to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Provide our services</li>
            <li className="mb-2">Comply with legal obligations</li>
            <li className="mb-2">Resolve disputes</li>
            <li className="mb-2">Enforce our agreements</li>
          </ul>
          <p className="text-gray-300 mb-4">
            When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. International Data Transfers</h2>
          <p className="text-gray-300 mb-4">
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-300 mb-4">
            Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Policy</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of significant changes through:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">In-app notifications</li>
            <li className="mb-2">Email announcements</li>
            <li className="mb-2">Website updates</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Your continued use of DhvaniCast after changes indicates acceptance of the updated policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Email: privacy@dhvanicast.com</li>
            <li className="mb-2">Support: support@dhvanicast.com</li>
            <li className="mb-2">In-App Support: Help → Privacy & Security</li>
          </ul>
          
          <p className="text-gray-300 mt-8">
            By using DhvaniCast, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
