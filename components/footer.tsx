"use client"

import Link from "next/link"
import { Facebook, Instagram, PawPrintIcon as Paw, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={item}>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative overflow-hidden rounded-full bg-amber-300 p-1.5 transition-all duration-300 group-hover:bg-amber-200">
                <Paw className="h-5 w-5 text-amber-900 transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Sahara Foundation
              </span>
            </Link>
            <p className="text-sm opacity-80 mb-4">Rescuing, rehabilitating, and rehoming abandoned dogs since 2008.</p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-300 hover:text-white hover:bg-amber-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-300 hover:text-white hover:bg-amber-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-300 hover:text-white hover:bg-amber-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-300 hover:text-white hover:bg-amber-800 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-amber-300 transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/adopt" className="text-sm hover:text-amber-300 transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Adopt a Dog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm hover:text-amber-300 transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-sm hover:text-amber-300 transition-colors flex items-center group"
                >
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-amber-300 transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Blog & Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/virtual-kennel"
                  className="text-sm hover:text-amber-300 transition-colors flex items-center group"
                >
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Virtual Kennel
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-amber-300 transition-colors flex items-center group"
                >
                  <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1 h-1 bg-amber-300 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Rescue Lane</p>
              <p>New Delhi, India</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@saharafoundation.org</p>
            </address>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-white">Emergency Rescue</h4>
              <p className="text-sm">
                <span className="text-amber-300 font-bold">Hotline:</span> +91 98765 43211
              </p>
              <p className="text-sm">Available 24/7 for dog rescue emergencies</p>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="font-semibold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4 opacity-80">
              Subscribe to our newsletter for updates on our rescues and events.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-sm bg-amber-800 border border-amber-700 text-white placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 flex-1"
              />
              <Button className="bg-amber-500 hover:bg-amber-600">Subscribe</Button>
            </form>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-white">Certifications</h4>
              <div className="flex gap-3">
                <div className="bg-white/10 p-2 rounded-md">
                  <img src="/images/cert-1.png" alt="Animal Welfare Certification" className="h-8 w-auto" />
                </div>
                <div className="bg-white/10 p-2 rounded-md">
                  <img src="/images/cert-2.png" alt="NGO Certification" className="h-8 w-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Sahara Foundation. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-amber-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
