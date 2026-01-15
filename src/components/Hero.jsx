import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DownloadPopup from './DownloadPopup';
import earthGif from '../assets/Rotating_earth_(large)_transparent.gif';

const Hero = () => {
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen bg-darker py-20 flex items-center">
        {/* Green gradient background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side text */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Make
                <br />
                <span className="text-primary">Communication</span>
                <br />
                Easy & Immersive
              </h1>
              <p className="text-base text-gray-300 mb-6">
                Experience the future of communication with DC Audio Rooms -
                <br />
                seamlessly connect with crystal clear audio and immersive
                <br />
                features.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="btn-primary"
                  onClick={() => setIsDownloadPopupOpen(true)}
                >
                  Download Now
                </button>
                <button className="btn-outline">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right side - 3D Earth */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative flex items-center justify-center w-80 h-80 md:w-[28rem] md:h-[28rem]">
                <img
                  src={earthGif}
                  alt="Rotating Earth GIF"
                  className="w-72 h-72 md:w-[26rem] md:h-[26rem] object-contain drop-shadow-lg"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={isDownloadPopupOpen}
        onClose={() => setIsDownloadPopupOpen(false)}
      />
    </>
  );
};

export default Hero;
