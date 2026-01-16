import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DownloadPopup from '../DownloadPopup';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="DhvaniCast Logo" className="h-16" />
            <h1 className="text-2xl font-bold text-white -ml-4">
              <span className="text-primary">Audio</span> Rooms
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
            <button className="btn-primary" onClick={() => setIsDownloadPopupOpen(true)}>Download App</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-darker/95 backdrop-blur-md absolute top-full left-0 w-full py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="btn-primary w-full" onClick={() => setIsDownloadPopupOpen(true)}>Download App</button>
            </nav>
          </div>
        )}
      </header>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={isDownloadPopupOpen}
        onClose={() => setIsDownloadPopupOpen(false)}
      />
    </>
  );
};

export default Header;
