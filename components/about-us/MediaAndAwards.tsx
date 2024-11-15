'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import AwardIcon from '@/public/Purple-Box-Logo.png';

const MediaAndAwards = () => {
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
      className="space-y-6 text-center wrapper"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-3xl lg:text-4xl font-bold font-gotham"
        variants={cardVariants}
      >
        In the Media & Recognitions
      </motion.h2>

      {/* Animated Awards */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6"
        variants={containerVariants}
      >
        {[
          { logo: AwardIcon, text: 'Winner of the 2023 E-commerce Innovation Award' },
          { logo: AwardIcon, text: 'Recognized by E-Commerce Times for Innovation' },
        ].map((award, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white/10 rounded-lg shadow-md flex items-center space-x-4"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={award.logo} alt="Award Icon" width={50} height={50} />
            <p className="text-purple-200">{award.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MediaAndAwards;
