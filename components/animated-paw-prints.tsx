"use client"

import { useEffect, useState } from "react"
import { PawPrintIcon as Paw } from "lucide-react"
import { motion } from "framer-motion"

export function AnimatedPawPrints() {
  const [pawPrints, setPawPrints] = useState<{ id: number; x: number; y: number; rotation: number }[]>([])

  useEffect(() => {
    const createPawPrint = () => {
      const id = Date.now()
      const x = Math.random() * 100 // percentage of screen width
      const y = Math.random() * 100 // percentage of screen height
      const rotation = Math.random() * 360 // random rotation

      setPawPrints((prev) => [...prev, { id, x, y, rotation }])

      // Remove paw print after animation
      setTimeout(() => {
        setPawPrints((prev) => prev.filter((paw) => paw.id !== id))
      }, 5000)
    }

    // Create initial paw prints
    for (let i = 0; i < 5; i++) {
      createPawPrint()
    }

    // Create new paw prints periodically
    const interval = setInterval(createPawPrint, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {pawPrints.map((paw) => (
        <motion.div
          key={paw.id}
          className="absolute text-white/30"
          style={{
            left: `${paw.x}%`,
            top: `${paw.y}%`,
            rotate: paw.rotation,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Paw className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  )
}
