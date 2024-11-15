'use client'

// Library Import
import React, { useState } from 'react';

// Components Import
import Intro from '@/components/pricing/Intro';

// Icons Import
import { FaCheckCircle } from 'react-icons/fa';
import Tiers from '@/components/pricing/Tiers';
import Features from '@/components/pricing/Features';
import AddOns from '@/components/pricing/AddOns';
import FAQ from '@/components/pricing/FAQ';
import CallToAction from '@/components/about-us/CallToAction';

const Pricing = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index: any) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className=" text-white bg-[#1a0730] space-y-20 py-16 px-8">
      <Intro />  
      <Tiers /> 
      <Features />
      <AddOns />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default Pricing;
