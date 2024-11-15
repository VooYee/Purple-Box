'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components Import
import GradientWrapper from '../GradientWrapper';

const CoreValues = () => {
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
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center font-gotham"
        variants={cardVariants}
      >
        Our Core Values
      </motion.h2>

      {/* Animated Core Values Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {[
          { title: 'Efficient', desc: 'We believe in delivering solutions that maximize productivity and reduce overhead.' },
          { title: 'Scalable', desc: 'Our technology is designed to grow with our clients effortlessly.' },
          { title: 'Innovative', desc: 'Innovation is at the heart of what we do.' },
          { title: 'Empowering', desc: 'We empower clients by providing tools that drive success.' },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="rounded-xl"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GradientWrapper
              classNameWrapper="rounded-xl"
              classNameContent="rounded-xl w-full flex flex-col items-center justify-center p-6 space-y-4 text-center bg-purple-900"
              useShadow={true}
            >
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="text-sm text-purple-200">{value.desc}</p>
            </GradientWrapper>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoreValues;
