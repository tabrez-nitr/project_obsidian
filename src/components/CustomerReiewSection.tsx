"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// --- Data ---
const REVIEWS = [
  {
    id: "25f",
    name: "Rohan Sharma",
    location: "Sector 18, Noida",
    review: "Had my 5-seater sofa fabric changed. The collection of fabrics they showed was huge, and the fitting is perfect.",
    rating: 5,
  },
  {
    id: "26g",
    name: "Sanya Gupta",
    location: "Sector 62, Noida",
    review: "We called them for our office sofa repair. Very professional staff and they completed the work on the weekend without disturbing our work hours.",
    rating: 5,
  },
  {
    id: "27h",
    name: "Vikram Singh",
    location: "Noida Extension",
    review: "Ordered a custom L-shaped sofa for my new apartment. The build quality is solid and much cheaper than showroom prices.",
    rating: 5,
  },
  {
    id: "28i",
    name: "Meera Das",
    location: "Sector 76, Noida",
    review: "My sofa cushions had become very saggy. They refilled them with high-density foam, and now it feels firm and comfortable again.",
    rating: 4,
  },
  {
    id: "29j",
    name: "Arjun Pandey",
    location: "Sector 137, Paras Tierea",
    review: "Excellent craftsmanship! They repaired the broken leg of my wooden couch and polished it to match the original color exactly.",
    rating: 5,
  },
  {
    id: "30k",
    name: "Divya Chauhan",
    location: "Sector 50, Noida",
    review: "Very polite behavior and transparent pricing. No hidden charges for transportation. Highly satisfied with the dry cleaning service too.",
    rating: 5,
  },
  {
    id: "31l",
    name: "Rajeev Kumar",
    location: "Sector 104, Noida",
    review: "They turned my old leather recliner into a fabric one as per my request. It looks modern and stylish now. Great job!",
    rating: 5,
  },
  {
    id: "32m",
    name: "Sneha Reddy",
    location: "Jaypee Wishtown, Noida",
    review: "Service was good, but they took one extra day than promised. However, the final output was worth the wait. The stitching is flawless.",
    rating: 4,
  },
];

export default function SimpleCardCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  // Animation Variants
 const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Client Stories
          </h2>
          <div className="w-16 h-1 bg-black mx-auto" />
        </div>

        {/* Carousel Area */}
        <div className="relative flex items-center justify-center min-h-[350px]">
          
          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={prevStep}
            className="absolute -left-12 z-10 p-3 rounded-full hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            onClick={nextStep}
            className="absolute -right-12 z-10 p-3 rounded-full hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          {/* The Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-lg"
            >
              {/* THE CARD */}
              <div className="bg-[#f4eadd] border border-gray-200 rounded-2xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 relative">
                
                {/* Quote Icon */}
                <Quote className="absolute top-8 left-8 w-10 h-10 text-gray-200 fill-gray-100 rotate-180" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  
              

                  {/* Review Text */}
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-gray-900">
                    &quot;{REVIEWS[index].review}&quot;
                  </p>

                  {/* Divider */}
                  <div className="w-15 h-px bg-gray-300 mb-6"></div>
                   
                     {/* Stars (Black) */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <i 
                      key={i*2}
                      className="text-xl text-[#E9B63B] ri-star-fill"></i>
                    ))}
                  </div>
                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-lg">{REVIEWS[index].name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">
                      {REVIEWS[index].location}
                    </p>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Nav Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {REVIEWS.map((_, i) => (
            <button
              key={i*3}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#f5dfc4]" : "w-2 bg-gray-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}