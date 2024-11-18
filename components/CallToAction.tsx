'use client'

// Library Import
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScheduleDemoDialog from './home/dialogs/ScheduleDemoDialog';

const CallToAction = () => {
  const [isScheduleDemoDialogOpen, setIsScheduleDemoDialogOpen] = useState(false);

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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} 
      className="text-center space-y-4 bg-[#3c1361] rounded-lg wrapper shadow-xl p-6"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >

      <motion.h2
        className="text-xl lg:text-3xl font-bold font-gotham text-white"
        variants={buttonVariants}
      >
        Ready to Transform Your Business?
      </motion.h2>

      <motion.p
        className="text-purple-200"
        variants={buttonVariants}
      >
        Join the growing list of businesses transforming their e-commerce operations with Purple-Box.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4"
        variants={containerVariants}
      >
        <motion.a
          href="/our-services"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.a>
        <motion.div
          className="border border-purple-400 text-purple-400 px-4 py-2 rounded hover:bg-purple-400 hover:text-white"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsScheduleDemoDialogOpen(true)}
        >
          Schedule a Demo
        </motion.div>
      </motion.div>

      <ScheduleDemoDialog isOpen={isScheduleDemoDialogOpen} setIsOpen={setIsScheduleDemoDialogOpen} />
    </motion.div>
  );
};

export default CallToAction;
