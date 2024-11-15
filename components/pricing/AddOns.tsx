import React from 'react'

const AddOns = () => {
  return (
    <div className="wrapper space-y-8">
      <h2 className="text-3xl font-gotham font-bold text-center">Enhance Your Plan with Add-Ons</h2>
      <div className="flex justify-between w-full gap-4">
        {[
          { title: "WhatsApp Integration", price: "€15/month" },
          { title: "Email Integration", price: "€10/month" },
          { title: "Analytic CRM", price: "€20/month" },
          { title: "Priority Support", price: "€9.99/month" },
        ].map((addon, index) => (
          <div key={index} className="w-full p-4 border border-purple-700 rounded-lg bg-[#2e0844] text-center">
            <h4 className="text-xl font-semibold">{addon.title}</h4>
            <p className="text-purple-200">{addon.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddOns