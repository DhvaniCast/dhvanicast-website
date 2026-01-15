import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FrequencyUsagePolicy = () => {
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
                <h1 className="text-4xl font-semibold mb-2 text-white py-6">Frequency Usage Policy</h1>
                <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 31 December 2025<br /><strong>Jurisdiction:</strong> India</p>
                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
                    <ul className="list-none space-y-2 text-gray-300">
                        <li><strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a></li>
                        <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
                    </ul>
                </div>
                <div className="prose prose-invert max-w-none space-y-6">
                    {/* --- Original Content Below --- */}
                    {/* <h2 className="text-2xl font-semibold mb-4 text-primary">4. Frequency Usage Policy</h2> */}
                    <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Frequency-Based Communication Model</h3>
                    <p className="text-gray-300 mb-4">
                        DC Audio Rooms operates on a frequency-based model inspired by radio communication, where each frequency represents a shared communication channel accessible by multiple users simultaneously. Frequencies are communal spaces and should be treated as such.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Users must understand that joining a frequency means entering a shared environment where interactions are public to other participants in that frequency.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Public Frequencies</h3>
                    <p className="text-gray-300 mb-4">
                        Public frequencies are available to all eligible users and allow unrestricted participation subject to platform rules. Because these frequencies are open, they are subject to moderation to ensure safety, legality, and compliance with community standards.
                    </p>
                    <p className="text-gray-300 mb-4">
                        DC Audio Rooms reserves the right to temporarily restrict, mute, or close public frequencies if misuse or safety risks are identified.
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
                        The purchaser of a private frequency bears full responsibility for how access is managed, including password sharing and participant selection. DC Audio Rooms is not responsible for misuse arising from user negligence or intentional sharing of access credentials.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Expiry and System Reassignment</h3>
                    <p className="text-gray-300 mb-4">
                        Upon expiration, the private frequency is automatically deactivated and returned to the public frequency pool. All ongoing communications are terminated, and the frequency cannot be recovered or restored.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">4.6 Moderation of Frequencies</h3>
                    <p className="text-gray-300 mb-4">
                        All frequencies, including private ones, may be reviewed or restricted if violations, illegal activity, or CSAE concerns are suspected. DC Audio Rooms prioritizes safety and legal compliance over frequency privacy.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">4.7 Private frequencies, paid rooms, or password-protected communication spaces are NOT exempt from CSAE detection, moderation, reporting, or enforcement.</h3>
                    <p className="text-gray-300 mb-4">
                        Any CSAE-related activity detected in private frequencies will be treated with the same zero-tolerance enforcement as public spaces, including immediate removal, account termination, and mandatory reporting to authorities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FrequencyUsagePolicy;