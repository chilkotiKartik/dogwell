import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, PawPrintIcon as Paw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImpactCounter } from "@/components/impact-counter"
import { RescueStories } from "@/components/rescue-stories"
import { RescueMap } from "@/components/rescue-map"
import { DogOfTheMonth } from "@/components/dog-of-the-month"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AnimatedPawPrints } from "@/components/animated-paw-prints"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-dogs.jpg"
              alt="Rescued dogs"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <AnimatedPawPrints />
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Every Paw Deserves a Home
              </h1>
              <p className="animate-fade-up animation-delay-100 text-lg md:text-xl opacity-90">
                We rescue, rehabilitate, and rehome abandoned dogs, giving them a second chance at a loving life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-200">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 group">
                  <Link href="/adopt">
                    <Paw className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Adopt a Dog
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 group"
                >
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5 text-rose-400 group-hover:scale-125 transition-transform" />
                    Make a Donation
                  </Link>
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

        {/* Impact Numbers */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImpactCounter number={1250} label="Dogs Rescued" icon={<Paw className="h-8 w-8 text-amber-500" />} />
              <ImpactCounter
                number={980}
                label="Successful Adoptions"
                icon={<Heart className="h-8 w-8 text-rose-500" />}
              />
              <ImpactCounter
                number={15}
                label="Years of Service"
                icon={<ArrowRight className="h-8 w-8 text-amber-500" />}
              />
            </div>
          </div>
        </section>

        {/* Rescue Stories */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-up">Rescue Stories</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
              Every dog has a story. Here are some of our most heartwarming rescue journeys.
            </p>
            <RescueStories />
          </div>
        </section>

        {/* Rescue Map */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-up">Where We Rescue</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
              Our rescue operations span across multiple locations. See where we've made a difference.
            </p>
            <div className="rounded-xl overflow-hidden border shadow-lg animate-fade-up animation-delay-200">
              <RescueMap />
            </div>
          </div>
        </section>

        {/* Dog of the Month */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-up">Dog of the Month</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
              Meet our special friend who's waiting for a forever home.
            </p>
            <div className="animate-fade-up animation-delay-200">
              <DogOfTheMonth />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-up">Happy Tails</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
              Stories from families who've welcomed our rescues into their homes.
            </p>
            <div className="animate-fade-up animation-delay-200">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-up">Ready to Make a Difference?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90 animate-fade-up animation-delay-100">
              Whether you adopt, donate, or volunteer, you're helping us give these dogs the love they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up animation-delay-200">
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20 group">
                <Link href="/adopt">
                  <Paw className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Adopt a Dog
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-white/90 group">
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5 text-rose-500 group-hover:scale-125 transition-transform" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
