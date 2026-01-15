import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
                <h1 className="text-4xl font-semibold mb-2 text-white py-6">Cookie Policy</h1>
                <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 31 December 2025<br /><strong>Jurisdiction:</strong> India</p>
                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
                    <ul className="list-none space-y-2 text-gray-300">
                        <li><strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a></li>
                        <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
                    </ul>
                </div>
                <div className="prose prose-invert max-w-none space-y-6">
                    {/* ...existing code... */}
                    {/* Section 2.2.4 - Device and Technical Information (ADDITION 1) */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">2.2.4 Device and Technical Information</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Device type and operating system</li>
                            <li>App version and build number</li>
                            <li>IP address and network information</li>
                            <li>Device name and device identifiers provided by the operating system</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            This information is used for security, fraud prevention, compatibility, diagnostics, and to detect unauthorized or suspicious access, including the use of unsupported network configurations.
                        </p>
                    </section>
                    {/* Section 2.6.1 - Network Integrity and VPN Restrictions (ADDITION 2) */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">2.6.1 Network Integrity and VPN Restrictions</h2>
                        <p className="text-gray-300 mb-4">
                            To maintain platform security, prevent misuse, and ensure compliance with safety and regulatory requirements, DC Audio Rooms monitors network integrity indicators such as IP address consistency, device identifiers, and connection characteristics.
                        </p>
                        <p className="text-gray-300 mb-4">
                            The use of Virtual Private Networks (VPNs), proxy services, or anonymization tools is not supported on the DC Audio Rooms platform. Access attempts detected through VPNs or similar technologies may be restricted, limited, or blocked to protect platform integrity, prevent abuse, and ensure accurate enforcement of safety policies.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Users are required to access the platform using a standard, non-anonymized internet connection. Attempts to circumvent these requirements may result in limited functionality or denial of access.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cookie Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Purpose and Necessity of Cookies</h3>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms uses cookies and similar technologies to ensure the secure, reliable, and efficient operation of its platform. Cookies are small data files stored on a user's device that allow the application to recognize returning users, maintain authenticated sessions, and support essential security and operational functions.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Cookies are fundamental to enabling core platform features, including user authentication, session continuity, access control, and protection against unauthorized access. Without the use of cookies or equivalent technologies, DC Audio Rooms would be unable to reliably verify user identity, prevent session hijacking, or provide a seamless user experience during live communication.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Cookies are used strictly for operational, security, and functional purposes and are not employed in a manner that compromises user privacy.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Types and Categories of Cookies Used</h3>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms uses the following categories of cookies and similar technologies:
                        </p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">6.2.1 Essential Cookies</h4>
                        <p className="text-gray-300 mb-4">
                            Essential cookies are required for the basic functioning of the platform. These cookies enable:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Secure user authentication and login persistence</li>
                            <li>Session management during live audio communication</li>
                            <li>Protection against unauthorized access and fraudulent activity</li>
                            <li>Enforcement of security controls and account integrity</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Disabling essential cookies may result in the inability to log in or use core features of the platform.
                        </p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">6.2.2 Performance and Analytics Cookies</h4>
                        <p className="text-gray-300 mb-4">
                            Performance cookies are used to collect aggregated and anonymized information about how the platform is used. These cookies help DC Audio Rooms:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Monitor application performance and stability</li>
                            <li>Identify technical issues and error patterns</li>
                            <li>Understand feature usage trends at a non-individual level</li>
                            <li>Improve service reliability and user experience</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Performance cookies do not collect personally identifiable information and are not used to track users across third-party websites.
                        </p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">6.2.3 Functional Cookies</h4>
                        <p className="text-gray-300 mb-4">
                            Functional cookies store user preferences and settings to enhance usability, such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Language preferences</li>
                            <li>Display and interface settings</li>
                            <li>Session-related user choices</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            These cookies allow DC Audio Rooms to provide a more consistent and personalized experience without compromising security or privacy.
                        </p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">6.2.4 No Advertising or Behavioral Tracking Cookies</h4>
                        <p className="text-gray-300 mb-4">DC Audio Rooms does not use cookies for:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Targeted advertising</li>
                            <li>Behavioral profiling</li>
                            <li>Cross-site tracking</li>
                            <li>Third-party ad networks</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            The platform does not monetize user data through advertising cookies.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.3 User Control, Consent, and Limitations</h3>
                        <p className="text-gray-300 mb-4">
                            Users retain control over cookie usage through their device, browser, or application settings. Most devices and browsers allow users to manage, restrict, or delete cookies at any time.
                        </p>
                        <p className="text-gray-300 mb-4">Users should be aware that disabling or restricting cookies may:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Prevent successful login or session continuity</li>
                            <li>Limit access to live communication features</li>
                            <li>Affect platform security and stability</li>
                            <li>Reduce functionality or personalization</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            By continuing to use DC Audio Rooms without disabling cookies, users consent to the use of cookies as described in this policy.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.4 Data Protection and Security</h3>
                        <p className="text-gray-300 mb-4">
                            All cookie-related data is handled in accordance with DC Audio Rooms's Privacy Policy and applicable data protection laws. Cookie data is:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Stored securely</li>
                            <li>Accessible only to authorized systems</li>
                            <li>Used solely for the purposes outlined in this policy</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            DC Audio Rooms regularly reviews its use of cookies to ensure compliance with legal and security standards.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.5 Updates to Cookie Policy</h3>
                        <p className="text-gray-300 mb-4">
                            This Cookie Policy may be updated periodically to reflect changes in technology, legal requirements, or platform operations. Material updates will be communicated through the application or associated policy pages. Continued use of the platform constitutes acceptance of the updated Cookie Policy.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;

{/* Section 7 - Transparency and Moderation Policy */ }
<section>
    <h2 className="text-2xl font-semibold mb-4 text-primary">7. Transparency and Moderation Policy</h2>

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
</section>
