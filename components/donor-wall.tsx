"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Building, Users, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export function DonorWall() {
  const [filter, setFilter] = useState("all")

  const donors = {
    individual: [
      { name: "Priya Sharma", amount: "₹25,000", tier: "gold", date: "March 2023" },
      { name: "Rahul Verma", amount: "₹15,000", tier: "silver", date: "April 2023" },
      { name: "Ananya Patel", amount: "₹10,000", tier: "silver", date: "January 2023" },
      { name: "Vikram Singh", amount: "₹5,000", tier: "bronze", date: "May 2023" },
      { name: "Meera Kapoor", amount: "₹20,000", tier: "gold", date: "February 2023" },
      { name: "Arjun Kumar", amount: "₹7,500", tier: "bronze", date: "June 2023" },
      { name: "Neha Gupta", amount: "₹12,000", tier: "silver", date: "April 2023" },
      { name: "Raj Malhotra", amount: "₹30,000", tier: "platinum", date: "March 2023" },
    ],
    corporate: [
      { name: "TechSolutions India", amount: "₹1,00,000", tier: "platinum", date: "January 2023" },
      { name: "Green Earth Foundation", amount: "₹75,000", tier: "gold", date: "March 2023" },
      { name: "Paws & Claws Pet Store", amount: "₹50,000", tier: "gold", date: "February 2023" },
      { name: "Horizon Enterprises", amount: "₹25,000", tier: "silver", date: "April 2023" },
    ],
    monthly: [
      { name: "Sanjay Mehta", amount: "₹2,000/month", tier: "sustainer", date: "Since 2020" },
      { name: "Divya Sharma", amount: "₹1,500/month", tier: "sustainer", date: "Since 2021" },
      { name: "Karan Ahuja", amount: "₹1,000/month", tier: "sustainer", date: "Since 2022" },
      { name: "Pooja Reddy", amount: "₹3,000/month", tier: "champion", date: "Since 2019" },
      { name: "Amit Joshi", amount: "₹5,000/month", tier: "champion", date: "Since 2020" },
    ],
  }

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "platinum":
        return (
          <Badge className="bg-slate-300 hover:bg-slate-400 text-slate-900">
            <Trophy className="mr-1 h-3 w-3" />
            Platinum
          </Badge>
        )
      case "gold":
        return (
          <Badge className="bg-amber-300 hover:bg-amber-400 text-amber-900">
            <Trophy className="mr-1 h-3 w-3" />
            Gold
          </Badge>
        )
      case "silver":
        return <Badge className="bg-gray-300 hover:bg-gray-400 text-gray-900">Silver</Badge>
      case "bronze":
        return <Badge className="bg-amber-600 hover:bg-amber-700 text-white">Bronze</Badge>
      case "sustainer":
        return (
          <Badge className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800">
            <Heart className="mr-1 h-3 w-3" />
            Sustainer
          </Badge>
        )
      case "champion":
        return (
          <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800">
            <Heart className="mr-1 h-3 w-3" />
            Champion
          </Badge>
        )
      default:
        return <Badge>Supporter</Badge>
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="all" onValueChange={setFilter}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all" className="text-sm">
              <Users className="mr-2 h-4 w-4" />
              All Donors
            </TabsTrigger>
            <TabsTrigger value="individual" className="text-sm">
              <Heart className="mr-2 h-4 w-4" />
              Individual
            </TabsTrigger>
            <TabsTrigger value="corporate" className="text-sm">
              <Building className="mr-2 h-4 w-4" />
              Corporate
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-sm">
              <Heart className="mr-2 h-4 w-4" />
              Monthly
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...donors.individual, ...donors.corporate, ...donors.monthly].map((donor, index) => (
              <DonorCard key={index} donor={donor} getTierBadge={getTierBadge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="individual" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donors.individual.map((donor, index) => (
              <DonorCard key={index} donor={donor} getTierBadge={getTierBadge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="corporate" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donors.corporate.map((donor, index) => (
              <DonorCard key={index} donor={donor} getTierBadge={getTierBadge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donors.monthly.map((donor, index) => (
              <DonorCard key={index} donor={donor} getTierBadge={getTierBadge} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface DonorCardProps {
  donor: {
    name: string
    amount: string
    tier: string
    date: string
  }
  getTierBadge: (tier: string) => React.ReactNode
}

function DonorCard({ donor, getTierBadge }: DonorCardProps) {
  return (
    <Card
      className={cn(
        "border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-md",
        donor.tier === "platinum" && "border-slate-300 dark:border-slate-600",
        donor.tier === "gold" && "border-amber-300 dark:border-amber-600",
        donor.tier === "champion" && "border-purple-200 dark:border-purple-800",
      )}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold">{donor.name}</h3>
            <p className="text-sm text-muted-foreground">{donor.date}</p>
          </div>
          <div>{getTierBadge(donor.tier)}</div>
        </div>
        <div className="mt-2 font-medium text-amber-600 dark:text-amber-400">{donor.amount}</div>
      </CardContent>
    </Card>
  )
}
