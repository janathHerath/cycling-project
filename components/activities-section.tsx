import { Waves, Camera, Ship, Mountain, Fish, Bike } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const activities = [
  {
    icon: Waves,
    title: "Water Sports",
    location: "Bentota",
    items: [
      "Jetski & Speed boat",
      "Banana, Donut & Sofa rides",
      "Water ski & Wake board",
      "Knee-board & Fly fish",
      "Windsurfing & Stand-up paddle boarding",
      "Snorkeling & Diving",
      "Kayaking & Canoeing",
      "Para motoring",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Camera,
    title: "Wildlife Safari",
    location: "Yala & Udawalawe",
    items: [
      "Elephant watching",
      "Leopard spotting",
      "Bird watching",
      "Crocodile viewing",
      "Deer & Buffalo",
      "200+ bird species",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Ship,
    title: "Marine Adventures",
    location: "Tangalle & Mirissa",
    items: ["Whale watching", "Turtle watching", "Snorkeling trips", "Beach surfing", "Boat tours", "Dolphin spotting"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Mountain,
    title: "Cultural Tours",
    location: "Various Locations",
    items: ["Temple visits", "Cooking classes", "Village walks", "Brass works", "Drum making", "Lac work crafts"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Fish,
    title: "Nature Experiences",
    location: "Hill Country",
    items: [
      "Tea factory tours",
      "Waterfall visits",
      "Botanical gardens",
      "Forest reserves",
      "Spice gardens",
      "Nature walks",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Bike,
    title: "Cycling Routes",
    location: "Across Sri Lanka",
    items: [
      "Village cycling",
      "Forest trails",
      "Reservoir routes",
      "Paddy field paths",
      "Coastal rides",
      "Mountain biking",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Activities & Experiences</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Adventures Await
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From thrilling water sports to peaceful nature walks, discover a world of experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Card
              key={activity.title}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{activity.title}</h3>
                      <p className="text-white/70 text-sm">{activity.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <ul className="grid grid-cols-2 gap-2">
                  {activity.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
