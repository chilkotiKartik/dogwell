"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, PawPrintIcon as Paw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/adopt", label: "Adopt" },
    { href: "/donate", label: "Donate" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-full bg-amber-500 p-1.5 transition-all duration-300 group-hover:bg-amber-600">
            <Paw className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110" />
          </div>
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-amber-500">
            Sahara Foundation
          </span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-amber-500 bg-amber-50 dark:bg-amber-950/20"
                    : "hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/20",
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <Button asChild variant="outline" className="hidden md:flex group">
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4 text-rose-500 group-hover:scale-125 transition-transform" />
                Donate Now
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <Button asChild className="hidden md:flex bg-amber-500 hover:bg-amber-600 group">
              <Link href="/adopt">
                <Paw className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Adopt a Dog
              </Link>
            </Button>
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2">
                    <Paw className="h-6 w-6 text-amber-500" />
                    <span className="text-xl font-bold">Sahara Foundation</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        pathname === item.href
                          ? "text-amber-500 bg-amber-50 dark:bg-amber-950/20"
                          : "hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/20",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-auto">
                  <Button asChild variant="outline" className="w-full group">
                    <Link href="/donate">
                      <Heart className="mr-2 h-4 w-4 text-rose-500 group-hover:scale-125 transition-transform" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 group">
                    <Link href="/adopt">
                      <Paw className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Adopt a Dog
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
