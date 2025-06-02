"use client"

import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DivideIcon as LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Service } from '@/types'
import { DynamicIcon } from '@/components/DynamicIcon'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <div 
      ref={ref}
      className={cn(
        "transform transition-all duration-700",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12",
        `transition-delay-${(index % 5) * 100}`
      )}
    >
      <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
        <div className="relative h-40 overflow-hidden">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 right-3 bg-yellow-400 p-2 rounded-full text-gray-900">
            <DynamicIcon name={service.icon} size={20} />
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-poppins text-xl text-gray-800 dark:text-white group-hover:text-orange-500 dark:group-hover:text-cyan-400 transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}