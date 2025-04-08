"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Home, Stethoscope, Heart } from "lucide-react"

export function DonationImpactCalculator() {
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState(false)
  const [impacts, setImpacts] = useState({
    food: 0,
    shelter: 0,
    medical: 0,
    dogs: 0,
  })

  useEffect(() => {
    // Calculate impact based on amount
    setImpacts({
      food: Math.floor(amount / 100), // Days of food
      shelter: Math.floor(amount / 200), // Days of shelter
      medical: Math.floor(amount / 500), // Medical treatments
      dogs: Math.max(1, Math.floor(amount / 1000)), // Dogs helped
    })
  }, [amount])

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setCustomAmount(false)
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      setAmount(value)
    } else {
      setAmount(0)
    }
  }

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-amber-200 dark:border-amber-800">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Impact Calculator</h3>
                <p className="text-muted-foreground">See how your donation directly helps the dogs in our care.</p>
              </div>

              <div className="space-y-2">
                <Label>Select Amount</Label>
                <div className="grid grid-cols-3 gap-3">
                  {[500, 1000, 2000].map((value) => (
                    <Button
                      key={value}
                      type="button"
                      variant={amount === value && !customAmount ? "default" : "outline"}
                      className={amount === value && !customAmount ? "bg-amber-500 hover:bg-amber-600" : ""}
                      onClick={() => handleAmountSelect(value)}
                    >
                      ₹{value}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="impact-custom-amount">Custom Amount</Label>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">₹</span>
                  <Input
                    id="impact-custom-amount"
                    type="number"
                    min="100"
                    placeholder="Enter amount"
                    value={customAmount ? amount : ""}
                    onChange={handleCustomAmount}
                    onFocus={() => setCustomAmount(true)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Adjust Amount</Label>
                  <span className="text-lg font-semibold text-amber-600">₹{amount}</span>
                </div>
                <Slider
                  defaultValue={[1000]}
                  min={100}
                  max={10000}
                  step={100}
                  value={[amount]}
                  onValueChange={handleSliderChange}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹100</span>
                  <span>₹10,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Your Impact</h3>
                <p className="text-muted-foreground">Here's what your donation of ₹{amount} can provide:</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-800/50 p-2 rounded-full">
                    <Utensils className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold">{impacts.food} days of nutritious food</div>
                    <div className="text-sm text-muted-foreground">for a dog in our care</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-800/50 p-2 rounded-full">
                    <Home className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold">{impacts.shelter} days of shelter</div>
                    <div className="text-sm text-muted-foreground">including bedding and care</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-800/50 p-2 rounded-full">
                    <Stethoscope className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold">{impacts.medical} medical treatments</div>
                    <div className="text-sm text-muted-foreground">such as vaccinations or check-ups</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                  <div className="bg-rose-100 dark:bg-rose-800/50 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      You'll help {impacts.dogs} {impacts.dogs === 1 ? "dog" : "dogs"}
                    </div>
                    <div className="text-sm text-muted-foreground">on their journey to a forever home</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-amber-500 hover:bg-amber-600" size="lg" asChild>
                  <a href="#donate-now">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
