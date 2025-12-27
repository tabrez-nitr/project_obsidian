"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sofa, Wrench, Brush } from "lucide-react";
import sofa1 from "@/assets/h1.jpg";
import sofa2 from "@/assets/h2.jpg";
import sofa3 from "@/assets/h3.jpg";
import sofa4 from "@/assets/h4_.jpg";
import sofa5 from "@/assets/h5_.jpg"
import sofa6 from "@/assets/h6_.jpg"
import sofa7 from "@/assets/h7_.jpg"
import sofa8 from "@/assets/h8_.jpg"
/**
 * USAGE:
 * Imports remain the same...
 */

const SLIDES = [
  {
    id: 1,
    src: sofa1,
    tag: " 10+ Years Experience",
  },
  {
    id: 2,
    src: sofa7,
    tag: " Custom Sofa Designs",
  },
  {
    id: 3,
    src: sofa8,
    tag: " Premium Finishing",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Pause when page not visible
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        setPaused(true);
      } else {
        setPaused(false);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = window.setInterval(() => {
      if (!paused) {
        setIndex((i) => (i + 1) % SLIDES.length);
      }
    }, 5000);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  // manual dot click
  function goTo(i: number) {
    setIndex(i % SLIDES.length);
  }

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] overflow-hidden bg-black"
      aria-label="Hero: Sofa showcase"
    >
      {/* Background images (stacked, fade) */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0  transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={s.src}
            alt={`hero ${i + 1}`}
            fill
            className="object-cover  object-bottom"
            priority={i === 0}
          />
          
          {/* 1. GLOBAL DARK OVERLAY (Subtle) */}
          {/* Keeps text readable without making the image too dark */}
          <div className="absolute inset-0 bg-black/30" />

          {/* 2. CINEMATIC GRADIENT (The Effect You Wanted) */}
          {/* Adds depth to the sides, but lighter (from-black/60 instead of 90) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a120b]/75 via-transparent to-[#1a120b]/75" />
        </div>
      ))}

      {/* 3. SIDE BLURS (The Cinematic Look) */}
      {/* Sitting on top of images but below text. Subtle blur (1px). */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-15 pointer-events-none backdrop-blur-[1px]" />
      <div className="absolute inset-y-0 right-0 w-1/4 z-15 pointer-events-none backdrop-blur-[1px]" />

      {/* --- ORIGINAL CONTENT PRESERVED --- */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <div className="flex justify-start flex-wrap">
          <h1 className="text-3xl text-white/80 drop-shadow-lg leading-tight">
          The Heart of <br /> Your Home <br />
Restoring Warmth <br /> & Memories in <br /> Noida | Ghaziabad
          </h1>
         <div>
          <p className="mt-4 text-[15px] sm:text-base text-white/80 max-w-2xl">
            Because your family deserves the best <br /> seat in the house
          </p>
          </div>
          <br/>

          {/* CTA row (keeps fixed) */}

          <div className="mt-5 w-full  flex gap-3">
           
               <a
            href="https://wa.me/917861092110?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service"
            className="border-1 border-yellow-100/80 px-4 py-2 rounded-2xl text-yellow-100/80"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            >
              Book Now
            </a>
           
          </div>
       
        </div>
      </div>

      {/* Dots / indicators just above feature bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "scale-110" : "opacity-50"
            }`}
            style={{
              backgroundColor: i === index ? "#FFF0CE" : "#EBCB90",
              border: "none",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        ))}
      </div>
    </section>
  );
}