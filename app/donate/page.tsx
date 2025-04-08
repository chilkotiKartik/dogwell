import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DonationForm } from "@/components/donation-form"
import { DonationImpactCalculator } from "@/components/donation-impact-calculator"
import { DonorWall } from "@/components/donor-wall"
import { Heart, PawPrintIcon as Paw, Gift, Calendar, Repeat, Trophy } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Dogs needing support"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Support Changes Lives
              </h1>
              <p className="animate-fade-up text-lg md:text-xl opacity-90">
                Every donation helps us rescue, rehabilitate, and rehome dogs in need. Your generosity makes a
                difference.
              </p>
              <div className="animate-fade-up flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                  <a href="#donate-now">Donate Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <Link href="#impact">See Your Impact</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Real-time Donation Counter */}
        <section className="py-12 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Fundraising Progress</h2>
                <p className="text-muted-foreground">
                  Help us reach our goal of ₹10,00,000 to expand our shelter and rescue operations.
                </p>
              </div>

              <div className="bg-white dark:bg-amber-900/20 rounded-xl p-6 shadow-md border border-amber-100 dark:border-amber-800/30">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-sm text-muted-foreground">Total Raised</div>
                    <div className="text-4xl font-bold text-amber-600">₹6,75,000</div>
                  </div>
                  <div className="text-center mb-4 md:mb-0">
                    <div className="text-sm text-muted-foreground">Goal</div>
                    <div className="text-2xl font-bold">₹10,00,000</div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-muted-foreground">Donors</div>
                    <div className="text-2xl font-bold">347</div>
                  </div>
                </div>

                <div className="w-full bg-amber-100 dark:bg-amber-800/30 rounded-full h-4 mb-4">
                  <div
                    className="bg-amber-500 h-4 rounded-full transition-all duration-1000 animate-pulse"
                    style={{ width: "67.5%" }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>67.5% Complete</span>
                  <span>₹3,25,000 to go</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section id="donate-now" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose how you'd like to support our mission. Every contribution, no matter the size, helps us save more
                lives.
              </p>
            </div>

            <Tabs defaultValue="one-time" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="one-time" className="text-sm">
                  <Heart className="mr-2 h-4 w-4" />
                  One-Time Gift
                </TabsTrigger>
                <TabsTrigger value="monthly" className="text-sm">
                  <Repeat className="mr-2 h-4 w-4" />
                  Monthly Support
                </TabsTrigger>
                <TabsTrigger value="sponsor" className="text-sm">
                  <Paw className="mr-2 h-4 w-4" />
                  Sponsor a Dog
                </TabsTrigger>
              </TabsList>
              <TabsContent value="one-time">
                <Card>
                  <CardContent className="pt-6">
                    <DonationForm type="one-time" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="monthly">
                <Card>
                  <CardContent className="pt-6">
                    <DonationForm type="monthly" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sponsor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">Sponsor a Dog</h3>
                        <p className="text-muted-foreground">
                          Your monthly sponsorship provides food, shelter, and medical care for a specific dog.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            name: "Bruno",
                            image: "/placeholder.svg?height=300&width=300",
                            story: "Senior dog with special needs",
                            amount: "₹2,000",
                          },
                          {
                            name: "Luna",
                            image: "/placeholder.svg?height=300&width=300",
                            story: "Recovering from surgery",
                            amount: "₹1,500",
                          },
                          {
                            name: "Max",
                            image: "/placeholder.svg?height=300&width=300",
                            story: "Puppy needing training",
                            amount: "₹1,000",
                          },
                        ].map((dog, index) => (
                          <Card key={index} className="overflow-hidden border-amber-200 dark:border-amber-800">
                            <div className="relative h-40">
                              <Image
                                src={dog.image || "/placeholder.svg"}
                                alt={dog.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="font-bold mb-1">{dog.name}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{dog.story}</p>
                              <div className="font-semibold text-amber-600">{dog.amount}/month</div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                              <Button className="w-full bg-amber-500 hover:bg-amber-600">
                                <Paw className="mr-2 h-4 w-4" />
                                Sponsor {dog.name}
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>

                      <div className="text-center mt-4">
                        <Link
                          href="/virtual-kennel"
                          className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                        >
                          View all dogs available for sponsorship →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Impact Calculator */}
        <section id="impact" className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Donation's Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how your contribution directly helps the dogs in our care.
              </p>
            </div>

            <DonationImpactCalculator />
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Other Ways to Help</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond monetary donations, there are many ways you can support our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Gift className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">In-Kind Donations</h3>
                    <p className="text-muted-foreground mb-4">
                      Donate food, blankets, toys, and other supplies that our dogs need.
                    </p>
                    <Link
                      href="/wishlist"
                      className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                    >
                      View our wishlist →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Calendar className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fundraising Events</h3>
                    <p className="text-muted-foreground mb-4">
                      Organize or participate in events that raise funds and awareness for our cause.
                    </p>
                    <Link
                      href="/events"
                      className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                    >
                      View upcoming events →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Trophy className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Corporate Partnerships</h3>
                    <p className="text-muted-foreground mb-4">
                      Partner with us through sponsorships, matching gifts, or volunteer days.
                    </p>
                    <Link
                      href="/partnerships"
                      className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                    >
                      Learn about partnerships →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donor Wall */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Generous Supporters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're grateful to these amazing individuals and organizations who support our mission.
              </p>
            </div>

            <DonorWall />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Our Donors Give</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from those who support our mission and the impact they've helped create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote:
                    "I donate monthly because I know every rupee goes directly to helping these beautiful animals. The transparency and dedication of the Sahara team is inspiring.",
                  name: "Priya Sharma",
                  title: "Monthly Donor since 2019",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "After adopting my dog from Sahara Foundation, I wanted to give back. Their work is transformative not just for the dogs, but for the families who adopt them.",
                  name: "Rahul Verma",
                  title: "Adopter & Donor",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <div className="mb-4">
                        <svg
                          className="h-8 w-8 text-amber-300"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                      <div className="flex items-center mt-auto">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Tax Benefits</h2>
                <p className="text-muted-foreground">
                  All donations to Sahara Foundation are eligible for tax benefits under Section 80G of the Income Tax
                  Act.
                </p>
              </div>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full">
                      <img src="/placeholder.svg?height=80&width=80" alt="Tax Benefit" className="h-16 w-16" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">80G Tax Exemption</h3>
                      <p className="text-muted-foreground mb-4">
                        Donors can claim a 50% deduction of the donation amount from their taxable income. We provide an
                        80G receipt for all donations.
                      </p>
                      <div className="text-sm">
                        <Badge variant="outline" className="mr-2">
                          Registration No: AAATS1234A
                        </Badge>
                        <Badge variant="outline">Valid until: Perpetuity</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Your donation today will help us continue our mission of rescuing and rehoming dogs in need.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-white/90">
              <a href="#donate-now">
                <Heart className="mr-2 h-5 w-5 text-rose-500" />
                Donate Now
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
