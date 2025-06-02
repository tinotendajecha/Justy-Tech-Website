"use client"

import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

// Using service images as portfolio examples for demonstration
const portfolioItems = services.map(service => ({
  id: service.id,
  title: service.title,
  category: service.title.toLowerCase().split(' ')[0],
  imageSrc: service.imageSrc
}))

const categories = ['all', ...Array.from(new Set(portfolioItems.map(item => item.category)))]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins text-gray-900 dark:text-white">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Explore our latest work and creative solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={cn(
                  "text-sm capitalize",
                  selectedCategory === category 
                    ? "bg-cyan-500 hover:bg-cyan-600" 
                    : ""
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
            isInView ? "opacity-100" : "opacity-0",
            "transition-all duration-1000"
          )}
        >
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className={cn(
                    "cursor-pointer group overflow-hidden rounded-lg shadow-md transition-all duration-500 transform hover:-translate-y-1",
                    "transition-delay-" + (index % 4) * 150
                  )}
                  style={{ 
                    transitionDelay: `${(index % 8) * 100}ms`,
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)"
                  }}
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-200 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                <div className="relative w-full" style={{ height: '70vh' }}>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}