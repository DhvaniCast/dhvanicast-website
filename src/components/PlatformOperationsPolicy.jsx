import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformOperationsPolicy = () => {
  return (
    <div className="bg-darker min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-semibold mb-2 text-white py-6">5. Platform Operations Policy</h1>
        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 31 December 2025<br /><strong>Jurisdiction:</strong> India</p>
        <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-3">Official Contact Emails</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li><strong>General Support & Enquiries:</strong> <a href="mailto:support@dhvanicast.com" className="text-primary hover:text-primary-light">support@dhvanicast.com</a></li>
            <li><strong>Child Safety & CSAE Reporting:</strong> <a href="mailto:csae@dhvanicast.com" className="text-primary hover:text-primary-light">csae@dhvanicast.com</a></li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Operational Monitoring</h3>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms operates a real-time, frequency-based communication platform that requires continuous operational oversight to ensure reliability, security, and service quality. To achieve this, DC Audio Rooms maintains ongoing monitoring of its technical infrastructure, application services, and usage patterns.
        </p>
        <p className="text-gray-300 mb-4">
          Operational monitoring includes, but is not limited to, tracking server uptime, network latency, system load, error rates, service availability, and abnormal traffic patterns. This monitoring enables DC Audio Rooms to identify performance degradation, service outages, security threats, and misuse of platform resources at the earliest possible stage.
        </p>
        <p className="text-gray-300 mb-4">
          Monitoring activities are conducted strictly for operational, security, and safety purposes. They are designed to protect users from service disruption, prevent abuse of system resources, and maintain the overall stability of the platform. Operational monitoring does not involve listening to or recording live audio conversations and does not involve reviewing user content unless required for safety, abuse investigation, or legal compliance.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Crash Analytics and Diagnostics</h3>
        <p className="text-gray-300 mb-4">
          To maintain application stability and ensure a consistent user experience across different devices and operating systems, DC Audio Rooms collects crash reports and diagnostic logs generated when the application encounters errors or failures.
        </p>
        <p className="text-gray-300 mb-4">
          These diagnostic logs may include technical information such as device type, operating system version, application build number, error codes, timestamps, and system state at the time of failure. The purpose of collecting this data is strictly limited to identifying software defects, resolving technical issues, improving performance, and preventing recurring crashes.
        </p>
        <p className="text-gray-300 mb-4">
          Crash analytics data is not used to analyze the substance of user communications, including live audio, text messages, or shared images, beyond what is technically necessary to diagnose system errors. DC Audio Rooms does not use diagnostic data for advertising, behavioral profiling, or content surveillance.
        </p>
        <p className="text-gray-300 mb-4">
          Access to crash analytics is restricted to authorized technical personnel and is governed by internal access controls and security policies.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Feature Evolution, Availability, and Maintenance</h3>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms is an evolving platform and may periodically introduce new features, modify existing functionality, or discontinue features to improve performance, enhance safety, comply with legal or regulatory requirements, or respond to technological changes.
        </p>
        <p className="text-gray-300 mb-4">
          Feature availability may vary based on factors such as device compatibility, operating system limitations, regional regulations, server capacity, or phased rollouts. Certain features may be offered on a trial or limited basis before being made generally available.
        </p>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms also reserves the right to perform scheduled or emergency maintenance, during which some or all services may be temporarily unavailable. Where reasonably possible, advance notice of planned maintenance will be provided through in-app notifications or other communication channels.
        </p>
        <p className="text-gray-300 mb-4">
          Continued use of the platform following feature changes or updates constitutes acceptance of such changes.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">5.4 Abuse Prevention and Platform Integrity</h3>
        <p className="text-gray-300 mb-4">
          Maintaining the integrity of DC Audio Rooms is essential to ensuring a safe and fair environment for all users. The platform employs technical, procedural, and policy-based safeguards to prevent abuse, misuse, and exploitation of its systems.
        </p>
        <p className="text-gray-300 mb-4">
          These safeguards include mechanisms to detect and limit spamming, automated or bot-driven activity, coordinated misuse, attempts to overload system resources, and efforts to circumvent platform restrictions. DC Audio Rooms may impose rate limits, access restrictions, or automated blocks where suspicious or harmful activity is detected.
        </p>
        <p className="text-gray-300 mb-4">
          Any attempt to interfere with platform operations, bypass security controls, manipulate frequencies, exploit vulnerabilities, or disrupt the service may result in immediate enforcement action. Such action may include temporary restrictions, suspension, permanent account termination, and, where applicable, reporting to law enforcement or relevant authorities.
        </p>
        <p className="text-gray-300 mb-4">
          DC Audio Rooms reserves the right to take all necessary steps to protect its infrastructure, users, and services from harm, while ensuring that enforcement actions are proportionate, documented, and aligned with applicable laws and platform policies.
        </p>
      </div>
    </div>
  );
};

export default PlatformOperationsPolicy;
