// Library Import
import React from 'react';

// Components Import
import VisionAndMission from '@/components/about-us/VisionAndMission';
import OurStory from '@/components/about-us/OurStory';
import CoreValues from '@/components/about-us/CoreValues';
import TeamIntroduction from '@/components/about-us/TeamIntroduction';
import MediaAndAwards from '@/components/about-us/MediaAndAwards';
import CallToAction from '@/components/CallToAction';

const AboutUs = () => {
  return (
    <div className="text-white bg-[#1a0730] relative flex flex-col items-center gap-y-16">
      <VisionAndMission />
      <OurStory />
      <CoreValues />
      <TeamIntroduction />      
      <MediaAndAwards />
      <CallToAction />
      <div className='mb-20' /> 
    </div>
  );
};

export default AboutUs;
