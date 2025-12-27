"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl shadow-sm transition-all duration-300 ${
        isOpen
          ? "bg-white  shadow-lg shadow-amber-900/5"
          : "bg-white border-gray-100 hover:border-amber-100 hover:shadow-md"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 md:p-6">
        <h3
          className={`text-lg font-semibold transition-colors duration-300 ${
            isOpen ? "text-amber-900" : "text-gray-800 group-hover:text-amber-800"
          }`}
        >
          {title}
        </h3>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
            isOpen ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500 group-hover:bg-amber-50"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </div>

      {/* Content (Smooth Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  // State to track which FAQ is open (only one at a time looks cleaner)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer at-home sofa repair?",
      answer: "Yes! We bring our workshop to your doorstep. Our team carries all necessary tools and materials to repair your sofa right in front of you, saving you transport costs and hassle.",
    },
    {
      question: "Can I choose my own fabric?",
      answer: "Absolutely. We carry a catalog of 300+ premium fabrics including Suede, Velvet, Leatherette, and Jute. You can touch and feel the samples at home before deciding.",
    },
    {
      question: "Can I customise a new sofa?",
      answer: "Yes, we specialize in custom furniture. Whether you need a specific L-shape size for a corner or a replica of a luxury design, we build it from scratch using solid wood.",
    },
    {
      question: "How long does a sofa repair take?",
      answer: "Most standard repairs (fabric change, foam refilling) are completed within 1-2 days. Complex structural repairs  might take 3-4 days.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase bg-amber-50 px-3 py-1 rounded-full">
            Common Queries
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Everything you need to know about our repair process, pricing, and customization options.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              content={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}