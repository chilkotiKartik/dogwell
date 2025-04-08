"use client"

import { useState, useEffect } from "react"
import { PawPrintIcon as Paw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function AdoptButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "rounded-full shadow-lg transition-all duration-300 bg-amber-500 hover:bg-amber-600",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
      )}
    >
      <Link href="/adopt">
        <Paw className="mr-2 h-5 w-5" />
        Adopt
      </Link>
    </Button>
  )
}
