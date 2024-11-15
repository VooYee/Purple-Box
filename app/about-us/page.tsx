// Library Import
import React from 'react';
import Image from 'next/image';

// Assets Import
import AwardIcon from '@/public/Purple-Box-Logo.png'; 

// Components Import
import VisionAndMission from '@/components/about-us/VisionAndMission';
import OurStory from '@/components/about-us/OurStory';
import CoreValues from '@/components/about-us/CoreValues';
import TeamIntroduction from '@/components/about-us/TeamIntroduction';

const AboutUs = () => {
  return (
    <div className="text-white bg-[#1a0730] relative flex flex-col items-center gap-y-16">
      <VisionAndMission />
      <OurStory />
      <CoreValues />
      <TeamIntroduction />      

      
      {/* Media and Awards */}
      <section className="space-y-6 text-center">
        <h2 className="text-4xl font-bold">In the Media & Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{ logo: AwardIcon, text: "Winner of the 2023 E-commerce Innovation Award" }].map((award, index) => (
            <div key={index} className="p-4 bg-white/10 rounded-lg shadow-md flex items-center space-x-4">
              <Image src={award.logo} alt="Award Icon" width={50} height={50} />
              <p className="text-purple-200">{award.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="text-center space-y-4 bg-[#3c1361] py-8 rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p>Join the growing list of businesses transforming their e-commerce operations with Purple-Box.</p>
        <div className="flex justify-center space-x-4">
          <a href="/services" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Explore Our Services</a>
          <a href="/schedule-demo" className="border border-purple-400 text-purple-400 px-4 py-2 rounded hover:bg-purple-400 hover:text-white">Schedule a Demo</a>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
