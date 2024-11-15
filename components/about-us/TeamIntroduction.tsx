// Library Import
import React from 'react'
import Image from 'next/image'

// Asset Import
import TempImg from '@/public/Purple-Box-Logo.png'

// Icon Import
import { FaLinkedin } from 'react-icons/fa';

const TeamIntroduction = () => {
  return (
    <div className="wrapper space-y-6">
        <h2 className="text-4xl font-bold text-center font-gotham">Meet Our Team</h2>
        <div className="flex justify-center gap-8">
          {[{ name: "John Doe", title: "CEO", bio: "Expert in AI development and e-commerce innovation." },
            { name: "John Doe", title: "CEO", bio: "Expert in AI development and e-commerce innovation." },
            { name: "John Doe", title: "CEO", bio: "Expert in AI development and e-commerce innovation." }
          ].map((member, index) => (
            <div key={index} className="text-center space-y-3 rounded-lg border-2 border-purple-500 bg-purple-700 p-4">
              <Image src={TempImg} alt={member.name} className="rounded-full mx-auto" width={100} height={100} />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-200">{member.title}</p>
              <p className="text-sm">{member.bio}</p>
              <a href="#" className="text-purple-400 mt-4 hover:text-purple-500"><FaLinkedin size={20} /></a>
            </div>
          ))}
        </div>
      </div>
  )
}

export default TeamIntroduction