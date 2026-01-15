import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <motion.div
        className="bg-dark rounded-xl p-6 max-w-md w-full border border-gray-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Download DC Audio Rooms</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">

          {/* ANDROID APK */}
          <div className="bg-darker rounded-lg p-4 flex items-center space-x-4 hover:bg-darker/80 transition-colors">
            <div className="bg-primary/20 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                <polygon points="12 15 17 21 7 21 12 15" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="font-medium">Android APK</h3>
              <p className="text-sm text-gray-400">Version 1.2.0</p>
            </div>

            <a
              href="https://storage.googleapis.com/dhvani-apk-files/app-release.apk"
              className="btn-primary"
              download="app-release.apk"
            >
              Download
            </a>
          </div>

          {/* iOS APP */}
          <div className="bg-darker rounded-lg p-4 flex items-center space-x-4 hover:bg-darker/80 transition-colors">
            <div className="bg-primary/20 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="font-medium">iOS App</h3>
              <p className="text-sm text-gray-400">Version 1.2.0</p>
            </div>

            <a
              href="https://storage.googleapis.com/dhvani-apk-files/Runner.app.ipa"
              className="btn-primary"
              download="Runner.app.ipa"
            >
              Download
            </a>
          </div>

          <p className="text-sm text-gray-400 text-center mt-4">
            By downloading, you agree to our
            <Link to="/terms-of-use" className="text-primary hover:underline" onClick={onClose}> Terms of Service </Link>
            and
            <Link to="/privacy-policy" className="text-primary hover:underline" onClick={onClose}> Privacy Policy</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadPopup;
