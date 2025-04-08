"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    quote:
      "Adopting Milo from Sahara Foundation was the best decision we ever made. The process was smooth, and the staff was incredibly supportive throughout.",
    image: "/placeholder.svg?height=100&width=100",
    dogName: "Milo",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    quote:
      "Luna has brought so much joy to our family. The foundation made sure she was the perfect match for us, and they were right!",
    image: "/placeholder.svg?height=100&width=100",
    dogName: "Luna",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore",
    quote:
      "The care and dedication of the Sahara team is evident in how well-adjusted Rocky was when we adopted him. He's been a blessing to our home.",
    image: "/placeholder.svg?height=100&width=100",
    dogName: "Rocky",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    quote:
      "We were hesitant about adoption, but the foundation guided us every step of the way. Now Bella is an irreplaceable part of our family.",
    image: "/placeholder.svg?height=100&width=100",
    dogName: "Bella",
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="min-w-full border-none shadow-none bg-transparent">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 bg-amber-500 rounded-full p-2">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                  <div className="size-20 rounded-full overflow-hidden border-4 border-amber-200 dark:border-amber-800">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                </div>
                <blockquote className="text-lg italic mb-6 max-w-2xl">"{testimonial.quote}"</blockquote>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}, proud parent of {testimonial.dogName}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "size-2 rounded-full p-0 mx-1",
              activeIndex === index
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700",
            )}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
