"use client"

import * as LucideIcons from "lucide-react"
import { LucideProps } from "lucide-react"
import { FC } from "react"

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export function DynamicIcon({ name, size = 24, className = "" }: DynamicIconProps) {
  const LucideIcon = (LucideIcons[name as keyof typeof LucideIcons] as FC<LucideProps>) || LucideIcons.HelpCircle
  return <LucideIcon size={size} className={className} />
}
