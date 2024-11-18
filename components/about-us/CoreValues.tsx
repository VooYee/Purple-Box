'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components Import
import GradientWrapper from '../GradientWrapper';

// Constants Import
import { coreValuesData } from '@/lib/constants';

const CoreValues = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="wrapper space-y-6"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >

      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center font-gotham"
        variants={cardVariants}
      >
        Our Core Values
      </motion.h2>


      <motion.div
        className="flex flex-wrap justify-center gap-8 w-full flex-row"
        variants={containerVariants}
      >
        {coreValuesData.map((value, index) => (
          <motion.div
            key={index}
            className="rounded-xl"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GradientWrapper
              classNameWrapper="rounded-xl lg:max-w-[350px]"
              classNameContent="rounded-xl w-full flex flex-col items-center justify-center p-6 space-y-4 text-center bg-purple-900"
              useShadow={true}
            >
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="text-sm text-purple-200">{value.description}</p>
            </GradientWrapper>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoreValues;
