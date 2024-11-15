'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import TempImg from '@/public/Purple-Box-Logo.png';

const OurStory = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper text-center space-y-6"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-gotham font-bold text-center"
        variants={textVariants}
      >
        Our <span className="text-gradient">Story</span>
      </motion.h2>

      {/* Animated Content */}
      <div className="space-y-4">
        <motion.div
          className="w-full flex justify-between gap-x-12 items-center"
          variants={containerVariants}
        >
          <motion.p
            className="max-w-2xl text-start"
            variants={textVariants}
          >
            Purple-Box was born out of a desire to simplify and enhance e-commerce operations for businesses of all sizes. Our founders, a group of passionate AI developers and e-commerce veterans, recognized a common challenge: the need for smart, automated solutions to handle customer acquisition and support in a digital-first world.
          </motion.p>
          <motion.div variants={imageVariants}>
            <Image
              src={TempImg}
              alt="Purple Box Logo"
              width={250}
              height={250}
              className="rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex justify-between gap-x-12 items-center"
          variants={containerVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src={TempImg}
              alt="Purple Box Logo"
              width={250}
              height={250}
              className="rounded-full"
            />
          </motion.div>
          <motion.p
            className="max-w-2xl text-end"
            variants={textVariants}
          >
            Since our inception, we have grown from a small startup into a leading AI solutions provider, trusted by businesses across Europe and North America. With every step forward, we’ve expanded our capabilities, refined our technology, and continued to innovate to meet the evolving needs of our clients.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStory;
