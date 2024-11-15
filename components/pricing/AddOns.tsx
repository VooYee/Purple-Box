'use client'

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AddOns = () => {
  // Intersection Observer
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

  // Variants
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
      ref={ref}
      className="wrapper space-y-8"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-gotham font-bold text-center"
        variants={cardVariants}
      >
        Enhance Your Plan with Add-Ons
      </motion.h2>
      <motion.div className="flex flex-col md:flex-row justify-between w-full gap-4" variants={containerVariants}>
        {[
          { title: 'WhatsApp Integration', price: '€15/month' },
          { title: 'Email Integration', price: '€10/month' },
          { title: 'Analytic CRM', price: '€20/month' },
          { title: 'Priority Support', price: '€9.99/month' },
        ].map((addon, index) => (
          <motion.div
            key={index}
            className="w-full p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4 className="text-xl font-semibold">{addon.title}</h4>
            <p className="text-purple-200">{addon.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AddOns;
