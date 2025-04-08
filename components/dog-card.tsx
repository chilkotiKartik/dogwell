"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, PawPrintIcon as Paw, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"

interface DogCardProps {
  id: string
  name: string
  breed: string
  age: string
  location: string
  image: string
  traits: string[]
}

export function DogCard({ id, name, breed, age, location, image, traits }: DogCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isSendingLove, setIsSendingLove] = useState(false)
  const [loveCount, setLoveCount] = useState(Math.floor(Math.random() * 50))
  const { toast } = useToast()

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const sendLove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsSendingLove(true)
    setLoveCount((prev) => prev + 1)

    toast({
      title: `You sent love to ${name}!`,
      description: `${name} feels your love and wags their tail happily.`,
      duration: 3000,
    })

    setTimeout(() => {
      setIsSendingLove(false)
    }, 1000)
  }

  return (
    <div className="perspective-1000 h-[400px] w-full cursor-pointer" onClick={handleFlip}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden border-amber-200 dark:border-amber-800 overflow-hidden">
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={image || "/images/dog-placeholder.jpg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                onClick={sendLove}
              >
                <Heart
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isSendingLove ? "text-rose-500 fill-rose-500 animate-heartbeat" : "text-rose-500",
                  )}
                />
                <span className="sr-only">Send love</span>
              </Button>
            </motion.div>
            {loveCount > 0 && (
              <div className="absolute bottom-4 right-4">
                <Badge variant="secondary" className="bg-white/80 dark:bg-gray-800/80">
                  <Heart className="h-3 w-3 text-rose-500 mr-1" />
                  {loveCount}
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Calendar className="h-3 w-3" />
              <span>{age}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {breed}
              </Badge>
              {traits.slice(0, 2).map((trait, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {trait}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 group">
              <Link href={`/adopt/${id}`}>
                <Paw className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Meet {name}
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 border-amber-200 dark:border-amber-800 overflow-hidden">
          <CardContent className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-3">{name}'s Story</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              {name} was rescued from {location} after being found{" "}
              {Math.random() > 0.5 ? "abandoned near a busy road" : "as a stray in a residential area"}.{" "}
              {Math.random() > 0.5
                ? `With proper care and love, ${name} has transformed into a happy, healthy dog ready for adoption.`
                : `Despite a rough start, ${name} is incredibly affectionate and eager to find a forever home.`}
            </p>

            <div className="space-y-3 mb-4">
              <h4 className="font-semibold">Personality Traits:</h4>
              <ul className="space-y-1">
                {traits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Paw className="h-3 w-3 text-amber-500" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild className="mt-auto bg-amber-500 hover:bg-amber-600 group">
              <Link href={`/adopt/${id}`}>
                <Paw className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Adopt {name}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
