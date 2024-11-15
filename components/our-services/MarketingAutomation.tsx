'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons Import
import { FaChartLine, FaRobot, FaEnvelope, FaCogs, FaComments } from 'react-icons/fa';

const MarketingAutomation = () => {
  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Framer Motion Animation Controls
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper space-y-6"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h3
        className="font-gotham text-3xl font-bold text-center"
        variants={cardVariants}
      >
        Marketing Automation: Engage and Convert with Precision
      </motion.h3>

      {/* Animated Description */}
      <motion.p
        className="max-w-3xl mx-auto text-center"
        variants={cardVariants}
      >
        Automate your marketing efforts with AI-powered tools that handle everything from email campaigns to personalized WhatsApp messaging.
      </motion.p>

      {/* Animated Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {[
          { icon: FaEnvelope, title: 'Automated Email Campaigns', desc: 'Design and deploy email campaigns that are personalized and optimized.' },
          { icon: FaComments, title: 'WhatsApp Messaging', desc: 'Send timely updates and promotional messages directly to customers.' },
          { icon: FaCogs, title: 'Cross-Channel Marketing', desc: 'Manage campaigns across multiple channels from a single platform.' },
        ].map((point, index) => (
          <motion.div
            key={index}
            className="p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <point.icon className="text-purple-400 mx-auto" size={36} />
            <h4 className="text-xl font-semibold">{point.title}</h4>
            <p className="text-sm text-purple-200">{point.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MarketingAutomation;
