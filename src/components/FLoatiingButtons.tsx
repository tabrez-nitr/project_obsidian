"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] p-6 flex justify-between items-end pointer-events-none"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      {/* Phone Button (Left) - "Wiggle" Animation */}
      <motion.div
        className="pointer-events-auto"
        initial={{ y: 100, opacity: 0 }} // Start below screen
        animate={{ y: 0, opacity: 1 }}   // Slide up
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      >
        <motion.div
          // The "Wiggle" Animation (Like a ringing phone)
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3, // Wiggles every 3 seconds
            ease: "easeInOut",
          }}
        >
          <a href="tel:+918882349992" aria-label="Call Us">
            <button className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 active:scale-95 transition-transform duration-200">
              <i className="text-2xl text-[#5682B1] ri-phone-fill"></i>
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* WhatsApp Button (Right) - "Bounce" Entry */}
      <motion.div
        className="pointer-events-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
      >
        {/* Continuous "Hover" effect for WhatsApp */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a
            href="https://wa.me/917861092110?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <button className="w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center active:scale-95 transition-transform duration-200">
              <i className="text-3xl text-white ri-whatsapp-line"></i>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}