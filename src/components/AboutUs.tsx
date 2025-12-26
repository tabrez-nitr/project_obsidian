'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, BadgeDollarSign, Clock } from 'lucide-react'

const aboutPoints = [
  {
    title: '10+ Years Experience',
    icon: Award,
    description:
      'Over a decade of hands-on experience in sofa repair and restoration.',
  },
  {
    title: 'Warranty Assurance',
    icon: Clock,
    description:
      '3-year warranty on repairs and 5-year warranty on newly made sofas.',
  },
  {
    title: 'Trusted Service',
    icon: ShieldCheck,
    description:
      'Hundreds of homeowners trust us for quality furniture services.',
  },
  {
    title: 'Affordable Pricing',
    icon: BadgeDollarSign,
    description:
      'Premium workmanship delivered at honest and transparent prices.',
  },
]

export default function AboutUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full py-20 px-4 bg-[#faf9f6]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-semibold text-[#2b2b2b]">
            Why Choose Us
          </h1>
          <p className="mt-4 text-[#6b6b6b] max-w-xl mx-auto leading-relaxed">
            We help bring comfort and elegance back to your home with expert
            sofa repair and craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#eee]"
              >
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-[#f3ede4] text-[#b59b6a]">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-lg font-medium text-[#2b2b2b] mb-2">
                      {point.title}
                    </h2>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}