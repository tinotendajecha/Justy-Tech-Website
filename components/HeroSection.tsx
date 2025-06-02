"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#00324D] to-[#002033] text-white">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-56 h-56 rounded-full bg-[#29ABE2] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#FF7F27] blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#FFF200] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={cn(
          "transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
            <span className="block">Creative</span>
            <span className="text-[#FFF200]">Designing</span> & <span className="text-[#FF7F27]">Printing</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your one-stop shop for premium designs, printing, and branding solutions!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-[#FF7F27] hover:bg-[#ff9a55] text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
            >
              <Link href="#services">
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="bg-transparent border-2 border-[#29ABE2] text-white hover:bg-[#29ABE2]/20 text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
            >
              <Link href="#contact">
                Request a Quote
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ChevronDown className="h-8 w-8 text-white/80" />
          </Link>
        </div>
      </div>
    </section>
  )
}