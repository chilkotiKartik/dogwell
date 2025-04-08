"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, PawPrintIcon as Paw, Users, Calendar, Award, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Team with rescued dogs"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Story</h1>
              <p className="animate-fade-up animation-delay-100 text-lg md:text-xl opacity-90">
                Founded in 2008, Sahara Foundation has been on a mission to rescue, rehabilitate, and rehome abandoned
                dogs across India.
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

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={item}>
                <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Heart className="size-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Vision</h3>
                      <p className="text-muted-foreground">
                        A world where every dog has a loving home and is treated with compassion and respect.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Paw className="size-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mission</h3>
                      <p className="text-muted-foreground">
                        To rescue, rehabilitate, and rehome abandoned and stray dogs, while educating communities about
                        responsible pet ownership.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Users className="size-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Values</h3>
                      <p className="text-muted-foreground">
                        Compassion, dedication, integrity, and respect guide everything we do for the animals in our
                        care.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div variants={item} className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="paw-card bg-amber-50 dark:bg-amber-900/20 rounded-3xl p-6 shadow-md"
                >
                  <Image
                    src="/images/about-dog-1.jpg"
                    alt="Rescued dog"
                    width={300}
                    height={300}
                    className="rounded-2xl mb-4"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="paw-card bg-amber-50 dark:bg-amber-900/20 rounded-3xl p-6 shadow-md mt-12"
                >
                  <Image
                    src="/images/about-dog-2.jpg"
                    alt="Rescued dog"
                    width={300}
                    height={300}
                    className="rounded-2xl mb-4"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Founder's Story</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 dark:bg-amber-800"></div>

              {/* Timeline items */}
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 size-8 rounded-full bg-amber-500"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="text-amber-500 font-semibold mb-2">2008</div>
                      <h3 className="text-xl font-bold mb-3">The Beginning</h3>
                      <p className="text-muted-foreground">
                        After rescuing a litter of puppies abandoned near her home, Priya Malhotra was inspired to
                        create a safe haven for stray and abandoned dogs.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/timeline-1.jpg"
                        alt="Founder with first rescue"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 size-8 rounded-full bg-amber-500"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last">
                      <div className="text-amber-500 font-semibold mb-2">2012</div>
                      <h3 className="text-xl font-bold mb-3">First Shelter</h3>
                      <p className="text-muted-foreground">
                        With the help of volunteers and donors, we opened our first official shelter in New Delhi,
                        providing care for up to 50 dogs at a time.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg md:order-first">
                      <Image
                        src="/images/timeline-2.jpg"
                        alt="First shelter opening"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 size-8 rounded-full bg-amber-500"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="text-amber-500 font-semibold mb-2">2018</div>
                      <h3 className="text-xl font-bold mb-3">Expanding Our Reach</h3>
                      <p className="text-muted-foreground">
                        We expanded to three more cities across India, establishing a network of shelters and foster
                        homes to help more dogs in need.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/timeline-3.jpg"
                        alt="New shelter location"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 size-8 rounded-full bg-amber-500"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last">
                      <div className="text-amber-500 font-semibold mb-2">Today</div>
                      <h3 className="text-xl font-bold mb-3">A Growing Family</h3>
                      <p className="text-muted-foreground">
                        Today, Sahara Foundation has rescued over 1,250 dogs, with a dedicated team of staff and
                        volunteers working tirelessly to give every dog a second chance.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg md:order-first">
                      <Image
                        src="/images/timeline-4.jpg"
                        alt="Team today"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Meet the dedicated individuals who make our mission possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Priya Malhotra",
                  role: "Founder & Director",
                  image: "/images/team-1.jpg",
                },
                {
                  name: "Dr. Arjun Kapoor",
                  role: "Head Veterinarian",
                  image: "/images/team-2.jpg",
                },
                {
                  name: "Meera Patel",
                  role: "Adoption Coordinator",
                  image: "/images/team-3.jpg",
                },
                {
                  name: "Vikram Singh",
                  role: "Rescue Operations",
                  image: "/images/team-4.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden border-amber-200 dark:border-amber-800">
                    <div className="aspect-square relative">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full">
                      <Award className="size-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Best Animal Welfare NGO</h3>
                    <p className="text-muted-foreground">
                      Recognized as the Best Animal Welfare NGO in Delhi for three consecutive years.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full">
                      <Calendar className="size-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">15 Years of Service</h3>
                    <p className="text-muted-foreground">
                      Celebrating 15 years of dedicated service to animal welfare and rescue.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full">
                      <MapPin className="size-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">5 Shelter Locations</h3>
                    <p className="text-muted-foreground">
                      Expanded to 5 shelter locations across India to help more dogs in need.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Whether you adopt, donate, or volunteer, you can help us make a difference in the lives of these deserving
              dogs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
