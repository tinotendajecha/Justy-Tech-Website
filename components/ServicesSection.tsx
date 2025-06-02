"use client"

import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesSection() {
  const [filter, setFilter] = useState('all')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins text-gray-900 dark:text-white">
            Our <span className="text-cyan-500">Services</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Comprehensive creative solutions for all your design and printing needs
          </p>
        </div>

        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}