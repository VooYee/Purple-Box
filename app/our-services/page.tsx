// Library Import
import React from 'react';

// Components Import
import ServiceOverview from '@/components/our-services/ServiceOverview';
import AISalesAgent from '@/components/our-services/AISalesAgent';
import CRMIntegration from '@/components/our-services/CRMIntegration';
import MarketingAutomation from '@/components/our-services/MarketingAutomation';
import DataAndAnalytics from '@/components/our-services/DataAndAnalytics';
import CallToAction from '@/components/CallToAction';
import AIChatBots from '@/components/our-services/AIChatbots';

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
