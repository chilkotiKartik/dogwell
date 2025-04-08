"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stories = [
  {
    id: 1,
    name: "Ananya Patel",
    role: "Dog Walker & Kennel Assistant",
    since: "Volunteer since 2020",
    quote:
      "Volunteering at Sahara Foundation has been the most rewarding experience of my life. Seeing the transformation in these dogs from scared and withdrawn to happy and trusting is incredible. I've made lifelong friends - both human and canine!",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Foster Parent",
    since: "Volunteer since 2019",
    quote:
      "I've fostered 12 dogs so far, and while it's always bittersweet to say goodbye when they find their forever homes, knowing I played a part in their journey is worth it. The support from the Sahara team makes fostering a joy.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Event Coordinator",
    since: "Volunteer since 2021",
    quote:
      "Organizing adoption events and seeing dogs meet their new families is magical. I've developed leadership skills, made amazing connections, and most importantly, helped dozens of dogs find loving homes.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Social Media Volunteer",
    since: "Volunteer since 2022",
    quote:
      "Using my photography and social media skills to help dogs get adopted has been incredibly fulfilling. Every share, every like, and especially every adoption that comes from our posts makes all the effort worthwhile.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function VolunteerStories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {stories.map((story) => (
            <Card key={story.id} className="min-w-full border-none shadow-none bg-transparent">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 bg-amber-500 rounded-full p-2 z-10">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                    <div className="rounded-xl overflow-hidden border-4 border-amber-200 dark:border-amber-800">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={400}
                        height={400}
                        className="object-cover aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <blockquote className="text-lg italic mb-6">"{story.quote}"</blockquote>
                    <div className="mt-auto">
                      <div className="font-semibold text-xl">{story.name}</div>
                      <div className="text-amber-600 dark:text-amber-400 font-medium">{story.role}</div>
                      <div className="text-sm text-muted-foreground">{story.since}</div>
                    </div>
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
      </div>
    </div>
  )
}
