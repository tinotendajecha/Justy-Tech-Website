"use client"

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins text-gray-900 dark:text-white">
            About <span className="text-orange-500">Justy Tech</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isInView 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-10"
          )}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                  alt="Justy Tech Team" 
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00324D]/40 to-transparent"></div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-1000 delay-500",
            isInView 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-10"
          )}>
            <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At Justy Tech, we're passionate about bringing your creative visions to life. Founded with a mission to provide high-quality design and printing services, we've grown to become a trusted partner for businesses, schools, and individuals throughout Chitungwiza and beyond.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our team combines technical expertise with artistic talent to deliver exceptional results across our comprehensive range of services—from logo design and business cards to school ID cards and marketing materials.
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
              <p className="text-lg font-semibold italic text-gray-800 dark:text-gray-200">
                "Serving creatives, schools & businesses with design excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}