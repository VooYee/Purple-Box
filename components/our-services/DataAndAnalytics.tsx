'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import OurService3 from '@/public/our-services/OurService3.png';

const DataAndAnalytics = () => {
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
      ref={ref}
      className="space-y-6 wrapper flex flex-col items-center lg:flex-row justify-start lg:items-start gap-x-12"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >

      <motion.div
        className="relative h-[250px] w-[250px]"
        variants={imageVariants}
      >
        <Image
          src={OurService3}
          alt="Analytics Dashboard"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </motion.div>


      <motion.div className="text-start lg:text-start space-y-4" variants={textVariants}>
        <h3 className="font-gotham text-2xl lg:text-3xl font-bold text-start text-white">
          Data & Analytics: Unlock Actionable Insights
        </h3>
        <p className="max-w-3xl text-white">
          Harness the power of real-time data analytics to gain deep insights into your operations and make informed decisions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DataAndAnalytics