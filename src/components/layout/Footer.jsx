import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darker py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="DhvaniCast Logo" className="h-12" />
              <h2 className="text-xl font-bold text-white -ml-3">
                <span className="text-primary">Audio</span> Rooms
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              Making communication easy and immersive with cutting-edge technology.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-of-use" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/child-safety" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Child Safety and CSAE Policy</Link></li>
              <li><Link to="/community-guidelines" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Community Guidelines</Link></li>
              <li><Link to="/cookie-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</Link></li>

              <li><Link to="/frequency-usage-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Frequency Usage Policy</Link></li>
              <li><Link to="/platform-operations-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Platform Operations Policy</Link></li>
              <li><Link to="/transparency-and-moderation-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Transparency and Moderation Policy</Link></li>
              <li><Link to="/payment-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Payment Policy</Link></li>
              <li><Link to="/refund-policy" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">Refund and Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-dark border border-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} 2026 DC Audio Rooms. A product of Editevolv Software Private Limited All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
