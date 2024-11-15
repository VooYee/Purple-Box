'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Constants Imports
import { whoWeServeData } from '@/lib/constants';
import GradientWrapper from '../GradientWrapper';

const WhoWeServe = () => {
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
      className="flex flex-col items-center gap-y-12"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h5
        className="font-gotham text-4xl font-bold text-gradient"
        variants={cardVariants}
      >
        Who We Serve
      </motion.h5>

      {/* Animated List of Profiles */}
      <motion.ul
        className="max-w-7xl w-full flex justify-between gap-8"
        variants={containerVariants}
      >
        {whoWeServeData.map((item, index) => (
          <motion.li
            key={index}
            className="rounded-xl flex-grow"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GradientWrapper
              classNameContent="rounded-xl flex flex-col items-center gap-y-4 text-center p-6 bg-purple-900"
              classNameWrapper="rounded-xl"
              useShadow={true}
            >
              <p className="font-bold text-xl">{item.profile}</p>
              <p>{item.description}</p>
            </GradientWrapper>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default WhoWeServe;
