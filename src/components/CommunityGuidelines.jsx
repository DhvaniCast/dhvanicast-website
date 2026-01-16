import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityGuidelines = () => {
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

                <h1 className="text-3xl md:text-4xl font-bold mb-8">Community Guidelines</h1>

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

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.1 Purpose and Philosophy</h2>
                    <p className="text-gray-300 mb-4">
                        DC Audio Rooms is a live, frequency-based communication platform that enables real-time interaction between multiple users through voice, text chat, and image sharing. Because communication occurs live and involves simultaneous participation by many individuals, the quality, safety, and integrity of the platform depend heavily on responsible user behavior.
                    </p>
                    <p className="text-gray-300 mb-4">
                        These Community Guidelines are established to define acceptable conduct, prevent harm, protect users from abuse, and ensure that DC Audio Rooms remains a safe and inclusive environment for adult users. All users are expected to understand that participation on the platform is a privilege, not a right, and continued access is conditional upon adherence to these guidelines.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.2 Standards of Conduct</h2>
                    <p className="text-gray-300 mb-4">
                        Users are required to behave in a manner that is respectful, lawful, and considerate of others at all times. This applies equally to spoken audio, written messages, shared images, and any other form of interaction available on the platform.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Acceptable conduct includes engaging in conversations respectfully, allowing others to express themselves without intimidation, and refraining from language or behavior that could reasonably be perceived as abusive, threatening, or degrading. Users must recognize that real-time communication amplifies the impact of harmful speech and that spoken words carry the same accountability as written content.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.3 Harassment, Abuse, and Hate Speech</h2>
                    <p className="text-gray-300 mb-4">
                        DC Audio Rooms strictly prohibits harassment, bullying, intimidation, or abuse of any kind. This includes persistent unwanted communication, verbal attacks, threats, humiliation, or coordinated targeting of individuals or groups.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Hate speech and discriminatory behavior are expressly forbidden. Content or conduct that promotes hatred, violence, or exclusion based on race, religion, caste, gender, sexual orientation, nationality, disability, or any protected characteristic will result in immediate enforcement action.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.4 Sexual, Violent, and Illegal Content</h2>
                    <p className="text-gray-300 mb-4">
                        Users must not create, share, or promote sexually explicit, obscene, or pornographic material. This applies to audio discussions, text messages, images, or any indirect references designed to bypass moderation.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Violent, graphic, or disturbing content, including threats of violence or glorification of harm, is prohibited. Similarly, content that promotes or facilitates illegal activities, including drugs, fraud, or cybercrime, is not permitted.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.5 Media and Image Sharing Responsibilities</h2>
                    <p className="text-gray-300 mb-4">
                        Images shared on DC Audio Rooms must comply with community standards and applicable law. Users are responsible for ensuring that any media they share does not violate privacy, intellectual property rights, or platform rules.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Images involving nudity, sexual activity, minors, graphic violence, or personal data of others will be removed and may result in account suspension or termination.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3.6 Reporting, Enforcement, and Escalation</h2>
                    <p className="text-gray-300 mb-4">
                        DC Audio Rooms provides in-app tools for reporting violations. Reports are reviewed using a combination of automated systems and human moderation.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Depending on severity and frequency, enforcement actions may include warnings, temporary restrictions, muting, removal from frequencies, suspension, or permanent account termination. Severe violations may be escalated directly to permanent enforcement without prior warning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommunityGuidelines;
