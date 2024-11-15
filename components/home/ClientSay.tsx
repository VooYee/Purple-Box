'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Asset Imports
import Dummy from '@/public/Purple-Box-Logo.png';

// Constants Imports
import { customerTestimonialsData } from '@/lib/constants';

const ClientSay = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  // Framer Motion animation controls
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

  // Variants for parent container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Variants for child elements (cards)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={ref} // Assign ref to track visibility
      className="flex flex-col items-center gap-y-12 py-24 w-full h-full bg-[#3c1361] shadow-lg"
    >
      {/* Animated Section Title */}
      <motion.h5
        className="font-gotham text-3xl px-4 lg:text-4xl font-bold text-white tracking-wide text-center"
        initial="hidden"
        animate={animationControls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        What Our Clients Say
      </motion.h5>

      {/* Animated Cards Container */}
      <motion.ul
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={animationControls}
      >
        {customerTestimonialsData.map((item, index) => (
          <motion.li
            key={index}
            className="p-6 border border-purple-700 rounded-xl bg-[#2e0844] shadow-lg flex flex-col items-start gap-y-6"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex gap-x-3 items-center">
              <Image
                src={Dummy}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-start">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-purple-400">
                  {item.position} @ {item.company}
                </p>
              </div>
            </div>
            <p className="text-purple-200 text-sm italic leading-relaxed">
              &quot;{item.quote}&quot;
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ClientSay;
