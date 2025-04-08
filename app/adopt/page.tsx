import { Filter, Search, PawPrintIcon as Paw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DogCard } from "@/components/dog-card"

export default function AdoptPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Dogs available for adoption"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Find Your Perfect Companion
              </h1>
              <p className="animate-fade-up text-lg md:text-xl opacity-90">
                Browse our available dogs and give one of these deserving souls a forever home.
              </p>
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

        {/* Filter Section */}
        <section className="py-8 bg-white dark:bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search dogs..." className="pl-10 w-full md:w-[300px]" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Breed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Breeds</SelectItem>
                    <SelectItem value="labrador">Labrador</SelectItem>
                    <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                    <SelectItem value="indie">Indie</SelectItem>
                    <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                    <SelectItem value="beagle">Beagle</SelectItem>
                    <SelectItem value="mixed">Mixed Breed</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="puppy">Puppy (0-1 year)</SelectItem>
                    <SelectItem value="young">Young (1-3 years)</SelectItem>
                    <SelectItem value="adult">Adult (3-7 years)</SelectItem>
                    <SelectItem value="senior">Senior (7+ years)</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="jaipur">Jaipur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Dogs Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <DogCard
                  key={index}
                  id={`dog-${index + 1}`}
                  name={
                    [
                      "Bruno",
                      "Luna",
                      "Max",
                      "Bella",
                      "Rocky",
                      "Daisy",
                      "Charlie",
                      "Lucy",
                      "Cooper",
                      "Sadie",
                      "Buddy",
                      "Molly",
                    ][index]
                  }
                  breed={
                    [
                      "Labrador Mix",
                      "German Shepherd",
                      "Indie",
                      "Golden Retriever",
                      "Beagle",
                      "Mixed Breed",
                      "Labrador",
                      "Indie",
                      "German Shepherd Mix",
                      "Golden Retriever",
                      "Beagle Mix",
                      "Indie",
                    ][index]
                  }
                  age={
                    [
                      "3 years",
                      "2 years",
                      "5 years",
                      "1 year",
                      "4 years",
                      "6 months",
                      "7 years",
                      "8 months",
                      "2 years",
                      "4 years",
                      "1 year",
                      "3 years",
                    ][index]
                  }
                  location={
                    [
                      "Delhi",
                      "Mumbai",
                      "Bangalore",
                      "Delhi",
                      "Jaipur",
                      "Mumbai",
                      "Delhi",
                      "Bangalore",
                      "Jaipur",
                      "Delhi",
                      "Mumbai",
                      "Bangalore",
                    ][index]
                  }
                  image={`/placeholder.svg?height=400&width=400`}
                  traits={
                    [
                      ["Friendly", "Trained", "Good with kids"],
                      ["Loyal", "Active", "Protective"],
                      ["Playful", "Affectionate", "Gentle"],
                      ["Energetic", "Smart", "Loving"],
                      ["Curious", "Friendly", "Calm"],
                      ["Playful", "Cuddly", "Adaptable"],
                      ["Loyal", "Gentle", "Trained"],
                      ["Energetic", "Affectionate", "Smart"],
                      ["Protective", "Friendly", "Active"],
                      ["Calm", "Loving", "Good with cats"],
                      ["Playful", "Smart", "Adaptable"],
                      ["Gentle", "Affectionate", "Loyal"],
                    ][index]
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Adoption Process */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Our Adoption Process</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We want to ensure our dogs find the perfect forever homes. Here's how our adoption process works.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Browse & Select",
                  description: "Browse our available dogs and find one that matches your lifestyle and preferences.",
                },
                {
                  step: 2,
                  title: "Submit Application",
                  description:
                    "Fill out our adoption application form with your details and information about your home.",
                },
                {
                  step: 3,
                  title: "Home Check",
                  description:
                    "Our team will conduct a friendly home check to ensure it's suitable for your chosen dog.",
                },
                {
                  step: 4,
                  title: "Welcome Home",
                  description: "Once approved, you can welcome your new family member home with our ongoing support.",
                },
              ].map((item) => (
                <Card key={item.step} className="border-amber-200 dark:border-amber-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-500 text-white font-bold size-10 flex items-center justify-center rounded-bl-lg">
                    {item.step}
                  </div>
                  <CardContent className="pt-10 pb-6 px-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Adoption FAQ */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Have questions about adopting? Find answers to common questions below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "What are the adoption fees?",
                  answer:
                    "Our adoption fees range from ₹2,000 to ₹5,000 depending on the dog's age, breed, and medical needs. This fee helps cover vaccinations, spaying/neutering, microchipping, and other medical care.",
                },
                {
                  question: "Can I adopt if I live in an apartment?",
                  answer:
                    "Yes! Many of our dogs thrive in apartments. We'll help match you with a dog whose energy level and size are suitable for apartment living.",
                },
                {
                  question: "Do you offer post-adoption support?",
                  answer:
                    "Absolutely. We provide ongoing support including training resources, medical advice, and behavioral guidance to ensure a smooth transition for both you and your new pet.",
                },
                {
                  question: "What if the adoption doesn't work out?",
                  answer:
                    "While we strive to make perfect matches, we understand that sometimes things don't work out. We accept returns within 30 days and will work with you to find a more suitable match if needed.",
                },
                {
                  question: "Are the dogs vaccinated and spayed/neutered?",
                  answer:
                    "Yes, all our dogs are up-to-date on vaccinations and are spayed/neutered before adoption unless there's a medical reason to delay the procedure.",
                },
                {
                  question: "How long does the adoption process take?",
                  answer:
                    "The process typically takes 1-2 weeks from application to bringing your dog home, depending on the home check scheduling and any additional references needed.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Adopt?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Browse our available dogs and start your adoption journey today.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-white/90">
              <Link href="#top">
                <Paw className="mr-2 h-5 w-5" />
                Find Your Perfect Match
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
