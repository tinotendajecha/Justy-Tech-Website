"use client"

import * as LucideIcons from 'lucide-react'

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export function DynamicIcon({ name, size = 24, className = "" }: DynamicIconProps) {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons.HelpCircle
  return <LucideIcon size={size} className={className} />
}