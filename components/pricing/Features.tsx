'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
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

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper space-y-8"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-3xl font-bold text-center font-gotham"
        variants={rowVariants}
      >
        Compare Our Plans
      </motion.h2>

      {/* Animated Table */}
      <motion.div
        className="overflow-x-auto w-full"
        variants={containerVariants}
      >
        <table className="w-full text-left text-purple-200 border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-purple-700">Features</th>
              <th className="p-4 border-b border-purple-700">Freemium</th>
              <th className="p-4 border-b border-purple-700">ChatBot Plan</th>
              <th className="p-4 border-b border-purple-700">Premium</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['AI Sales Agent', 'Limited', 'Advanced', 'Full Access'],
              ['CRM Integration', '-', 'Enhanced', 'Advanced'],
              ['Marketing Automation', 'Email Only', 'Multi-Channel', 'WhatsApp & More'],
              ['AI Chatbots', '50 Queries/Month', 'Unlimited', '24/7 Advanced'],
              ['Data & Analytics', 'Basic', 'Advanced', 'Predictive Insights'],
              ['Customer Support', '-', 'Basic', 'Priority'],
            ].map(([feature, freemium, basic, premium], index) => (
              <motion.tr
                key={index}
                className="border-b border-purple-700"
                variants={rowVariants}
              >
                <td className="p-4">{feature}</td>
                <td className="p-4 text-start">{freemium}</td>
                <td className="p-4 text-start">{basic}</td>
                <td className="p-4 text-start">{premium}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Features;
