"use client"

import { useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ImpactCounterProps {
  number: number
  label: string
  icon?: ReactNode
  className?: string
}

export function ImpactCounter({ number, label, icon, className }: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentElement = document.getElementById(`counter-${label.replace(/\s+/g, "-").toLowerCase()}`)

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [label])

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const step = Math.ceil(number / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start > number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, number])

  return (
    <div
      id={`counter-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-amber-900/20 shadow-md border border-amber-100 dark:border-amber-800/30 transition-all duration-300 hover:shadow-lg hover:scale-105",
        className,
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">{count.toLocaleString()}</div>
      <div className="text-lg font-medium">{label}</div>
    </div>
  )
}
