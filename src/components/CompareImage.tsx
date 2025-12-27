// src/components/CompareImage.tsx

import React from 'react'
import { Compare } from './ui/compare' // Ensure this path is correct
import before1 from '@/assets/Before-1.jpeg'
import after1 from '@/assets/After-1.jpeg'
import before2 from '@/assets/BeforeRepair.jpg'
import after2 from '@/assets/AfterRepair.jpg'
import { IconArrowsHorizontal } from "@tabler/icons-react"
import beforRepair2 from "@/assets/repairBefore2.png"
import afterRepair2 from "@/assets/repairAfter2.png"
import beforeRepair1 from '@/assets/repairBefore1.png'
import afterRepair1 from '@/assets/repairAfter1.png'

function CompareImage() {
  return (
    <div 
    id="restoration-showcase"
    className='flex flex-col items-center gap-8 px-5 py-20'>
      <h2 className='text-3xl font-bold text-center mb-4'>Restoration Showcase</h2>
     
      <div className="flex items-center gap-4">
        <div className="text-center">
            <p className='font-bold'>After</p>
            <div className="w-16 h-2 bg-gradient-to-r from-[#d8c1a2] to-yellow-100 rounded-full"></div>
        </div>
        <div className="p-3 rounded-full bg-gray-200">
            <IconArrowsHorizontal className="w-6 h-6 text-gray-600" />
        </div>
        <div className="text-center">
            <p className='font-bold'>Before</p>
            <div className="w-16 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
        </div>
      </div>
        
     
      <Compare
        // **FIX: Pass the entire image object, not just .src**
        firstImage={afterRepair1.src}
        secondImage={beforeRepair1.src}
        initialSliderPercentage={40}
        className="w-full h-[22.5rem] md:w-[35rem] md:h-[30rem] rounded-lg shadow-2xl"
        slideMode="hover"
      />
        <Compare
        // **FIX: Pass the entire image object, not just .src**
        firstImage={afterRepair2.src}
        secondImage={beforRepair2.src}
        initialSliderPercentage={40}
        className=" w-full h-[20.5rem] object-cover md:w-[35rem] md:h-[30rem] rounded-lg shadow-2xl"
        slideMode="hover"
      />
    </div>
  )
}

export default CompareImage