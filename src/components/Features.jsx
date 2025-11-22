import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, Headphones, Mic, Users, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className="bg-dark rounded-xl p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  
  const features = [
    {
      icon: Volume2,
      title: "Crystal Clear Audio",
      description: "Experience high-definition audio quality that makes every conversation feel like you're in the same room."
    },
    {
      icon: Headphones,
      title: "Immersive Sound",
      description: "Spatial audio technology creates a 3D soundscape, allowing you to hear exactly where each voice is coming from."
    },
    {
      icon: Mic,
      title: "Noise Cancellation",
      description: "Advanced algorithms filter out background noise, ensuring your voice comes through clearly every time."
    },
    {
      icon: Users,
      title: "Group Communication",
      description: "Connect with multiple people simultaneously with no loss in audio quality or clarity."
    },
    {
      icon: Shield,
      title: "Secure Conversations",
      description: "End-to-end encryption ensures your conversations remain private and secure at all times."
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Real-time communication with minimal delay, making conversations feel natural and responsive."
    }
  ];

  return (
    <section id="features" className="section-padding bg-darker">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Features</span> That Make Us Special
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dhvani Cast combines cutting-edge technology with intuitive design to deliver 
            an unparalleled communication experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
