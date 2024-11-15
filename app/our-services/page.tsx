// Library Import
import React from 'react';
import Image from 'next/image';

// Icons Import
import { FaChartLine, FaRobot, FaEnvelope, FaCogs, FaComments } from 'react-icons/fa';

// Assets Import
import ExampleBanner from '@/public/Purple-Box-Logo.png'; // Placeholder image for the banner
import AnalyticsDashboard from '@/public/Purple-Box-Logo.png'; // Placeholder for analytics mockup

//
import ServiceOverview from '@/components/our-services/ServiceOverview';
import AISalesAgent from '@/components/our-services/AISalesAgent';
import CRMIntegration from '@/components/our-services/CRMIntegration';
import MarketingAutomation from '@/components/our-services/MarketingAutomation';
import AIChatBots from '@/components/our-services/AIChatBots';
import DataAndAnalytics from '@/components/our-services/DataAndAnalytics';
import CallToAction from '@/components/about-us/CallToAction';

const OurServices = () => {
  return (
    <div className="text-white bg-[#1a0730] space-y-20 py-16 px-8">
      <ServiceOverview />
      <AISalesAgent />
      <CRMIntegration />
      <MarketingAutomation />
      <AIChatBots />
      <DataAndAnalytics />
      <CallToAction />      
    </div>
  );
};

export default OurServices;
