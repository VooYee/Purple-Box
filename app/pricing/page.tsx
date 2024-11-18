'use client'

// Library Import
import React from 'react';

// Components Import
import Intro from '@/components/pricing/Intro';

// Icons Import
import Tiers from '@/components/pricing/Tiers';
import Features from '@/components/pricing/Features';
import AddOns from '@/components/pricing/AddOns';
import FAQ from '@/components/pricing/FAQ';
import CallToAction from '@/components/CallToAction';

const Pricing = () => {
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
