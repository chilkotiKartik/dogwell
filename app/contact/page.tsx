import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, PawPrintIcon as Paw, Heart } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Contact us"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Get in Touch
              </h1>
              <p className="animate-fade-up text-lg md:text-xl opacity-90">
                Have questions about adoption, volunteering, or donations? We're here to help.
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

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Reach out to us with any questions, concerns, or if you'd like to get
                  involved with our mission.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Rescue Lane
                        <br />
                        New Delhi, India 110001
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Numbers</h3>
                      <div className="text-muted-foreground">
                        <p>General Inquiries: +91 98765 43210</p>
                        <p>Adoption Hotline: +91 98765 43212</p>
                        <p className="flex items-center mt-1 text-rose-500 font-medium">
                          <Heart className="h-4 w-4 mr-1" />
                          Emergency Rescue: +91 98765 43211 (24/7)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Addresses</h3>
                      <div className="text-muted-foreground">
                        <p>General Inquiries: info@saharafoundation.org</p>
                        <p>Adoption: adopt@saharafoundation.org</p>
                        <p>Volunteer: volunteer@saharafoundation.org</p>
                        <p>Donations: donate@saharafoundation.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visiting Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sm mt-1 italic">
                          Adoption visits are by appointment only. Please call ahead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Our Shelter</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Come meet our dogs in person! We're located in a peaceful area with plenty of space for our rescues to
                play and exercise.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-amber-200 dark:border-amber-800 shadow-lg">
              <div className="h-[400px] w-full bg-gray-200 dark:bg-gray-800 relative">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map Would Be Here</p>
                    <p className="text-muted-foreground">123 Rescue Lane, New Delhi, India 110001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Directions</h3>
                    <p className="text-muted-foreground">
                      We're easily accessible by public transport. The nearest metro station is 1 km away, with regular
                      bus services stopping nearby.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Paw className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Shelter Tours</h3>
                    <p className="text-muted-foreground">
                      We offer guided tours of our facility every Saturday at 11 AM. Learn about our operations and meet
                      our wonderful dogs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Adoption Meetings</h3>
                    <p className="text-muted-foreground">
                      Interested in adopting? Schedule a one-on-one meeting with a dog you're interested in.
                      Appointments are required.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to common questions about contacting and visiting us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "Do I need an appointment to visit the shelter?",
                  answer:
                    "While we welcome visitors during our open hours, appointments are recommended, especially if you're interested in meeting specific dogs or discussing adoption.",
                },
                {
                  question: "Can I bring my own dog to meet a potential adoptee?",
                  answer:
                    "Yes, we encourage meet-and-greets between your current pets and potential adoptees. Please let us know in advance so we can arrange a suitable meeting space.",
                },
                {
                  question: "How quickly do you respond to inquiries?",
                  answer:
                    "We aim to respond to all inquiries within 24-48 hours. For urgent matters, please call our main number rather than emailing.",
                },
                {
                  question: "Is there parking available at the shelter?",
                  answer:
                    "Yes, we have a dedicated parking lot with ample space for visitors. Accessible parking spots are available near the entrance.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Whether you want to adopt, donate, or volunteer, we're here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20">
                <Link href="/adopt">
                  <Paw className="mr-2 h-5 w-5" />
                  Adopt a Dog
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-white/90">
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5 text-rose-500" />
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
