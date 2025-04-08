"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Heart } from "lucide-react"

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    experience: "",
    availability: "",
    interests: [] as string[],
    emergencyContact: "",
    emergencyPhone: "",
    heardFrom: "",
    agreeTerms: false,
  })

  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests: newInterests }
    })
  }

  const handleAgreeTerms = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon!",
      duration: 5000,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age *</Label>
            <Input
              id="age"
              name="age"
              type="number"
              min="12"
              max="100"
              value={formData.age}
              onChange={handleInputChange}
              required
              placeholder="Your age"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address *</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder="Your full address"
            className="min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Previous Experience with Dogs</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="Tell us about any previous experience you have with dogs"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Availability *</Label>
          <RadioGroup
            value={formData.availability}
            onValueChange={(value) => handleSelectChange("availability", value)}
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekdays" id="weekdays" />
              <Label htmlFor="weekdays">Weekdays</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekends" id="weekends" />
              <Label htmlFor="weekends">Weekends</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both">Both</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Areas of Interest (Select all that apply) *</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { id: "dog-walking", label: "Dog Walking" },
              { id: "kennel-care", label: "Kennel Care" },
              { id: "adoption-counseling", label: "Adoption Counseling" },
              { id: "events", label: "Events & Fundraising" },
              { id: "fostering", label: "Fostering" },
              { id: "social-media", label: "Social Media" },
              { id: "transport", label: "Transport" },
              { id: "admin", label: "Administrative Support" },
            ].map((interest) => (
              <div key={interest.id} className="flex items-center space-x-2">
                <Checkbox
                  id={interest.id}
                  checked={formData.interests.includes(interest.id)}
                  onCheckedChange={() => handleCheckboxChange(interest.id)}
                />
                <Label htmlFor={interest.id}>{interest.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
            <Input
              id="emergencyContact"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              required
              placeholder="Emergency contact name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
            <Input
              id="emergencyPhone"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              required
              placeholder="Emergency contact phone"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="heardFrom">How did you hear about us? *</Label>
          <Select value={formData.heardFrom} onValueChange={(value) => handleSelectChange("heardFrom", value)} required>
            <SelectTrigger id="heardFrom">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="friend">Friend or Family</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="news">News or Media</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox id="agreeTerms" checked={formData.agreeTerms} onCheckedChange={handleAgreeTerms} required />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="agreeTerms" className="text-sm font-medium leading-none">
              I agree to the volunteer terms and conditions *
            </Label>
            <p className="text-sm text-muted-foreground">
              By checking this box, you agree to our{" "}
              <a href="/volunteer-terms" className="text-amber-600 hover:underline">
                volunteer policies
              </a>{" "}
              and consent to a background check if required for your role.
            </p>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600"
        size="lg"
        disabled={!formData.agreeTerms}
      >
        <Heart className="mr-2 h-5 w-5" />
        Submit Application
      </Button>
    </form>
  )
}
