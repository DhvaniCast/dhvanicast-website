import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DownloadPopup from './DownloadPopup';
import RotatingEarth from './3d/RotatingEarth';

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
                Experience the future of communication with Dhvani Cast -
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
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* 3D Canvas for Earth */}
                <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 3, 5]} intensity={1.8} />
                  <pointLight position={[-3, 0, -3]} intensity={0.6} color="#60a5fa" />
                  
                  <RotatingEarth />
                  
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1.5}
                  />
                </Canvas>
                
                {/* Green ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-2 border-primary/70 rounded-full pointer-events-none"></div>
                
                {/* Green dot */}
                {/* <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse"></div> */}
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
