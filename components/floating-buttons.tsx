"use client"

import { useState, useEffect } from "react"
import { Heart, PawPrintIcon as Paw, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showEmergency, setShowEmergency] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleEmergencyClick = () => {
    setShowEmergency(!showEmergency)
    if (!showEmergency) {
      toast({
        title: "Emergency Rescue Hotline",
        description: "Call +91 98765 43211 for immediate assistance",
        duration: 5000,
      })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="icon"
              className="rounded-full shadow-lg bg-red-500 hover:bg-red-600 animate-pulse"
              onClick={handleEmergencyClick}
            >
              <PhoneCall className="h-5 w-5 text-white" />
              <span className="sr-only">Emergency</span>
            </Button>
          </motion.div>
        )}

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button asChild size="lg" className="rounded-full shadow-lg bg-rose-500 hover:bg-rose-600 group">
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                Donate
              </Link>
            </Button>
          </motion.div>
        )}

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-full shadow-lg bg-amber-500 hover:bg-amber-600 group">
              <Link href="/adopt">
                <Paw className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Adopt
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
