'use client'

// Library Import
import Image from 'next/image';
import { motion } from 'framer-motion';

// Components Imports
import EllipseGradient from '../EllipseGradient';

// Asset Imports
import RobotPad from "@/public/home/RobotPad.png";

const Hero = () => {
  return (
    <div className="wrapper mt-[120px] w-full text-center h-[500px] flex flex-col items-center justify-center gap-y-4 relative">
      {/* Animated Title */}
      <motion.h3
        className="text-3xl lg:text-4xl font-bold font-gotham"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Grow <span className="text-gradient">Smart</span>, Sell More
      </motion.h3>

      {/* Animated Subtitle */}
      <motion.h5
        className="lg:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Unlock the power of AI with Purple-Box, the multichannel chatbot <br className='hidden lg:block' /> designed for e-commerce growth.
      </motion.h5>

      {/* Animated Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={RobotPad} alt="RobotPad" width={500} height={500} />
      </motion.div>
    </div>
  );
};

export default Hero;
