import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, User, Heart, MessageCircle, PawPrintIcon as Paw } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Dog stories and articles"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Blog & Stories
              </h1>
              <p className="animate-fade-up text-lg md:text-xl opacity-90">
                Heartwarming rescue stories, adoption success tales, and helpful tips for dog owners.
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

        {/* Search and Filter */}
        <section className="py-8 bg-white dark:bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-[400px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10 w-full" />
              </div>
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all" className="text-xs sm:text-sm">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="rescue" className="text-xs sm:text-sm">
                    Rescue Stories
                  </TabsTrigger>
                  <TabsTrigger value="adoption" className="text-xs sm:text-sm">
                    Adoption
                  </TabsTrigger>
                  <TabsTrigger value="tips" className="text-xs sm:text-sm">
                    Dog Care Tips
                  </TabsTrigger>
                  <TabsTrigger value="events" className="text-xs sm:text-sm">
                    Events
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=1200" alt="Featured post" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>Dr. Arjun Kapoor</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold">The Journey of 100 Rescues: Celebrating Our Milestone</h2>
                <p className="text-muted-foreground">
                  This month marks an incredible milestone for Sahara Foundation as we celebrate our 100th successful
                  rescue and adoption. Join us as we look back at some of the most memorable stories and the impact
                  they've had on both the dogs and their new families.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Rescue</Badge>
                  <Badge variant="outline">Milestone</Badge>
                  <Badge variant="outline">Success Stories</Badge>
                </div>
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                  <Link href="/blog/journey-of-100-rescues">Read Full Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "5 Essential Tips for First-Time Dog Adopters",
                  excerpt:
                    "Bringing home a rescue dog for the first time? Here are five essential tips to ensure a smooth transition for both you and your new furry family member.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "May 28, 2023",
                  author: "Meera Patel",
                  category: "Tips",
                  likes: 42,
                  comments: 8,
                },
                {
                  title: "Max's Miraculous Recovery: From Injured Stray to Beloved Pet",
                  excerpt:
                    "When we found Max, he was severely injured and afraid of humans. His journey to recovery and finding a loving home is nothing short of miraculous.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "May 15, 2023",
                  author: "Dr. Arjun Kapoor",
                  category: "Rescue",
                  likes: 87,
                  comments: 12,
                },
                {
                  title: "Summer Safety: Keeping Your Dog Cool and Comfortable",
                  excerpt:
                    "As temperatures rise, it's crucial to ensure your dog stays cool and comfortable. Learn about heat stroke prevention, hydration tips, and more.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "May 10, 2023",
                  author: "Dr. Priya Sharma",
                  category: "Tips",
                  likes: 35,
                  comments: 5,
                },
                {
                  title: "Upcoming Adoption Drive: Meet Your Perfect Match",
                  excerpt:
                    "Join us for our biggest adoption event of the year! We'll have over 30 dogs looking for their forever homes, plus fun activities for the whole family.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "May 5, 2023",
                  author: "Vikram Singh",
                  category: "Events",
                  likes: 28,
                  comments: 3,
                },
                {
                  title: "The Bond Between Children and Dogs: Benefits and Considerations",
                  excerpt:
                    "Growing up with a dog can be an enriching experience for children. Discover the benefits of this special bond and important considerations for families.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "April 28, 2023",
                  author: "Ananya Patel",
                  category: "Tips",
                  likes: 53,
                  comments: 9,
                },
                {
                  title: "Luna's Second Chance: From Abandonment to Adoration",
                  excerpt:
                    "Luna was abandoned during the pandemic when her family moved away. Her journey to healing and finding a new loving home will touch your heart.",
                  image: "/placeholder.svg?height=400&width=600",
                  date: "April 20, 2023",
                  author: "Rahul Verma",
                  category: "Rescue",
                  likes: 76,
                  comments: 14,
                },
              ].map((post, index) => (
                <Card key={index} className="overflow-hidden border-amber-200 dark:border-amber-800">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={
                          post.category === "Rescue"
                            ? "bg-rose-500"
                            : post.category === "Tips"
                              ? "bg-emerald-500"
                              : "bg-amber-500"
                        }
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 py-4 border-t border-amber-100 dark:border-amber-800/30 flex justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1 text-rose-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1 text-amber-500" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Rescue Stories",
                  description:
                    "Heartwarming tales of dogs rescued from difficult situations and given a second chance.",
                  image: "/placeholder.svg?height=300&width=400",
                  icon: <Heart className="h-6 w-6 text-rose-500" />,
                  color: "bg-rose-100 dark:bg-rose-900/20",
                  border: "border-rose-200 dark:border-rose-800/30",
                },
                {
                  title: "Adoption Success",
                  description:
                    "Celebrating the joy of dogs finding their forever homes and the families who love them.",
                  image: "/placeholder.svg?height=300&width=400",
                  icon: <Paw className="h-6 w-6 text-amber-500" />,
                  color: "bg-amber-100 dark:bg-amber-900/20",
                  border: "border-amber-200 dark:border-amber-800/30",
                },
                {
                  title: "Dog Care Tips",
                  description: "Expert advice on nutrition, training, health, and wellness for your canine companion.",
                  image: "/placeholder.svg?height=300&width=400",
                  icon: <Paw className="h-6 w-6 text-emerald-500" />,
                  color: "bg-emerald-100 dark:bg-emerald-900/20",
                  border: "border-emerald-200 dark:border-emerald-800/30",
                },
                {
                  title: "Events & News",
                  description: "Stay updated on our upcoming events, adoption drives, and foundation news.",
                  image: "/placeholder.svg?height=300&width=400",
                  icon: <Calendar className="h-6 w-6 text-blue-500" />,
                  color: "bg-blue-100 dark:bg-blue-900/20",
                  border: "border-blue-200 dark:border-blue-800/30",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden ${category.border} hover:shadow-md transition-all duration-300`}
                >
                  <div className="relative h-40">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 opacity-20 ${category.color}`}></div>
                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full p-2">
                      {category.icon}
                    </div>
                  </div>
                  <CardContent className={`p-6 ${category.color}`}>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        View Articles
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-8 opacity-90">
                Stay updated with our latest rescue stories, adoption success tales, and helpful tips for dog owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-amber-300"
                />
                <Button className="bg-white text-amber-500 hover:bg-white/90">Subscribe</Button>
              </div>
              <p className="mt-4 text-xs opacity-80">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
