'use client'

// Library Import
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

// Components Import
import { Button } from "../ui/button";
import GetStartedDialog from "./GetStartedDialog";

const FreeTrial = () => {
  const [isGetStartedDialogOpen, setIsGetStartedDialogOpen] = useState(false);
  const [isScheduleDemoDialogOpen, setIsScheduleDemoDialogOpen] = useState(false);
  const router = useRouter();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

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
      ref={ref} 
      className="wrapper w-full flex flex-col items-center gap-y-12 my-12"
      variants={containerVariants}
      initial="hidden"
      animate={animationControls}
    >
      <motion.div
        className="w-[250px] bg-purple-500 h-[2px] rounded-full shadow-royal-purple"
        variants={buttonVariants}
      />
      <motion.h5
        className="font-gotham text-3xl lg:text-4xl font-bold text-center text-white"
        variants={buttonVariants}
      >
        Take the Next Step with <span className="text-gradient">Purple Box</span>
      </motion.h5>
      
      <motion.div
        className="flex items-center flex-col md:flex-row justify-center gap-4 font-gotham"
        variants={containerVariants}
      >
        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"default"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg transition duration-300 hover:from-purple-600 hover:to-purple-800 transform"
            onClick={() => setIsGetStartedDialogOpen(true)}
          >
            Get Started
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 border border-purple-400 text-purple-400 rounded-lg transition duration-300 hover:bg-purple-400 hover:text-white transform"
          >
            Schedule A Demo
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="min-w-[300px] md:min-w-[0px] px-6 py-3 text-purple-500 bg-purple-100 rounded-lg transition duration-300 hover:bg-purple-200 transform"
            onClick={() => router.push("/pricing")}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      <GetStartedDialog isOpen={isGetStartedDialogOpen} setIsOpen={setIsGetStartedDialogOpen} />
    </motion.div>
  );
};

export default FreeTrial;
