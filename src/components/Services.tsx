"use client";
import React, { useState } from "react";
import dryCleaning from "@/assets/dryCleaning.jpg";
import sofaCleaning from "@/assets/sofaCleaning.jpg"
import sofaRepair from "@/assets/h6.jpg";
import sofaRepair2 from "@/assets/sofaRepair.jpg"
import newSofa from "@/assets/h4.jpg";
import sofaPolish from "@/assets/woodensofa.jpg";
import sofaPolish2 from "@/assets/sofaPolish2.jpg";
import sofaPolish3 from "@/assets/sofaPolish3.jpg";
import fabric from "@/assets/sofafabric2.jpg";
import fabric2 from "@/assets/fabricService1.jpg"
import fabric3 from "@/assets/serviceFabric3.jpg"
import Image from "next/image";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: 1,
    image: sofaRepair2,
    icon: "ri-tools-fill",
    color: "blue",
    des: "Breathe new life into your favorite sofa.",
    title: "Sofa Repair",
    description: ["Fix frames & springs", "Replace foam", "Fresh upholstery"],
  },
  {
    id: 2,
    image: sofaRepair,
    icon: "ri-sofa-fill",
    color: "blue",
    des: "A sofa that matches your style and comfort preferences.",
    title: "New Sofa Making",
    description: ["Custom design", "Premium materials", "Durable construction"],
  },
  {
    id: 3,
    image: fabric3,
    icon: "ri-scissors-cut-fill",
    color: "blue",
    des: "Upgrade your sofa with premium fabrics and a perfect fit.",
    title: "Fabric Replacement",
    description: ["Premium fabrics", "Custom sizes", "Perfect fit"],
  },
  {
    id: 4,
    image: sofaCleaning,
    icon: "ri-nurse-fill",
    color: "blue",
    des: "Refresh your sofa with a gentle clean and fresh scent.",
    title: "Dry Cleaning",
    description: [
      "Dust-free freshness",
      "Stain & odor removal",
      "Gentle fabric care",
    ],
  },
  {
    id: 5,
    image: sofaPolish3,
    icon: "ri-paint-fill",
    color: "blue",
    des: "Revive the elegance, restore the beauty.",
    title: "Sofa Polish",
    description: [
      "Enhance shine",
      "Protect wood & finish",
      "Long-lasting look",
    ],
  },
];

function Services() {
  const [showAll, setShowAll] = useState(false);

  // Helper to toggle view
  const toggleView = () => {
    setShowAll(!showAll);
    if (showAll) {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-16 px-3 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl border-[#DEB887] font-semibold text-center text-gray-900 mb-2">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Every stitch, every polish, every detail — made to last for years to come.
        </p>

        <motion.div layout className="flex flex-wrap gap-8 px-2 justify-center">
          <AnimatePresence>
            {displayedServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  layout: { duration: 0.4 },
                  opacity: { duration: 0.3 },
                }}
                className={`
                  rounded-2xl overflow-hidden hover:shadow-xl 
                  w-full sm:w-[300px] shadow-xl bg-white group
                `}
              >
                {/* Image Container */}
                <div className="h-56 w-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* --- INCREASED DARK OVERLAY (20%) --- */}
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-4 pl-4 relative">
                  <div
                    className={`
                      absolute -top-8 left-6 bg-white border-2 border-[#BCA88D]/200 
                      text-[#BCA88D] p-3 px-4 rounded-full shadow
                    `}
                  >
                    <i className={`${service.icon} text-xl`}></i>
                  </div>

                  <h3 className="text-xl font-mono font-semibold text-black/80 mt-4 flex items-center gap-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-[12px]">
                    {service.des}
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {service.description.map((item, index) => (
                      <li
                        key={`${service.id}-desc-${index}`} // Unique key fix here too
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <CheckCircle
                          className={`w-4 h-4 text-[#BCA88D]/500`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-7 text-center">
          <button
            onClick={toggleView}
            className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-amber-50"
          >
            {showAll ? "View Less" : "View More"}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;