'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

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
      ref={ref}
      className="wrapper space-y-8"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl lg:text-3xl font-bold text-center font-gotham text-white"
        variants={rowVariants}
      >
        Compare Our Plans
      </motion.h2>

      <motion.div
        className="overflow-x-auto w-full"
        variants={containerVariants}
      >
        <table className="w-full text-left text-purple-200 border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-purple-700">Features</th>
              <th className="p-4 border-b border-purple-700">Wordpress</th>
              <th className="p-4 border-b border-purple-700">WooCommerce</th>
              <th className="p-4 border-b border-purple-700">Shopify</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['AI Sales Agent', 'Limited', 'Advanced', 'Full Access'],
              ['CRM Integration', '-', 'Enhanced', 'Advanced'],
              ['Marketing Automation', 'Email Only', 'Multi-Channel', 'WhatsApp & More'],
              ['AI Chatbots', 'Full Access', 'Full Access', 'Full Access'],
              ['Data & Analytics', 'Basic', 'Advanced', 'Predictive Insights'],
              ['Customer Support', '-', 'Basic', 'Priority'],
              ['PDF Document Integration', 'Available', 'Available', 'Available'],
              ['Database Integration', '-', 'Available', 'Available'],
              ['Customer Database Integration', 'Basic', 'Advanced', 'Full Access'],
            ].map(([feature, wordpress, woocommerce, shopify], index) => (
              <motion.tr
                key={index}
                className="border-b border-purple-700"
                variants={rowVariants}
              >
                <td className="p-4">{feature}</td>
                <td className="p-4 text-start">{wordpress}</td>
                <td className="p-4 text-start">{woocommerce}</td>
                <td className="p-4 text-start">{shopify}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Features;
