'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  // @ts-ignore
  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4 } },
  };

  return (
    <section className="wrapper space-y-8">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="w-full space-y-4">
        {[
          [
            'What happens after the Freemium trial ends?',
            'You can continue using Purple-Box by upgrading to a paid plan. All data will be preserved.',
          ],
          ['Can I change my plan later?', 'Yes, you can upgrade or downgrade your plan anytime.'],
          ['How is billing handled?', 'Billing is monthly. You can cancel anytime before the next cycle.'],
          ['Are there any setup fees?', 'No, there are no setup fees for any of our plans.'],
          ['Is there a discount for annual subscriptions?', 'Yes, we offer a 10% discount on annual subscriptions.'],
        ].map(([question, answer], index) => (
          <div key={index} className="p-4 border border-purple-700 rounded-lg bg-[#2e0844]">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left"
            >
              <span>{question}</span>
              <span>{faqOpen === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {faqOpen === index && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                  className="mt-2 text-purple-200"
                >
                  {answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
