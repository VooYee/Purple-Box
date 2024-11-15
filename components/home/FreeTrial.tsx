'use client'

// Library Import
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { useEffect } from "react";

const FreeTrial = () => {
  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.2, // Mulai animasi ketika 20% dari section terlihat
  });

  // Framer Motion Animation Controls
  const animationControls = useAnimation();

  // Start animation when inView is true
  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper w-full flex flex-col items-center gap-y-12 my-12"
      variants={containerVariants}
      initial="hidden"
      animate={animationControls}
    >
      {/* Animated Divider */}
      <motion.div
        className="w-[250px] bg-purple-500 h-[2px] rounded-full shadow-royal-purple"
        variants={buttonVariants}
      />
      
      {/* Animated Title */}
      <motion.h5
        className="font-gotham text-3xl lg:text-4xl font-bold text-center"
        variants={buttonVariants}
      >
        Take the Next Step with <span className="text-gradient">Purple Box</span>
      </motion.h5>
      
      {/* Animated Buttons */}
      <motion.div
        className="flex items-center flex-col md:flex-row justify-center gap-4 font-gotham"
        variants={containerVariants}
      >
        {/* Get Started Button */}
        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"default"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg transition duration-300 hover:from-purple-600 hover:to-purple-800 transform"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Schedule a Demo Button */}
        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 border border-purple-400 text-purple-400 rounded-lg transition duration-300 hover:bg-purple-400 hover:text-white transform"
          >
            Schedule A Demo
          </Button>
        </motion.div>

        {/* Learn More Button */}
        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 text-purple-500 bg-purple-100 rounded-lg transition duration-300 hover:bg-purple-200 transform"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FreeTrial;
