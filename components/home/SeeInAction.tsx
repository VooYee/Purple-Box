'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Asset Imports
import RobotPad from "@/public/home/RobotPad.png";

const SeeInAction = () => {
  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.2, // Mulai animasi ketika 20% dari section terlihat
  });

  // Framer Motion Animation Controls
  const animationControls = useAnimation();

  // Start animation when inView is true
  React.useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
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
        className="font-gotham text-3xl lg:text-4xl font-bold text-center"
        variants={titleVariants}
      >
        See <span className="text-gradient">Purple-Box</span> in Action
      </motion.h5>

      {/* Animated Image */}
      <motion.div variants={imageVariants}>
        <Image 
          src={RobotPad}
          alt="RobotPad"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default SeeInAction;
