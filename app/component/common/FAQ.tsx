"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes your service unique?",
    answer:
      "Our service stands out through its innovative approach, combining cutting-edge technology with personalized solutions. We focus on delivering exceptional value while maintaining the highest standards of quality and customer satisfaction.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple! Just sign up for an account, complete your profile, and you'll have immediate access to all our features. Our intuitive onboarding process guides you through each step.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Our payment system is secure and encrypted, ensuring your financial information remains protected at all times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. We believe in flexibility and transparency, so there are no hidden fees or cancellation charges.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or concerns.",
  },
];

const FAQAccordion: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-8">
        <MessageCircleQuestion className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold text-black">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden" // Removed hover effect
          >
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <span className="text-lg font-medium text-black">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-secondary" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4 border-primary border-t text-gray-600 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;