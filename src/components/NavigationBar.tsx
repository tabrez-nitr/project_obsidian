"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-choose-us" },
    { name: "Our Offerings", href: "/#offerings" },
    { name: "Restoration", href: "/#restoration-showcase" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/#contact" },
  ];

  // Scroll detection logic - ONLY affects the navbar now
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? "bg-[#faf9f6] opacity-95 shadow-sm py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer z-[101]">
            <h1 className={`text-xl  flex flex-col ${scrolled || isOpen ? "text-[#BCA88D]" : "text-white"}`}>
              <span className="flex items-center gap-2">
                <i className="ri-sofa-fill"></i>
                Urban <span className={`playwrite-in-cursive font-bold ${scrolled || isOpen ? "text-black" : "text-white"}`}>Sofa</span>
              </span>
              <span className={`text-[10px] font-normal mt-0.5 tracking-wide ${scrolled || isOpen ? "text-gray-500" : "text-white/80"}`}>
                Sector-110, Maharishi Aashram, Noida
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${scrolled ? "text-gray-700 hover:text-[#BCA88D]" : "text-white hover:text-[#BCA88D]"
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BCA88D] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden px-2 z-[101]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${scrolled || isOpen ? "text-gray-800" : "text-white"
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-3-line text-2xl"></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Lightweight Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#faf9f6] border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors 
                    text-gray-700 hover:bg-gray-100 active:bg-gray-200
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavigationBar;