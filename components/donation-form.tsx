"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Heart } from "lucide-react"

interface DonationFormProps {
  type: "one-time" | "monthly"
}

export function DonationForm({ type }: DonationFormProps) {
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const { toast } = useToast()

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thank you for your donation!",
      description: `Your ${type === "monthly" ? "monthly" : "one-time"} donation of ₹${amount} has been processed.`,
      duration: 5000,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2">{type === "monthly" ? "Monthly Donation" : "One-Time Donation"}</h3>
          <p className="text-muted-foreground">
            {type === "monthly"
              ? "Your monthly support helps us plan for the future."
              : "Every contribution makes a difference."}
          </p>
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
          <Label htmlFor="custom-amount">Custom Amount</Label>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">₹</span>
            <Input
              id="custom-amount"
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

        <div className="space-y-2 pt-4">
          <Label>Payment Method</Label>
          <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=36" alt="Credit Card" className="h-6 w-auto" />
                Credit/Debit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=36" alt="UPI" className="h-6 w-auto" />
                UPI
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking" className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=36" alt="Net Banking" className="h-6 w-auto" />
                Net Banking
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            {type === "monthly" ? "Donate Monthly" : "Donate Now"}
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Your donation is secure and encrypted. You can cancel your monthly donation at any time.
          </p>
        </div>
      </div>
    </form>
  )
}
