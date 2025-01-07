"use client";

// Library Import
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Main = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start("visible");
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="text-center space-y-6 mt-[80px] wrapper"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl lg:text-4xl font-bold font-gotham text-white"
        variants={textVariants}
      >
        Our <span className="text-gradient">Privacy Policy</span>
      </motion.h1>

      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        At Purple Box AI SL, accessible through{" "}
        <Link href="https://purple-box.app" className="text-purple-400">
          purple-box.app
        </Link>
        , we are dedicated to safeguarding your privacy and ensuring the secure
        handling of your personal information. This privacy policy outlines what
        data we collect, how it is used, the legal bases for processing, and
        your rights. By using our services, you agree to this policy, and we
        encourage regular reviews for updates.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Data Collection
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We collect data to enhance and improve our services. The data includes:
      </motion.p>
      <motion.ul
        className="list-disc text-left ml-8 text-purple-200"
        variants={textVariants}
      >
        <li>
          Personal Information: Name, email, phone, business details, payment
          information.
        </li>
        <li>Usage Data: Browser type, IP address, and device information.</li>
        <li>
          Interaction Data: Information about how you interact with our website
          and services.
        </li>
      </motion.ul>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        Legal Bases for Processing
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        Our data processing is based on:
        <ul className="list-disc text-left ml-8">
          <li>Consent: Voluntarily provided data.</li>
          <li>Contractual Necessity: To deliver the services you request.</li>
          <li>
            Legitimate Interests: Improving user experience and maintaining
            security.
          </li>
        </ul>
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        Data Sharing
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We share data with trusted third parties for:
        <ul className="list-disc text-left ml-8">
          <li>Analytics (e.g., Meta Pixel).</li>
          <li>Payment processing.</li>
          <li>Service optimization.</li>
        </ul>
        All partners comply with data protection standards.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        International Data Transfers
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        Data transfers outside the EEA are protected through Standard
        Contractual Clauses and equivalent safeguards.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        Security Measures
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We employ encryption, regular security audits, and restricted access
        controls to safeguard your data.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        User Rights
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        You have the right to:
        <ul className="list-disc text-left ml-8">
          <li>Access your data.</li>
          <li>Request data corrections or deletions.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Opt-out of targeted advertising.</li>
        </ul>
        Contact us at{" "}
        <Link href="mailto:info@purple-box.app" className="text-purple-400">
          info@purple-box.app
        </Link>{" "}
        to exercise these rights.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        Children’s Privacy
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        Our services are not intended for children under 16. If we inadvertently
        collect data from minors, it will be deleted promptly.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Policy Updates
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        Updates to this policy will be posted on this page, with the latest
        revision date indicated.
      </motion.p>
    </motion.div>
  );
};

export default Main;
