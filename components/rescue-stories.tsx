"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stories = [
  {
    id: 1,
    title: "Max's Journey",
    description:
      "Found abandoned on a highway, Max was malnourished and scared. After months of care and rehabilitation, he's now thriving in his forever home.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2023",
  },
  {
    id: 2,
    title: "Bella's Recovery",
    description:
      "Bella was rescued from an abusive situation. With patience and love, she learned to trust humans again and found a loving family.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 8, 2023",
  },
  {
    id: 3,
    title: "Rocky's Transformation",
    description:
      "Rocky was found with severe injuries after a street accident. After multiple surgeries and therapy, he's now running and playing like never before.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 22, 2023",
  },
  {
    id: 4,
    title: "Luna's Second Chance",
    description:
      "Abandoned as a puppy, Luna was found in a box near our shelter. Today, she's bringing joy to a family with two young children who adore her.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
  },
  {
    id: 5,
    title: "Charlie's New Beginning",
    description:
      "Charlie was surrendered when his elderly owner could no longer care for him. Now he's the beloved companion of a retired couple who take him everywhere.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 17, 2023",
  },
]

export function RescueStories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  const visibleStories = () => {
    // For mobile: show only active story
    // For tablet: show active and next story
    // For desktop: show active and 2 next stories
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % stories.length
      result.push(stories[index])
    }
    return result
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0%)` }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStories().map((story, index) => (
              <Card
                key={story.id}
                className={cn(
                  "overflow-hidden transition-all duration-500 h-full",
                  index === 0
                    ? "opacity-100 scale-100"
                    : "md:opacity-100 md:scale-100 opacity-0 scale-95 hidden md:block",
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{story.date}</div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {stories.map((_, index) => (
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
        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
