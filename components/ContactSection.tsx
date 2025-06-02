"use client"

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { services } from '@/data/services'
import { MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins text-gray-900 dark:text-white">
            Get In <span className="text-cyan-500">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have a question or need a quote? Reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="space-y-8">
              <Card className="overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-[#00324D] text-white p-6 flex items-center justify-center md:w-1/4">
                      <MapPin size={36} className="text-yellow-400" />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sajojo Complex, Zengeza 5<br />
                        Chitungwiza, Zimbabwe
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-[#00324D] text-white p-6 flex items-center justify-center md:w-1/4">
                      <Phone size={36} className="text-orange-500" />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="tel:+263776464163" className="hover:text-cyan-500 transition-colors">0776 464 163</a><br />
                        <a href="tel:+263718640002" className="hover:text-cyan-500 transition-colors">071 864 0002</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-[#00324D] text-white p-6 flex items-center justify-center md:w-1/4">
                      <MessageSquare size={36} className="text-cyan-400" />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">WhatsApp</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <Link 
                          href="https://wa.me/263776464163" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          Click to chat on WhatsApp
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold mb-6 font-poppins text-gray-900 dark:text-white">Send Us a Message</h3>
                <form 
                  ref={ref}
                  className={cn(
                    "space-y-4 transition-all duration-1000 transform",
                    isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="border-gray-300 dark:border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300 dark:border-gray-700" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="07xx xxx xxx" className="border-gray-300 dark:border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select>
                        <SelectTrigger className="border-gray-300 dark:border-gray-700">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {services.map(service => (
                              <SelectItem key={service.id} value={service.title.toLowerCase()}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..." 
                      className="min-h-[120px] border-gray-300 dark:border-gray-700" 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}