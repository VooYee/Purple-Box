'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import OurService2 from '@/public/our-services/OurService2.png';

const CRMIntegration = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper flex flex-col items-center lg:flex-row justify-start lg:items-start gap-12"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Image */}
      <motion.div
        className="relative h-[250px] w-[250px]"
        variants={imageVariants}
      >
        <Image
          src={OurService2}
          alt="CRM Integration"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-Royal-Purple"
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div className="text-center lg:text-start space-y-4" variants={textVariants}>
        <h3 className="text-2xl lg:text-3xl font-bold font-gotham">
          CRM Integration: Maximize Your Customer Relationships
        </h3>
        <p className="max-w-3xl">
          Integrate Purple-Box seamlessly with your existing CRM systems to improve data management and deliver personalized marketing campaigns.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CRMIntegration;
