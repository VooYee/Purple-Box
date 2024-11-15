import React from 'react'

const AIChatBots = () => {
  return (
    <div className="wrapper space-y-6">
      <h3 className="text-3xl font-gotham font-bold text-center">AI Chatbots: 24/7 Customer Support that Never Sleeps</h3>
      <p className="max-w-3xl mx-auto text-center">
        Provide exceptional customer service around the clock with our AI chatbots. Manage inquiries, resolve issues, and guide purchases seamlessly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "24/7 Availability", desc: "Ensure no customer query goes unanswered with round-the-clock support." },
          { title: "Customer Interaction Management", desc: "Handle multiple interactions simultaneously with instant responses." },
          { title: "Real-Time Insights", desc: "Gain insights into customer behavior through chatbot interactions." },
        ].map((point, index) => (
          <div key={index} className="wrapper p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-2">
            <h4 className="text-xl font-semibold">{point.title}</h4>
            <p className="text-sm text-purple-200">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIChatBots