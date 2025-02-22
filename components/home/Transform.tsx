'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Constants Imports
import { transformWithPurpleBoxData } from '@/lib/constants';

// Components Imports
import GradientWrapper from '../GradientWrapper';

const Transform = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} 
      className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >

      <motion.h5
        className="font-gotham text-3xl lg:text-4xl font-bold text-white"
        variants={cardVariants}
      >
        Transform <span className="text-gradient">Your E-Commerce</span> With Purple Box
      </motion.h5>

      <motion.ul
        className="flex flex-wrap items-center justify-center gap-8 w-full"
        variants={containerVariants}
      >
        {transformWithPurpleBoxData.map((item, index) => {
          const Icon = item.image;

          return (
            <motion.li
              key={index}
              className="w-full lg:max-w-[350px] rounded-[25px]"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GradientWrapper
                classNameWrapper="w-full lg:max-w-[350px] rounded-[25px]"
                classNameContent="w-full flex flex-col rounded-[25px] items-center gap-y-4 p-4 bg-purple-"
                useShadow={true}
              >
                <Icon className="w-8 h-8" />
                <div className="flex flex-col items-center gap-y-2">
                  <p className="text-xl text-white">{item.title}</p>
                  <p className='text-white'>{item.description}</p>
                </div>
              </GradientWrapper>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Transform;
