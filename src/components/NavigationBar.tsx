"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // UPDATED: Added 'Blog' and changed links to use '/' so they work from the Blog page
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-choose-us" },
    { name: "Our Offerings", href: "/#offerings" },
    { name: "Restoration", href: "/#restoration-showcase" },
    { name: "Blog", href: "/blogs" }, // <--- Added Blog Here
    { name: "Contact", href: "/#contact" },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Conversion tracking
  const gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (url) {
        window.location.href = url
      }
    }

    window.gtag?.("event", "conversion", {
      send_to: "AW-17487093185/a9KWCObAqogbEMG7v5JB",
      value: 15000.0,
      currency: "INR",
      event_callback: callback,
    })

    return false
  }

  return (
    <div>
      {/* Phone Button */}
      <div className="fixed bottom-5 md:left-15 md:bottom-10 left-5 z-[100]">
        <div className="relative w-14 h-14">
          {/* Ripple Effects */}
          <span
            className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full smooth-ripple"
            style={{ borderColor: "#42A5F5", animationDelay: "0.4s" }}
          ></span>
          <span
            className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full smooth-ripple"
            style={{ borderColor: "#42A5F5", animationDelay: "0.6s" }}
          ></span>
          <span
            className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full smooth-ripple"
            style={{ borderColor: "#42A5F5", animationDelay: "1.0s" }}
          ></span>

          {/* Phone button */}
          <a href="tel:+919058304133">
            <button className="relative w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
              <i className="text-2xl text-[#5682B1] ri-phone-fill"></i>
            </button>
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919058304133?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-14 h-14 rounded-full bg-[#25D366] bottom-5 right-5 md:right-15 md:bottom-10 z-50 fixed">
          <i className="text-4xl px-1 text-white ri-whatsapp-line"></i>
        </button>
      </a>

      {/* Navbar */}
      <nav
        className={`fixed  top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "bg-[#faf9f6]  shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <h1 className={`text-xl  ${scrolled ? "text-[#BCA88D]" : "text-white/80"}`}>
                <i className="ri-sofa-fill"></i> Metro <span className={`text-xl playwrite-in-cursive ${scrolled ? "text-black" : "text-white/80"}`}>Sofa</span>
                <br />
                <p className={`text-black/80 text-[10px] ${scrolled ? "text-[#647FBC]" : "text-white/80"}`}>
                 Sector-110, Maharishi Aashram, Noida
                </p>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-8">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    scrolled ? "text-slate-600 hover:text-blue-500" : "text-white hover:text-yellow-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle Button */}
           <div className="lg:hidden px-2">
              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                <i className="ri-menu-3-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* --- NEW SIDEBAR DESIGN --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar Panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="fixed top-0 left-0 w-[85%] max-w-sm h-screen bg-[#faf9f6] z-50 flex flex-col shadow-2xl"
              >
                {/* Header Section */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
                  <div>
                    <h2 className="text-xl font-bold text-[#BCA88D]">
                      <i className="ri-sofa-fill mr-2"></i>
                      Metro <span className="text-black playwrite-in-cursive">Sofa</span>
                    </h2>
                    <p className="text-xs text-gray-500 mt-1 pl-1">Premium Repair Services</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors 
                          
                            text-amber-800 border border-amber-50
                           
                        `}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Actions */}
                <div className="p-6 bg-white border-t border-gray-200 space-y-3">
                  <a
                    href="tel:+917861092110"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl  text-blue-400 border-blue-400 border font-medium hover:bg-[#a89274] transition-colors shadow-md shadow-amber-900/10"
                  >
                    <i className="ri-phone-fill"></i>
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/917861092110?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#25D366] text-[#1f7a3d] font-medium hover:bg-[#eafaf0] transition-colors"
                  >
                    <i className="ri-whatsapp-line text-lg"></i>
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default NavigationBar