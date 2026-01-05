import React, { useEffect } from 'react';
import { ArrowLeft, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformPolicies = () => {
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

                <div className="flex items-center mb-8">
                    <FileText className="text-primary mr-4" size={40} />
                    <h1 className="text-3xl md:text-4xl font-bold">Platform Policies</h1>
                </div>

                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">Contact Information</h2>
                    <p className="text-gray-300 flex items-center">
                        <Mail className="mr-2 text-primary" size={16} />
                        <strong>General Support & Enquiries:</strong>
                        <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light ml-2">support@dhvanicast.com</a>
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    {/* Section 3 - Community Guidelines */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">3. Community Guidelines</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Purpose and Philosophy</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast is a live, frequency-based communication platform that enables real-time interaction between multiple users through voice, text chat, and image sharing. Because communication occurs live and involves simultaneous participation by many individuals, the quality, safety, and integrity of the platform depend heavily on responsible user behavior.
                        </p>
                        <p className="text-gray-300 mb-4">
                            These Community Guidelines are established to define acceptable conduct, prevent harm, protect users from abuse, and ensure that Dhvani Cast remains a safe and inclusive environment for adult users. All users are expected to understand that participation on the platform is a privilege, not a right, and continued access is conditional upon adherence to these guidelines.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Standards of Conduct</h3>
                        <p className="text-gray-300 mb-4">
                            Users are required to behave in a manner that is respectful, lawful, and considerate of others at all times. This applies equally to spoken audio, written messages, shared images, and any other form of interaction available on the platform.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Acceptable conduct includes engaging in conversations respectfully, allowing others to express themselves without intimidation, and refraining from language or behavior that could reasonably be perceived as abusive, threatening, or degrading. Users must recognize that real-time communication amplifies the impact of harmful speech and that spoken words carry the same accountability as written content.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Harassment, Abuse, and Hate Speech</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast strictly prohibits harassment, bullying, intimidation, or abuse of any kind. This includes persistent unwanted communication, verbal attacks, threats, humiliation, or coordinated targeting of individuals or groups.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Hate speech and discriminatory behavior are expressly forbidden. Content or conduct that promotes hatred, violence, or exclusion based on race, religion, caste, gender, sexual orientation, nationality, disability, or any protected characteristic will result in immediate enforcement action.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Sexual, Violent, and Illegal Content</h3>
                        <p className="text-gray-300 mb-4">
                            Users must not create, share, or promote sexually explicit, obscene, or pornographic material. This applies to audio discussions, text messages, images, or any indirect references designed to bypass moderation.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Violent, graphic, or disturbing content, including threats of violence or glorification of harm, is prohibited. Similarly, content that promotes or facilitates illegal activities, including drugs, fraud, or cybercrime, is not permitted.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Media and Image Sharing Responsibilities</h3>
                        <p className="text-gray-300 mb-4">
                            Images shared on Dhvani Cast must comply with community standards and applicable law. Users are responsible for ensuring that any media they share does not violate privacy, intellectual property rights, or platform rules.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Images involving nudity, sexual activity, minors, graphic violence, or personal data of others will be removed and may result in account suspension or termination.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.6 Reporting, Enforcement, and Escalation</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast provides in-app tools for reporting violations. Reports are reviewed using a combination of automated systems and human moderation.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Depending on severity and frequency, enforcement actions may include warnings, temporary restrictions, muting, removal from frequencies, suspension, or permanent account termination. Severe violations may be escalated directly to permanent enforcement without prior warning.
                        </p>
                    </section>

                    {/* Section 4 - Frequency Usage Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">4. Frequency Usage Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Frequency-Based Communication Model</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast operates on a frequency-based model inspired by radio communication, where each frequency represents a shared communication channel accessible by multiple users simultaneously. Frequencies are communal spaces and should be treated as such.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Users must understand that joining a frequency means entering a shared environment where interactions are public to other participants in that frequency.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Public Frequencies</h3>
                        <p className="text-gray-300 mb-4">
                            Public frequencies are available to all eligible users and allow unrestricted participation subject to platform rules. Because these frequencies are open, they are subject to moderation to ensure safety, legality, and compliance with community standards.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast reserves the right to temporarily restrict, mute, or close public frequencies if misuse or safety risks are identified.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Private Paid Frequencies</h3>
                        <p className="text-gray-300 mb-4">
                            Private frequencies are optional paid features that provide exclusive, password-protected access for a limited duration. When a user purchases a private frequency, they receive temporary control over access to that frequency.
                        </p>
                        <p className="text-gray-300 mb-4">Private frequencies:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Are active for 12 hours only</li>
                            <li>Automatically expire without extension</li>
                            <li>Are not transferable or refundable once activated</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Private status does not exempt the frequency from moderation or legal oversight.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Responsibility and Liability</h3>
                        <p className="text-gray-300 mb-4">
                            The purchaser of a private frequency bears full responsibility for how access is managed, including password sharing and participant selection. Dhvani Cast is not responsible for misuse arising from user negligence or intentional sharing of access credentials.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Expiry and System Reassignment</h3>
                        <p className="text-gray-300 mb-4">
                            Upon expiration, the private frequency is automatically deactivated and returned to the public frequency pool. All ongoing communications are terminated, and the frequency cannot be recovered or restored.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.6 Moderation of Frequencies</h3>
                        <p className="text-gray-300 mb-4">
                            All frequencies, including private ones, may be reviewed or restricted if violations, illegal activity, or CSAE concerns are suspected. Dhvani Cast prioritizes safety and legal compliance over frequency privacy.
                        </p>
                    </section>

                    {/* Section 5 - Platform Operations Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">5. Platform Operations Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Operational Monitoring</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast operates a real-time, frequency-based communication platform that requires continuous operational oversight to ensure reliability, security, and service quality. To achieve this, Dhvani Cast maintains ongoing monitoring of its technical infrastructure, application services, and usage patterns.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Operational monitoring includes, but is not limited to, tracking server uptime, network latency, system load, error rates, service availability, and abnormal traffic patterns. This monitoring enables Dhvani Cast to identify performance degradation, service outages, security threats, and misuse of platform resources at the earliest possible stage.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Monitoring activities are conducted strictly for operational, security, and safety purposes. They are designed to protect users from service disruption, prevent abuse of system resources, and maintain the overall stability of the platform. Operational monitoring does not involve listening to or recording live audio conversations and does not involve reviewing user content unless required for safety, abuse investigation, or legal compliance.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Crash Analytics and Diagnostics</h3>
                        <p className="text-gray-300 mb-4">
                            To maintain application stability and ensure a consistent user experience across different devices and operating systems, Dhvani Cast collects crash reports and diagnostic logs generated when the application encounters errors or failures.
                        </p>
                        <p className="text-gray-300 mb-4">
                            These diagnostic logs may include technical information such as device type, operating system version, application build number, error codes, timestamps, and system state at the time of failure. The purpose of collecting this data is strictly limited to identifying software defects, resolving technical issues, improving performance, and preventing recurring crashes.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Crash analytics data is not used to analyze the substance of user communications, including live audio, text messages, or shared images, beyond what is technically necessary to diagnose system errors. Dhvani Cast does not use diagnostic data for advertising, behavioral profiling, or content surveillance.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Access to crash analytics is restricted to authorized technical personnel and is governed by internal access controls and security policies.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Feature Evolution, Availability, and Maintenance</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast is an evolving platform and may periodically introduce new features, modify existing functionality, or discontinue features to improve performance, enhance safety, comply with legal or regulatory requirements, or respond to technological changes.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Feature availability may vary based on factors such as device compatibility, operating system limitations, regional regulations, server capacity, or phased rollouts. Certain features may be offered on a trial or limited basis before being made generally available.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast also reserves the right to perform scheduled or emergency maintenance, during which some or all services may be temporarily unavailable. Where reasonably possible, advance notice of planned maintenance will be provided through in-app notifications or other communication channels.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Continued use of the platform following feature changes or updates constitutes acceptance of such changes.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5.4 Abuse Prevention and Platform Integrity</h3>
                        <p className="text-gray-300 mb-4">
                            Maintaining the integrity of Dhvani Cast is essential to ensuring a safe and fair environment for all users. The platform employs technical, procedural, and policy-based safeguards to prevent abuse, misuse, and exploitation of its systems.
                        </p>
                        <p className="text-gray-300 mb-4">
                            These safeguards include mechanisms to detect and limit spamming, automated or bot-driven activity, coordinated misuse, attempts to overload system resources, and efforts to circumvent platform restrictions. Dhvani Cast may impose rate limits, access restrictions, or automated blocks where suspicious or harmful activity is detected.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Any attempt to interfere with platform operations, bypass security controls, manipulate frequencies, exploit vulnerabilities, or disrupt the service may result in immediate enforcement action. Such action may include temporary restrictions, suspension, permanent account termination, and, where applicable, reporting to law enforcement or relevant authorities.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast reserves the right to take all necessary steps to protect its infrastructure, users, and services from harm, while ensuring that enforcement actions are proportionate, documented, and aligned with applicable laws and platform policies.
                        </p>
                    </section>

                    {/* Section 6 - Cookie Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cookie Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Purpose and Necessity of Cookies</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast uses cookies and similar technologies to ensure the secure, reliable, and efficient operation of its platform. Cookies are small data files stored on a user's device that allow the application to recognize returning users, maintain authenticated sessions, and support essential security and operational functions.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Cookies are fundamental to enabling core platform features, including user authentication, session continuity, access control, and protection against unauthorized access. Without the use of cookies or equivalent technologies, Dhvani Cast would be unable to reliably verify user identity, prevent session hijacking, or provide a seamless user experience during live communication.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Cookies are used strictly for operational, security, and functional purposes and are not employed in a manner that compromises user privacy.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Types and Categories of Cookies Used</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast uses the following categories of cookies and similar technologies:
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
                            Performance cookies are used to collect aggregated and anonymized information about how the platform is used. These cookies help Dhvani Cast:
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
                            These cookies allow Dhvani Cast to provide a more consistent and personalized experience without compromising security or privacy.
                        </p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">6.2.4 No Advertising or Behavioral Tracking Cookies</h4>
                        <p className="text-gray-300 mb-4">Dhvani Cast does not use cookies for:</p>
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
                            By continuing to use Dhvani Cast without disabling cookies, users consent to the use of cookies as described in this policy.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.4 Data Protection and Security</h3>
                        <p className="text-gray-300 mb-4">
                            All cookie-related data is handled in accordance with Dhvani Cast's Privacy Policy and applicable data protection laws. Cookie data is:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Stored securely</li>
                            <li>Accessible only to authorized systems</li>
                            <li>Used solely for the purposes outlined in this policy</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Dhvani Cast regularly reviews its use of cookies to ensure compliance with legal and security standards.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.5 Updates to Cookie Policy</h3>
                        <p className="text-gray-300 mb-4">
                            This Cookie Policy may be updated periodically to reflect changes in technology, legal requirements, or platform operations. Material updates will be communicated through the application or associated policy pages. Continued use of the platform constitutes acceptance of the updated Cookie Policy.
                        </p>
                    </section>

                    {/* Section 7 - Transparency and Moderation Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">7. Transparency and Moderation Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Moderation Framework</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast is committed to maintaining a safe, lawful, and respectful environment across all frequencies and platform features. To achieve this, the platform operates a hybrid moderation framework that combines automated detection technologies with human review by trained moderation personnel.
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
                            To ensure accountability and consistency, Dhvani Cast maintains internal records of moderation actions taken on the platform. These records may include information such as the nature of the violation, the type of enforcement action applied, timestamps, and reference identifiers.
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
                            Dhvani Cast may disclose moderation-related information to authorities when legally required or to protect the safety and integrity of the platform and its users.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">7.3 User Notifications, Appeals, and Finality</h3>
                        <p className="text-gray-300 mb-4">
                            Where appropriate and feasible, users may be notified of significant moderation actions affecting their accounts, such as suspensions or permanent bans. Notification may be provided through in-app messages, email communication, or account status updates.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Users may contact support@dhvanicast.com to request a review of certain moderation actions. Appeals are reviewed by Dhvani Cast on a case-by-case basis, taking into account platform rules, user history, available evidence, and safety considerations.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast reserves the right to make final determinations regarding moderation outcomes. In cases involving serious violations, illegal activity, CSAE concerns, or repeated abuse, enforcement decisions may be final and not subject to appeal, in order to protect platform integrity and user safety.
                        </p>
                    </section>

                    {/* Section 8 - Payment Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">8. Payment Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Payment Processing, Pricing, and Disclosure</h3>
                        <p className="text-gray-300 mb-4">
                            Dhvani Cast offers certain paid features, including private frequency access, which are processed exclusively through Razorpay, a regulated Indian payment gateway.
                        </p>
                        <p className="text-gray-300 mb-4">Before any purchase is completed, users are clearly informed of:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>The price of the service</li>
                            <li>The duration and nature of the service</li>
                            <li>Any applicable terms or limitations</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Charges are applied only after successful transaction confirmation from Razorpay. Dhvani Cast does not process payments directly and does not store sensitive payment credentials such as card numbers, CVV codes, or UPI identifiers.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Fraud Detection and Risk Management</h3>
                        <p className="text-gray-300 mb-4">
                            To protect users and the platform from financial misuse, Dhvani Cast monitors transactions for indicators of fraud, abuse, or unauthorized activity. This may include detecting unusual transaction patterns, repeated failed payment attempts, chargeback abuse, or violations of payment gateway policies.
                        </p>
                        <p className="text-gray-300 mb-4">Where suspicious activity is detected, Dhvani Cast may:</p>
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
                            Dhvani Cast is not responsible for unauthorized transactions resulting from user negligence, compromised payment methods, or third-party access to user accounts.
                        </p>
                    </section>

                    <section className="bg-dark rounded-lg p-6 mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Effective Date</h2>
                        <p className="text-gray-300">31 December 2025</p>
                        <p className="text-gray-300 mt-2"><strong>Jurisdiction:</strong> India</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PlatformPolicies;
