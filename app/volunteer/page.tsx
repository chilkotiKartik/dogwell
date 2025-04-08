import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VolunteerForm } from "@/components/volunteer-form"
import { VolunteerStories } from "@/components/volunteer-stories"
import { Calendar, Clock, MapPin, Heart, PawPrintIcon as Paw, Users, Award } from "lucide-react"

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Volunteers with dogs"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Join Our Volunteer Team
              </h1>
              <p className="animate-fade-up text-lg md:text-xl opacity-90">
                Make a difference in the lives of dogs waiting for their forever homes. Volunteer your time and skills.
              </p>
              <div className="animate-fade-up flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                  <a href="#volunteer-form">Apply Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <a href="#opportunities">View Opportunities</a>
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

        {/* Why Volunteer */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Volunteer With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Volunteering with Sahara Foundation is a rewarding experience that makes a real difference in the lives
                of dogs and the people who adopt them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Heart className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Make a Difference</h3>
                    <p className="text-muted-foreground">
                      Directly impact the lives of dogs waiting for their forever homes. Your time and care helps them
                      heal and prepare for adoption.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Users className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Join a Community</h3>
                    <p className="text-muted-foreground">
                      Become part of a passionate community of animal lovers. Build friendships with people who share
                      your values and commitment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                      <Award className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Gain Experience</h3>
                    <p className="text-muted-foreground">
                      Develop new skills and gain valuable experience in animal care, event management, social media,
                      and more depending on your role.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section id="opportunities" className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Volunteer Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have a variety of roles to match your skills, interests, and availability. Choose your mission!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Dog Walker",
                  description:
                    "Take our shelter dogs for walks, providing them with exercise, fresh air, and socialization.",
                  commitment: "2-4 hours per week",
                  location: "On-site",
                  skills: ["Physical fitness", "Basic dog handling", "Reliability"],
                  icon: <Paw className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Kennel Assistant",
                  description:
                    "Help with daily care tasks including feeding, cleaning kennels, and providing enrichment activities.",
                  commitment: "4-6 hours per week",
                  location: "On-site",
                  skills: ["Physical stamina", "Attention to detail", "Compassion"],
                  icon: <Heart className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Adoption Counselor",
                  description: "Guide potential adopters through the process, helping them find their perfect match.",
                  commitment: "4-8 hours per week",
                  location: "On-site",
                  skills: ["Communication", "Customer service", "Dog knowledge"],
                  icon: <Users className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Event Volunteer",
                  description: "Help organize and staff adoption events, fundraisers, and community outreach programs.",
                  commitment: "As needed (weekends)",
                  location: "Various locations",
                  skills: ["Organization", "Enthusiasm", "Teamwork"],
                  icon: <Calendar className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Foster Parent",
                  description: "Provide temporary care for dogs in your home until they're ready for adoption.",
                  commitment: "2-8 weeks per dog",
                  location: "From home",
                  skills: ["Dog experience", "Patience", "Nurturing"],
                  icon: <Heart className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Social Media Volunteer",
                  description: "Help manage our social media presence, creating content and responding to inquiries.",
                  commitment: "2-5 hours per week",
                  location: "Remote",
                  skills: ["Social media savvy", "Writing", "Photography"],
                  icon: <Users className="h-6 w-6 text-amber-500" />,
                },
              ].map((role, index) => (
                <Card key={index} className="border-amber-200 dark:border-amber-800 overflow-hidden">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-4 flex items-center">
                    <div className="bg-white dark:bg-amber-800 rounded-full p-2 mr-3">{role.icon}</div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-amber-500" />
                        <span>{role.commitment}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium mb-2">Skills Needed:</div>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Stories */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Volunteer Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our amazing volunteers about their experiences and the impact they've made.
              </p>
            </div>

            <VolunteerStories />
          </div>
        </section>

        {/* Volunteer Form */}
        <section id="volunteer-form" className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to start your volunteer journey with Sahara Foundation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <VolunteerForm />
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
                Find answers to common questions about volunteering with Sahara Foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "Is there a minimum age requirement to volunteer?",
                  answer:
                    "Volunteers must be at least 16 years old to work independently. Youth aged 12-15 can volunteer with a parent or guardian present.",
                },
                {
                  question: "Do I need prior experience with dogs?",
                  answer:
                    "While experience is helpful for some roles, it's not required for all positions. We provide training for all volunteers based on their assigned tasks.",
                },
                {
                  question: "What is the minimum time commitment?",
                  answer:
                    "We ask for a minimum commitment of 4 hours per month for at least 3 months, but this varies by role. Event volunteers may have more flexible schedules.",
                },
                {
                  question: "Can I volunteer if I have allergies to dogs?",
                  answer:
                    "We have several roles that don't require direct contact with dogs, such as administrative support, social media management, and fundraising.",
                },
                {
                  question: "Is there an orientation process?",
                  answer:
                    "Yes, all volunteers attend a 2-hour orientation session followed by role-specific training. Orientations are held twice monthly.",
                },
                {
                  question: "Can I bring my own dog while volunteering?",
                  answer:
                    "For most on-site roles, personal pets cannot accompany volunteers. However, there are specific events where well-behaved personal dogs may be welcome.",
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
              Join our team of dedicated volunteers and help us give these dogs the love and care they deserve.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-white/90">
              <a href="#volunteer-form">
                <Heart className="mr-2 h-5 w-5 text-rose-500" />
                Apply Now
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
