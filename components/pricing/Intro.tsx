'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="text-center space-y-6 mt-[80px] wrapper"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h1
        className="text-3xl lg:text-4xl font-bold font-gotham"
        variants={textVariants}
      >
        Find the <span className="text-gradient">Perfect Plan</span> for Your Business
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        At Purple-Box, we offer a range of pricing plans tailored to fit the needs of businesses of all sizes. Whether you're just getting started or looking to scale, we have the right plan for you. Explore our plans and find the perfect match for your business needs.
      </motion.p>
    </motion.div>
  );
};

export default Intro;
