// Library Import
import React from 'react';
import Image from 'next/image';

// Icon Import
import { FaLinkedin } from 'react-icons/fa';

// Assets Import
import FounderPhoto from '@/public/Purple-Box-Logo.png'; 
import AwardIcon from '@/public/Purple-Box-Logo.png'; 

// Components Import
import VisionAndMission from '@/components/about-us/VisionAndMission';

const AboutUs = () => {
  return (
    <div className="text-white bg-[#1a0730] relative flex flex-col items-center gap-y-16">
      <VisionAndMission />
      
      {/* Our Story */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-center">Our Story</h2>
        <div className="space-y-4">
          <p>
            Purple-Box was born out of a desire to simplify and enhance e-commerce operations for businesses of all sizes. Our founders, a group of passionate AI developers and e-commerce veterans, recognized a common challenge: the need for smart, automated solutions to handle customer acquisition and support in a digital-first world.
          </p>
          <p>
            Since our inception, we have grown from a small startup into a leading AI solutions provider, trusted by businesses across Europe and North America. With every step forward, we’ve expanded our capabilities, refined our technology, and continued to innovate to meet the evolving needs of our clients.
          </p>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Efficient", desc: "We believe in delivering solutions that maximize productivity and reduce overhead." },
            { title: "Scalable", desc: "Our technology is designed to grow with our clients effortlessly." },
            { title: "Innovative", desc: "Innovation is at the heart of what we do." },
            { title: "Empowering", desc: "We empower clients by providing tools that drive success." }
          ].map((value, index) => (
            <div key={index} className="p-4 border border-purple-700 rounded-lg text-center space-y-2">
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="text-sm text-purple-200">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Team Introduction */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ name: "John Doe", title: "CEO", bio: "Expert in AI development and e-commerce innovation." }].map((member, index) => (
            <div key={index} className="text-center space-y-3">
              <Image src={FounderPhoto} alt={member.name} className="rounded-full mx-auto" width={100} height={100} />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-200">{member.title}</p>
              <p className="text-sm">{member.bio}</p>
              <a href="#" className="text-purple-400 hover:text-purple-500"><FaLinkedin size={20} /></a>
            </div>
          ))}
        </div>
      </section>
      
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
