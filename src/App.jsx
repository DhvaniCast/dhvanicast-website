import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsOfUse from './components/TermsOfUse';
import ChildSafety from './components/ChildSafety';
import PlatformPolicies from './components/PlatformPolicies';

function App() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/child-safety" element={<ChildSafety />} />
      <Route path="/platform-policies" element={<PlatformPolicies />} />
      <Route path="/" element={
        <div className="min-h-screen bg-darker text-white">
          <Header />

          <main>
            <Hero />
            <Features />

            {/* About Section */}
            <section id="about" className="section-padding bg-dark">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About <span className="text-primary">Dhvani Cast</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Dhvani Cast was born from a simple idea: communication should be effortless,
                    immersive, and accessible to everyone. Our team of audio engineers and software
                    developers have worked tirelessly to create a platform that revolutionizes
                    how we connect with each other through sound.
                  </p>
                  <p className="text-gray-300">
                    Whether you're collaborating with colleagues across the globe, gaming with
                    friends, or catching up with family, Dhvani Cast provides the crystal-clear,
                    immersive audio experience you deserve. Join us in shaping the future of
                    communication.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding bg-darker">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get In <span className="text-primary">Touch</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Have questions or feedback? We'd love to hear from you. Reach out to our team
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn-primary px-8 py-3">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;
