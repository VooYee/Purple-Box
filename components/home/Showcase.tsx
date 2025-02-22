'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import LeftInfo from "@/public/home/LeftInfo.png";
import RightInfo from "@/public/home/RightInfo.png";
import ShowcaseImg from "@/public/home/Showcase.png";

const Showcase = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const floatingVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: { opacity: 1, x: 250, y: 100, transition: { duration: 1 } },
  };

  const floatingLeftVariants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: { opacity: 1, x: -250, y: -25, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.p
        className="lg:text-xl text-center text-white"
        variants={imageVariants}
      >
        AI-powered multichannel chatbot designed for e-commerce <br className="hidden lg:block" /> businesses to enhance customer acquisition and provide seamless 24/7 support.
      </motion.p>

      <motion.div variants={imageVariants}>
        <Image 
          src={ShowcaseImg}
          alt="Product Showcase"
          width={450}
          height={450}
        />
      </motion.div>

      {/* Right Info */}
      <motion.div
        className="hidden lg:block absolute translate-x-[250px] w-[250px] translate-y-[-10px] transition-all hover:scale-125"
        variants={floatingVariants}
        whileHover={{ scale: 1.2 }}
      >
        <Image src={RightInfo} alt="Right Info" />
      </motion.div>

      {/* Left Info */}
      <motion.div
        className="hidden lg:block absolute translate-x-[-250px] w-[250px] translate-y-[100px] transition-all hover:scale-125"
        variants={floatingLeftVariants}
        whileHover={{ scale: 1.2 }}
      >
        <Image src={LeftInfo} alt="Left Info" />
      </motion.div>
    </motion.div>
  );
};

export default Showcase;
