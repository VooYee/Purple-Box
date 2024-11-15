'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Asset Import
import TempImg from '@/public/Purple-Box-Logo.png';

// Icon Import
import { FaLinkedin } from 'react-icons/fa';

const TeamIntroduction = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper space-y-6"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center font-gotham"
        variants={cardVariants}
      >
        Meet Our Team
      </motion.h2>

      {/* Animated Team Cards */}
      <motion.div
        className="flex flex-col items-center md:flex-row justify-center gap-8 w-full "
        variants={containerVariants}
      >
        {[
          { name: 'John Doe', title: 'CEO', bio: 'Expert in AI development and e-commerce innovation.' },
          { name: 'Jane Smith', title: 'CTO', bio: 'Specialist in scalable tech solutions and AI-driven systems.' },
          { name: 'Alice Brown', title: 'COO', bio: 'Experienced in operational efficiency and business growth.' },
        ].map((member, index) => (
          <motion.div
            key={index}
            className="text-center space-y-3 rounded-lg border-2 border-purple-500 bg-purple-700 p-4 w-full"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={TempImg}
              alt={member.name}
              className="rounded-full mx-auto"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-purple-200">{member.title}</p>
            <p className="text-sm">{member.bio}</p>
            <a href="#" className="text-purple-400 mt-6 w-full flex justify-center hover:text-purple-500">
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamIntroduction;
