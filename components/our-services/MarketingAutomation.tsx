import React from 'react'

// Icons Import
import { FaChartLine, FaRobot, FaEnvelope, FaCogs, FaComments } from 'react-icons/fa';

const MarketingAutomation = () => {
  return (
    <div className="wrapper space-y-6">
      <h3 className="font-gotham text-3xl font-bold text-center">Marketing Automation: Engage and Convert with Precision</h3>
      <p className="max-w-3xl mx-auto text-center">
        Automate your marketing efforts with AI-powered tools that handle everything from email campaigns to personalized WhatsApp messaging.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: FaEnvelope, title: "Automated Email Campaigns", desc: "Design and deploy email campaigns that are personalized and optimized." },
          { icon: FaComments, title: "WhatsApp Messaging", desc: "Send timely updates and promotional messages directly to customers." },
          { icon: FaCogs, title: "Cross-Channel Marketing", desc: "Manage campaigns across multiple channels from a single platform." },
        ].map((point, index) => (
          <div key={index} className="p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-2">
            <point.icon className="text-purple-400 mx-auto" size={36} />
            <h4 className="text-xl font-semibold">{point.title}</h4>
            <p className="text-sm text-purple-200">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketingAutomation