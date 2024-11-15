import React from 'react'

// Icons Import
import { FaCheckCircle } from 'react-icons/fa';

const Tiers = () => {
  return (
    <div className="wrapper space-y-8">
      <h2 className="text-3xl font-bold text-center font-gotham">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Freemium Plan */}
        <div className="p-6 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-4">
          <h3 className="text-xl font-semibold font-gotham">Freemium</h3>
          <p className="text-4xl font-bold">Free</p>
          <p className="text-purple-200">Explore our core features with limited access. Ideal for businesses wanting to try Purple-Box before committing.</p>
          <ul className="space-y-2">
            <li><FaCheckCircle className="inline text-purple-400" /> Limited AI Sales Agent</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Limited Marketing Automation</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Basic AI Chatbots</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Basic Data & Analytics</li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Start Free Trial</button>
        </div>
        {/* Basic Plan */}
        <div className="p-6 border border-purple-700 rounded-lg bg-[#3c1361] text-center space-y-4">
          <h3 className="text-xl font-semibold font-gotham">ChatBot Plan</h3>
          <p className="text-4xl font-bold">€29.99/month</p>
          <p className="text-purple-200">Unlock advanced features designed to enhance e-commerce operations for small to medium-sized businesses.</p>
          <ul className="space-y-2">
            <li><FaCheckCircle className="inline text-purple-400" /> Full AI Sales Agent</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Enhanced CRM Integration</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Advanced AI Chatbots</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Advanced Data & Analytics</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Basic Customer Support</li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Choose Basic</button>
        </div>
        {/* Premium Plan */}
        <div className="p-6 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-4">
          <h3 className="text-xl font-semibold font-gotham">All-in-One Premium Bundle</h3>
          <p className="text-4xl font-bold">€59.90/month</p>
          <p className="text-purple-200">Get the most out of Purple-Box with our All-in-One Premium Bundle. Enjoy full integration capabilities, advanced analytics, and priority support—all at a great value.</p>
          <ul className="space-y-2">
            <li><FaCheckCircle className="inline text-purple-400" /> WhatsApp Integration</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Email Integration</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Analytic CRM</li>
            <li><FaCheckCircle className="inline text-purple-400" /> Priority Support</li>
          </ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Upgrade to Premium Bundle</button>
        </div>
      </div>
    </div>
  )
}

export default Tiers