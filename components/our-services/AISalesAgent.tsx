import React from 'react'

const AISalesAgent = () => {
  return (
    <div className="wrapper space-y-6">
      <h3 className="font-gotham text-3xl font-bold text-center">AI Sales Agent: Drive More Sales, Effortlessly</h3>
      <p className="max-w-3xl mx-auto text-center">
        Automate your sales process with our AI Sales Agent. From generating leads to managing your sales funnel and closing deals, our AI-driven tools are designed to maximize your sales efficiency and outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Automatic Lead Generation", desc: "Identify and engage potential customers across multiple channels." },
          { title: "Funnel Management", desc: "Streamline your sales funnel with automated nurturing and follow-ups." },
          { title: "Deal Closing", desc: "Assist in closing deals by providing timely, personalized communication." },
        ].map((point, index) => (
          <div key={index} className="p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center space-y-2">
            <h4 className="text-xl font-semibold">{point.title}</h4>
            <p className="text-sm text-purple-200">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AISalesAgent