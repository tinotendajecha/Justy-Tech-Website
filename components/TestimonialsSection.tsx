"use client"

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'
import { Star, User } from 'lucide-react'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-[#00324D] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins">
            Our <span className="text-yellow-400">Clients</span> Love Us
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 mb-10">
            See what our clients have to say about their experience with Justy Tech
          </p>
        </div>
        
        <div 
          ref={ref} 
          className={cn(
            "transition-opacity duration-1000",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="h-full">
                    <Card className="border-0 h-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <CardContent className="pt-6 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                              {testimonial.imageSrc ? (
                                <Image
                                  src={testimonial.imageSrc}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full bg-cyan-500 text-white">
                                  <User size={20} />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-white">{testimonial.name}</p>
                              <p className="text-sm text-gray-300">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-100 flex-grow italic">{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/20 hover:bg-white/30 text-white" />
            <CarouselNext className="bg-white/20 hover:bg-white/30 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}