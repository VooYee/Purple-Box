'use client'

// Library Import
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons Import
import { FaCheckCircle } from 'react-icons/fa';

const Tiers = () => {
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
      className="wrapper space-y-8"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl lg:text-3xl font-bold text-center font-gotham text-white"
        variants={cardVariants}
      >
        Choose Your Platform
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {/* WordPress Plan */}
        <motion.div
          className="p-6 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-4"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-semibold font-gotham">WordPress</h3>
          {/* <p className="text-4xl font-bold">Free</p> */}
          <p className="text-purple-200">
            Perfect for bloggers and personal projects. Easily create a stunning website with basic WordPress features.
          </p>
          <ul className="space-y-2">
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Basic Themes
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Core Plugins
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> WordPress Hosting
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Basic Analytics
            </li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Choose Wordpress
          </button>
        </motion.div>

        {/* WooCommerce Plan */}
        <motion.div
          className="p-6 border border-purple-700 rounded-lg bg-[#3c1361] text-center space-y-4"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-semibold font-gotham">WooCommerce</h3>
          {/* <p className="text-4xl font-bold">€29.99/month</p> */}
          <p className="text-purple-200">
            A powerful solution for eCommerce stores built on WordPress. Fully customizable and perfect for medium-sized businesses.
          </p>
          <ul className="space-y-2">
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Advanced Plugins
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Premium Themes
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Product Management
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Payment Integrations
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Email Campaigns
            </li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Choose WooCommerce
          </button>
        </motion.div>

        {/* Shopify Plan */}
        <motion.div
          className="p-6 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-4"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-semibold font-gotham">Shopify</h3>
          {/* <p className="text-4xl font-bold">€59.90/month</p> */}
          <p className="text-purple-200">
            The complete solution for professional eCommerce. Manage your online store, track orders, and enjoy premium support.
          </p>
          <ul className="space-y-2">
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Shopify Store Setup
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Advanced Analytics
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Multi-Channel Selling
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Full CRM Integration
            </li>
            <li>
              <FaCheckCircle className="inline text-purple-400" /> Priority Support
            </li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Choose Shopify
          </button>
        </motion.div>
      </motion.div>

      {/* Contact Us Button */}
      <motion.div
        className="text-center mt-8"
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-purple-600 min-w-[350px] font-gotham text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-bold">
          Contact Us
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Tiers;
