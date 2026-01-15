import React, { useEffect } from 'react';
import { ArrowLeft, Mail, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChildSafety = () => {
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
                    <Shield className="text-primary mr-4" size={40} />
                    <h1 className="text-3xl md:text-4xl font-bold">Child Safety & CSAE Reporting</h1>
                </div>

                <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 mb-8 flex items-start">
                    <AlertTriangle className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">ZERO TOLERANCE NOTICE</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms maintains a zero-tolerance policy toward Child Sexual Abuse and Exploitation. Any violation results in permanent removal and reporting to authorities, regardless of user intent or account status.
                        </p>
                        <h3 className="text-lg font-semibold text-red-400 mb-2">Official Contact Emails:</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">
                                <Mail className="inline mr-2" size={16} />
                                <strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a>
                            </p>
                            <p className="text-gray-300">
                                <Mail className="inline mr-2" size={16} />
                                <strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">1. Commitment to Child Safety</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms is committed to maintaining a safe digital environment and enforcing <strong>zero tolerance toward Child Sexual Abuse and Exploitation (CSAE)</strong>.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Although DC Audio Rooms is a <strong>strictly 18+ platform</strong>, the company acknowledges its responsibility to prevent, detect, report, and remove any form of child sexual abuse material or grooming behavior that may appear on the platform, intentionally or unintentionally.
                        </p>
                        <p className="text-gray-300">
                            Any CSAE-related content or behavior is treated as a <strong>serious criminal matter</strong> and handled with the highest priority.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">2. Applicability of This Policy</h2>
                        <p className="text-gray-300 mb-4">This Child Safety & CSAE Policy applies to:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>All users of DC Audio Rooms</li>
                            <li>All communication channels, including:
                                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                                    <li>Live audio conversations</li>
                                    <li>Text chat</li>
                                    <li>Image sharing</li>
                                    <li>User profiles</li>
                                    <li>Private and public frequencies</li>
                                </ul>
                            </li>
                            <li>All reports submitted via:
                                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                                    <li>In-app reporting tools</li>
                                    <li>Email communication</li>
                                    <li>Third-party notifications (including Google Play)</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="text-gray-300 mt-4">This policy applies regardless of user age claims.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">3. Strict Prohibition of CSAE Content</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms explicitly and permanently prohibits any form of Child Sexual Abuse or Exploitation, including but not limited to:
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Prohibited Content</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Any sexual content involving a minor (under 18)</li>
                            <li>Child Sexual Abuse Material (CSAM) in any format</li>
                            <li>Nude or sexually suggestive images of minors</li>
                            <li>Audio conversations describing sexual acts involving minors</li>
                            <li>Requests, offers, or encouragement to share CSAM</li>
                            <li>Links, references, or coded language used to distribute CSAM</li>
                            <li>Grooming behavior, including attempts to build trust with a minor for sexual purposes</li>
                            <li>Role-play, fantasy, or AI-generated content involving minors in a sexual context</li>
                        </ul>
                        <p className="text-red-400 font-semibold mt-4">There are no exceptions, including fictional, artistic, or "joke" content.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">4. Detection, Monitoring & Prevention Measures</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms uses a multi-layered safety approach to detect and prevent CSAE:
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Automated Detection</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Automated scanning of text chats and shared images</li>
                            <li>Pattern-based detection of grooming language</li>
                            <li>Behavioral monitoring for repeated suspicious activity</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Human Review</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>All CSAE reports are reviewed by trained moderators</li>
                            <li>High-risk content is escalated immediately</li>
                            <li>Content is reviewed regardless of whether it occurs in a public or private frequency</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Platform Design Safeguards</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>No public discovery of private chats</li>
                            <li>Limited image-sharing permissions</li>
                            <li>Controlled frequency access</li>
                            <li>Account-level enforcement tools</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Hash-Based Detection</h3>
                        <p className="text-gray-300 mb-4">
                            Where technically feasible, DC Audio Rooms uses industry-standard hash-based detection techniques to identify known Child Sexual Abuse Material (CSAM) across images and shared media.
                        </p>
                        <p className="text-gray-300">
                            This enables rapid identification and removal of previously reported CSAM without requiring human viewing of illegal material.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">5. In-App Reporting Mechanism</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms provides a clear and accessible in-app mechanism for users to report CSAE concerns.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5.1 How Users Can Report</h3>
                        <p className="text-gray-300 mb-4">Users can report suspected CSAE by:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Navigating to <strong>Settings → Help & support → Report CSAE</strong></li>
                            <li>Reporting a specific user, chat message, image, or frequency</li>
                            <li>Submitting a report via email to <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
                        </ul>
                        <p className="text-gray-300 mt-4">The reporting process is:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Simple</li>
                            <li>Confidential</li>
                            <li>Available at all times</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">6. Response & Enforcement Procedure</h2>
                        <p className="text-gray-300 mb-4">
                            When DC Audio Rooms becomes aware of potential CSAE content (through user reports, automated systems, or third-party notifications), the following actions are taken:
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Immediate Actions</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Content is restricted or removed immediately</li>
                            <li>Associated accounts are temporarily suspended</li>
                            <li>Access to affected frequencies may be frozen</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Investigation</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Evidence is preserved securely</li>
                            <li>Internal safety team conducts expedited review</li>
                            <li>False positives are minimized without delaying action</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Enforcement</h3>
                        <p className="text-gray-300 mb-4">If CSAE is confirmed:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Permanent account termination</li>
                            <li>Device and account-level blocking</li>
                            <li>Removal of all related content</li>
                            <li>Zero possibility of reinstatement</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">6.4 Response Timelines</h3>
                        <p className="text-gray-300 mb-4">DC Audio Rooms follows strict response timelines for CSAE content:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li><strong>Immediate</strong> automated restriction upon detection</li>
                            <li><strong>Human moderator review within 24 hours</strong></li>
                            <li><strong>Permanent enforcement and reporting within 24–48 hours</strong> of confirmation</li>
                        </ul>
                        <p className="text-red-400 font-semibold mt-4">
                            No CSAE-related content is allowed to remain accessible once flagged.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">7. Reporting to Authorities & Legal Compliance</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms complies with all applicable child safety laws and regulations, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Information Technology Act, 2000</li>
                            <li>POCSO Act, 2012 (India)</li>
                            <li>IT Rules, 2021</li>
                            <li>Digital Personal Data Protection Act, 2023</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Law Enforcement Reporting</h3>
                        <p className="text-gray-300 mb-4">Confirmed CSAE cases are reported to:
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Relevant Indian law enforcement agencies</li>
                                <li>Cybercrime units</li>
                                <li>Other legally mandated authorities</li>
                            </ul>
                        </p>
                        <p className="text-gray-300 mb-4">Where applicable, DC Audio Rooms cooperates with:
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Government agencies</li>
                                <li>Platform partners</li>
                                <li>Regulatory bodies</li>
                            </ul>
                        </p>

                        <p className="text-gray-300 mt-6 mb-4">
                            In addition to reporting to Indian law enforcement authorities, DC Audio Rooms will report all confirmed instances of Child Sexual Abuse Material (CSAM) to the <strong>National Center for Missing & Exploited Children (NCMEC)</strong>, as required under international child protection standards and Google Play Developer Program Policies.
                        </p>
                        <p className="text-gray-300 mb-4">Reports submitted to NCMEC may include:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>User identifiers</li>
                            <li>Content identifiers</li>
                            <li>IP addresses</li>
                            <li>Timestamps</li>
                            <li>Relevant metadata required for investigation</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            DC Audio Rooms cooperates fully with NCMEC, Google, and law enforcement agencies to support the identification, investigation, and prosecution of CSAE offenses.
                        </p>

                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">8. Child Safety Point of Contact</h2>
                        <p className="text-gray-300 mb-4">
                            DC Audio Rooms has designated a Child Safety Point of Contact to receive and act on CSAE notifications, including those from Google Play.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Designated Contact</h3>
                        <div className="bg-primary/10 border border-primary rounded-lg p-4 my-4">
                            <p className="text-gray-300 flex items-center">
                                <Mail className="mr-2 text-primary" size={20} />
                                <strong>Email:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light ml-2">csae@dhvanicast.com</a>
                            </p>
                        </div>
                        <p className="text-gray-300 mb-4">This contact:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Receives CSAE alerts and reports</li>
                            <li>Is authorized to take enforcement action</li>
                            <li>Coordinates with law enforcement</li>
                            <li>Responds to Google Play inquiries regarding CSAE compliance</li>
                        </ul>
                    </section>
                    <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Google Play Coordination</h3>
                    <p className="text-gray-300">
                        The designated Child Safety Point of Contact is authorized to respond to and act upon CSAE notifications received from Google Play, including emergency takedown requests, compliance inquiries, and policy audits.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">9. User Responsibilities</h2>
                        <p className="text-gray-300 mb-4">All users are required to:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Immediately report suspected CSAE</li>
                            <li>Not download, forward, screenshot, or redistribute CSAE content</li>
                            <li>Avoid engaging with suspected offenders</li>
                            <li>Cooperate with safety investigations when requested</li>
                        </ul>
                        <p className="text-red-400 font-semibold mt-4">
                            Failure to report or attempts to conceal CSAE content may result in account termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">10. Confidentiality & Victim Protection</h2>
                        <p className="text-gray-300 mb-4">All CSAE reports are handled with:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Strict confidentiality</li>
                            <li>Limited internal access</li>
                            <li>Secure data handling</li>
                            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mt-6">
                                <p className="text-gray-300 font-semibold">
                                    <strong>Important Notice:</strong> Private frequencies, paid rooms, or password-protected communication spaces are NOT exempt from CSAE detection, moderation, reporting, or enforcement.
                                </p>
                                <p className="text-gray-300 mt-3">
                                    Any CSAE-related activity detected in private frequencies will be treated with the same zero-tolerance enforcement as public spaces, including immediate removal, account termination, and mandatory reporting to authorities.
                                </p>
                            </div>
                            <li>Sensitivity toward potential victims</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            User identity is protected to the maximum extent permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">11. Policy Review & Updates</h2>
                        <p className="text-gray-300 mb-4">This Child Safety & CSAE Policy is:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Reviewed regularly</li>
                            <li>Updated to reflect legal changes</li>
                            <li>Published publicly and accessible to users</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Continued use of DC Audio Rooms constitutes acceptance of this policy.
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

export default ChildSafety;
