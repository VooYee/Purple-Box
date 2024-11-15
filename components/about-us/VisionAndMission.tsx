'use client'

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionAndMission = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper mt-[120px] text-center space-y-8"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-bold font-gotham"
        variants={textVariants}
      >
        Our Vision and Mission
      </motion.h2>

      {/* Animated Vision Statement */}
      <motion.div
        className="shadow-royal-purple"
        variants={textVariants}
      >
        <p className="text-2xl italic bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-lg">
          "To revolutionize e-commerce with AI, empowering businesses to innovate and grow with scalable, efficient, and cutting-edge solutions."
        </p>
      </motion.div>

      {/* Animated Mission Section */}
      <motion.div
        className="w-full flex flex-col gap-y-4 items-center"
        variants={containerVariants}
      >
        <motion.p
          className="max-w-2xl mx-auto font-agrandir"
          variants={textVariants}
        >
          Our mission is to enable small to medium-sized e-commerce businesses to optimize client acquisition and management using AI technology. We aim to enhance operational efficiency, drive sustainable growth, and ensure exceptional customer support experiences.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          className="w-[250px] bg-white h-[1px] rounded-full"
          variants={dividerVariants}
        />
      </motion.div>
    </motion.div>
  );
};

export default VisionAndMission;
