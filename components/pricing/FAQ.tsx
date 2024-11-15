'use client'

// Library Import
import React, { useState } from 'react'

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index: any) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="wrapper space-y-8">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="w-full space-y-4">
          {[
            ["What happens after the Freemium trial ends?", "You can continue using Purple-Box by upgrading to a paid plan. All data will be preserved."],
            ["Can I change my plan later?", "Yes, you can upgrade or downgrade your plan anytime."],
            ["How is billing handled?", "Billing is monthly. You can cancel anytime before the next cycle."],
            ["Are there any setup fees?", "No, there are no setup fees for any of our plans."],
            ["Is there a discount for annual subscriptions?", "Yes, we offer a 10% discount on annual subscriptions."],
          ].map(([question, answer], index) => (
            <div key={index} className="p-4 border border-purple-700 rounded-lg bg-[#2e0844]">
              <button onClick={() => toggleFAQ(index)} className="flex justify-between w-full text-left">
                <span>{question}</span>
                <span>{faqOpen === index ? "-" : "+"}</span>
              </button>
              {faqOpen === index && <p className="mt-2 text-purple-200">{answer}</p>}
            </div>
          ))}
        </div>
      </section>
  )
}

export default FAQ