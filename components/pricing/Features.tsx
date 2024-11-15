import React from 'react'

const Features = () => {
  return (
    <div className="wrapper space-y-8">
      <h2 className="text-3xl font-bold text-center font-gotham">Compare Our Plans</h2>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-purple-200 border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-purple-700">Features</th>
              <th className="p-4 border-b border-purple-700">Freemium</th>
              <th className="p-4 border-b border-purple-700">ChatBot Plan</th>
              <th className="p-4 border-b border-purple-700">Premium</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AI Sales Agent", "Limited", "Advanced", "Full Access"],
              ["CRM Integration", "-", "Enhanced", "Advanced"],
              ["Marketing Automation", "Email Only", "Multi-Channel", "WhatsApp & More"],
              ["AI Chatbots", "50 Queries/Month", "Unlimited", "24/7 Advanced"],
              ["Data & Analytics", "Basic", "Advanced", "Predictive Insights"],
              ["Customer Support", "-", "Basic", "Priority"],
            ].map(([feature, freemium, basic, premium], index) => (
              <tr key={index} className="border-b border-purple-700">
                <td className="p-4">{feature}</td>
                <td className="p-4 text-start">{freemium}</td>
                <td className="p-4 text-start">{basic}</td>
                <td className="p-4 text-start">{premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Features