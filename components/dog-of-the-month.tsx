"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, PawPrintIcon as Paw, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function DogOfTheMonth() {
  return (
    <Card className="overflow-hidden max-w-3xl mx-auto border-amber-200 dark:border-amber-800">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-full min-h-[300px] overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full">
            <Image src="/images/dog-of-month.jpg" alt="Bruno - Dog of the Month" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 left-4"
          >
            <Badge className="bg-amber-500 hover:bg-amber-600">Dog of the Month</Badge>
          </motion.div>
        </div>
        <CardContent className="p-6 flex flex-col">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h3 className="text-2xl font-bold mb-2">Meet Bruno</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="h-4 w-4" />
              <span>3 years old</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>New Delhi Shelter</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 mb-4"
          >
            <Badge variant="outline" className="mr-2">
              Labrador Mix
            </Badge>
            <Badge variant="outline" className="mr-2">
              Friendly
            </Badge>
            <Badge variant="outline" className="mr-2">
              Trained
            </Badge>
            <Badge variant="outline">Good with kids</Badge>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-6 flex-grow"
          >
            Bruno was found wandering near a highway, hungry and scared. After three months of care, he's transformed
            into a playful, loving dog who adores belly rubs and playing fetch. He's great with children and gets along
            well with other dogs.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col xs:flex-row gap-3 mt-auto"
          >
            <Button asChild className="bg-amber-500 hover:bg-amber-600 group">
              <Link href="/adopt/bruno">
                <Paw className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Adopt Bruno
              </Link>
            </Button>
            <Button variant="outline" className="group">
              <Heart className="mr-2 h-4 w-4 text-rose-500 group-hover:scale-125 transition-transform" />
              Send Love
            </Button>
          </motion.div>
        </CardContent>
      </div>
      <CardFooter className="bg-amber-50 dark:bg-amber-950/20 p-4 text-sm text-muted-foreground">
        <p>Bruno has been waiting for a home for 45 days. Will you be his hero?</p>
      </CardFooter>
    </Card>
  )
}
