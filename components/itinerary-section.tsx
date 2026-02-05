"use client"

import { useState } from "react"
import { MapPin, Calendar, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

const itinerary = [
  {
    day: 1,
    title: "Negombo",
    shortDescription:
      "Arrival at the airport. Transfer to hotel to relax after your flight or explore the bilingual culture of Negombo.",
    fullDescription: "On the day of your arrival, we will pick you up at the airport. Then you will be on the way to a hotel where you will be able to relax and rest after your long flight or visit bilingual culture of Negombo.",
    highlights: ["Airport pickup", "Hotel check-in", "Explore Negombo"],
    image: "/negombo-fishing-village-sri-lanka-beach-boats.jpg",
  },
  {
    day: 2,
    title: "Anuradhapura",
    shortDescription:
      "Visit the first kingdom with numerous monuments. UNESCO World Heritage Site established 377 BC - 1017 AD, known as a center of political power, culture and Buddhism.",
    fullDescription: "After breakfast, we will leave for our first destination Anuradhapura. This is our first kingdom where you will be able to visit a large number of monuments. The visit to Anuradhapura will in addition give you the opportunity to experience different landscapes, forests, and reservoirs constructed by Kings of the distant past.\n\nWe encourage you to explore this ancient capital of ours which is a UNESCO World Heritage Site with well preserved ruins and monuments. This kingdom was established in 377 BC to 1017 AD and it came to be known as a centre of political power, culture and Buddhism of the region.",
    highlights: ["UNESCO Heritage Site", "Ancient monuments", "Historic reservoirs"],
    image: "/anuradhapura-ancient-ruins-buddhist-stupa-sri-lank.jpg",
  },
  {
    day: 3,
    title: "Sigiriya",
    shortDescription:
      "Visit Lion Rock, a 200m high landmark transformed by King Kashyapa in the 5th century CE. Features elaborate gardens, water supply devices, and frescoes.",
    fullDescription: "This is a totally flat terrain where you will find paddy fields, canals, reservoirs and vast extents of countryside. Sigiriya is known as Lion Rock and happened to be one of the best-known land mark. It rises dramatically above the surrounding landscape and is 200m in height. The monument was transformed into its present state in the 5th century CE by King Kashyapa who built a royal palace at the summit of the rock, after he inherited the throne. The fortress became particularly enriched with elaborate gardens, water supply devices and frescoes show not only elaborate planning but also the artistic skills of the time.",
    highlights: ["Lion Rock fortress", "Ancient frescoes", "Royal gardens"],
    image: "/sigiriya-lion-rock-fortress-sri-lanka-ancient.jpg",
  },
  {
    day: 4,
    title: "Dambulla",
    shortDescription:
      "Experience Bullock Cart rides, village cooking, and visit the Golden Temple - a UNESCO site with five caves featuring Buddha statues and 2000sq meter paintings.",
    fullDescription: "The route to this destination crosses an area where you will enjoy the beauty of chena cultivations, forest and wildlife. You could seize the opportunity of Bullock Cart, walk through the chena and go through a cooking experience by preparing your own meal in a village house. This will in addition show what kind of life is led by local village farmers. The Dambulla Cave Temple also known as 'The Golden Temple of Dambulla' is UNESCO World Heritage Site situated atop a large granite outcrop, the temple consists of five main caves that date back to the first century BCE. Inside the caves, the visitors will find statues of the Buddha along with depictions of Hindu deities and vibrant wall paintings that cover over 2000sq meters.",
    highlights: ["Dambulla Cave Temple", "Village experience", "Cooking class"],
    image: "/dambulla-cave-temple-golden-buddha-sri-lanka.jpg",
  },
  {
    day: 5,
    title: "Polonnaruwa",
    shortDescription:
      "Cycle through forest reserves to see wildlife. Visit the ancient capital (11th-13th century) featuring Royal Palace, Gal Vihara rock temple, and Parakrama Samudra reservoir.",
    fullDescription: "We can cycle through the forest reserve areas and if you lucky enough you will be able to see wild boars, mongooses, peacocks, water monitors, land monitors, etc. Then you can have a clear impression of the proud history of Sri Lanka by two wheels. Polonnaruwa was an ancient capital city of Sri Lanka during the 11th century CE to 13th century CE, relocating the grandeur of the medieval Sri Lankan civilization. Highlights include: The royal palace and audience hall with detailed stone carvings, The 'Gal Vihara' a Rock Temple featuring four magnificent Buddha statues carved out of a single granite rock, The 'Parakrama Samudra' a vast man-made reservoir demonstrating advanced hydraulic engineering of the time, Numerous stupas, image houses and Hindu shrines reflecting the cultural and religious diversity in of the period.",
    highlights: ["Gal Vihara", "Royal Palace ruins", "Wildlife spotting"],
    image: "/polonnaruwa-ancient-ruins-buddha-statues-sri-lanka.jpg",
  },
  {
    day: 6,
    title: "Kandy",
    shortDescription:
      "Visit the Temple of the Tooth Relic, Royal Botanical Gardens, and experience the cultural significance of Sri Lanka's last kingdom - UNESCO World Heritage Site.",
    fullDescription: "The elevation is 500m MSL. Paddle by the side of reservoirs, canals, through the two national parks and experience the bio-diversity and types of spices in the wetzone area.\n\nKandy is a historic city located in the central highland area of Sri Lanka renowned for its cultural significance, scenic beauty and religious heritage. It was the last capital of the ancient kings era of Sri Lanka and now a UNESCO World Heritage Site.\n\nTemple of the Tooth Relic: 'Sri Dalada Maligawa' is the sacred Buddhist temple that houses a tooth relic of the Buddha. It's one of the most important pilgrimage sites of the Buddhist world.\n\nCultural Significance: The Esala perahera or the procession of July is the grand annual event featuring dancers, drummers and decorated elephants. It's one of the oldest and most vibrant Buddhist festivals of the world.\n\nRoyal Botanical Gardens: Are among the finest in Asia and a showcase of a wide range of flora.\n\nHilly Terrain and Climate: Surrounded by lush mountains and plantations, Kandy offers a cooler climate than the coastal regions and reflects both traditional Sri Lankan heritage and British colonial architecture making it a unique blend of the past and present.",
    highlights: ["Temple of Tooth Relic", "Botanical Gardens", "Esala Perahera Festival"],
    image: "/kandy-temple-of-tooth-sri-lanka-buddhist.jpg",
  },
  {
    day: 7,
    title: "Nuwara Eliya",
    shortDescription:
      "Explore 'Little England' at 1868m elevation. Visit Ramboda waterfall, tea factories, Gregory Lake, Victoria Park, and Lover's Leap waterfall.",
    fullDescription: "Often dubbed 'Little England', Nuwara Eliya is a charming hill station nestled in Sri Lanka's central Province. Perched at an elevation of 1868m, it offers a refreshing temperate climate, lush landscape and colonial-era architecture. The city is renowned for its tea plantations, scenic waterfalls and vibrant parks making it a popular destination for both local and international visitors.\n\nMust-visit attractions include:\n• Ramboda Waterfall\n• Tea factory visit with city tour\n• Gregory Lake\n• Victoria Park\n• Racecourse\n• Golf course\n• Queen's Cottage (President's house)\n• Horton Plains\n• Moon Plains\n\nLover's Leap is a 30m waterfall that, according to legend, was named after two lovers who leaped to their death from the top of the falls. The site offers panoramic views of the Nuwara Eliya town.",
    highlights: ["Tea factory tour", "Ramboda Falls", "Lover's Leap"],
    image: "/nuwara-eliya-tea-plantations-hill-station-sri-lank.jpg",
  },
  {
    day: 8,
    title: "Ella",
    shortDescription:
      "Downhill ride through stunning landscapes, hike Little Adam's Peak, explore the Ravana Story with its epic sites and scenic views.",
    fullDescription: "Day 8 is a downhill ride through some of the most stunning landscapes in Sri Lanka. Hike the iconic 'Little Adam's Peak' and explore the last stunning landscape in Ella Gap.\n\nYou will discover the epic Ravana Story and visit remarkable attractions including:\n• Nine Arches Bridge - iconic architectural marvel\n• Ravana Falls - spectacular waterfall\n• Ravana Zipline - thrilling adventure\n• Dowa Rock Temple - ancient Buddhist temple\n• Buddhist Monastery - spiritual site\n• Lipton's Seat - scenic viewpoint with panoramic vistas\n• Adisham Bungalow - colonial-era heritage property\n\nThis day combines natural beauty, adventure, cultural heritage and breathtaking views perfect for an unforgettable experience.",
    highlights: ["Little Adam's Peak hike", "Nine Arches Bridge", "Ravana Falls", "Scenic viewpoints"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    day: 9,
    title: "Udawalawe",
    shortDescription:
      "Cycle past Ravana area and visit 308 sq km national park. See elephants, deer, crocodiles, and 200+ bird species. Visit Elephant Transit Home.",
    fullDescription: "Cycling route across the Ravana related area, lush cultivation area, banana fields, and Udawalawe reservoir.\n\nThe National Park is spanning 308 sq. km. It's a premier destination for a large population of Sri Lankan elephants. Visitors may spot deer, water buffaloes, mongooses, crocodiles, jungle fowls and over 200 bird species.\n\nElephant Transit Center Home: This is a rehabilitation center for orphaned or injured elephant calves. It focuses on the rehabilitation of elephants before releasing them back into the wild. Visitors can observe feeding sessions at:\n• 09:00 AM\n• 12:00 Noon\n• 03:00 PM\n• 06:00 PM\n\nThe center operates on a minimal control policy to ensure the elephants' successful reintegration in their natural habitats.",
    highlights: ["Elephant safari", "Transit Home visit", "200+ bird species"],
    image: "/udawalawe-elephants-safari-sri-lanka-national-park.jpg",
  },
  {
    day: 10,
    title: "Yala",
    shortDescription:
      "Explore Sri Lanka's most visited national park - 979 sq km of diverse ecosystems including monsoon forests, grasslands, wetlands, and coastal areas.",
    fullDescription: "Yala is a premier safari destination in southern Sri Lanka. It is the largest wildlife sanctuary in the country, spanning 1,370 square kilometers. The national park is renowned for its high concentration of leopards, Sri Lankan elephants, wild water buffalo, bears, deer, and an incredible variety of bird species. The landscape includes monsoon forests, grasslands, lagoons, and coastal areas, offering diverse habitats for wildlife. Visitors can experience the pristine beauty of nature through jeep safaris that offer chances to spot rare and endangered species in their natural habitat.",
    highlights: ["Leopard spotting", "Bird watching", "Diverse ecosystems"],
    image: "/yala-national-park-leopard-safari-sri-lanka.jpg",
  },
  {
    day: 12,
    title: "Tangalle",
    shortDescription:
      "Tranquil coastal town with turtle watching at Rekawa, Mulkirigala Temple, brass works at Angulmaduwa, and Hummanaya Blowhole.",
    fullDescription: "Tangalle is a tranquil coastal town in southern Province of Sri Lanka known for its pristine beaches, rich bio-diversity and cultural heritage.\n\nTurtle Watching: The town is renowned as a nesting site for five species of marine turtles, including the endangered leatherback and hawksbill turtles. The turtle watch Rekawa programme offers guided night tours from April to July providing a unique opportunity to witness turtle laying eggs in their natural habitats.\n\nMulkirigala Raja Maha Viharaya: Situated approximately 13km from Tangalle, this ancient Buddhist temple complex finds itself atop a natural rock which is 205m in height. It comprises seven cave temples adorned with intricate frescoes and Buddha statues offering a glimpse into Sri Lanka's rich religious heritage.\n\nAdditional attractions include local brass works, the scenic Hummanaya Blowhole, and beautiful beaches perfect for relaxation and water activities.",
    highlights: ["Turtle watching", "Mulkirigala Temple", "Pristine beaches"],
    image: "/tangalle-beach-sri-lanka-turtle-watching-sunset.jpg",
  },
  {
    day: 14,
    title: "Galle",
    shortDescription:
      "Historic UNESCO World Heritage Site featuring Galle Fort built by Portuguese (1588), Dutch Reformed Church, lighthouse, and maritime museum.",
    fullDescription: "Galle is a historic city on Sri Lanka's southwestern coast offering a blend of charm, vibrant culture and natural beauty. Recognized as UNESCO World Heritage Site, Galle is renowned for its well-preserved Galle fort, bustling market and scenic beaches.\n\nGalle Fort: Originally built by the Portuguese in 1588 and later fortified by the Dutch in the 17th century, it stands as a testament to the island's colonial past. The fort's narrow streets are lined with colonial era buildings including:\n• Dutch Reformed Church\n• Galle Lighthouse\n• National Maritime Museum\n• Dutch Hospital\n• Police Barrack\n• Rampart with 14 Bastions\n\nEnjoy the panoramic views of the Indian Ocean and delve into the city's rich history.\n\nAdditional Attractions: Kottawa forest reserve with natural swimming pool and the scenic Unawatuna beach are perfect for relaxation and nature exploration.",
    highlights: ["Galle Fort", "Maritime Museum", "Unawatuna Beach"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ItinerarySection() {
  const [activeDay, setActiveDay] = useState(0)
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

  const handleImageClick = () => {
    setSelectedDestination(activeDay)
  }

  return (
    <section id="itinerary" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Tour Itinerary</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Your Journey Through Paradise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive tour that takes you through Sri Lanka's most remarkable destinations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {itinerary.map((item, index) => (
              <button
                key={item.day}
                onClick={() => setActiveDay(index)}
                className={cn(
                  "w-full text-left p-4 rounded-xl transition-all",
                  activeDay === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-muted border border-border",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                        activeDay === index ? "bg-primary-foreground text-primary" : "bg-primary/10 text-primary",
                      )}
                    >
                      {item.day}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p
                        className={cn(
                          "text-xs mt-0.5",
                          activeDay === index ? "text-primary-foreground/70" : "text-muted-foreground",
                        )}
                      >
                        Day {item.day}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", activeDay === index && "rotate-90")} />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
              <div className="relative aspect-video cursor-pointer group" onClick={handleImageClick}>
                <img
                  src={itinerary[activeDay].image || "/placeholder.svg"}
                  alt={itinerary[activeDay].title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="text-white text-center">
                    <p className="text-sm font-medium mb-2">Click to view details</p>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Day {itinerary[activeDay].day}</span>
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>{itinerary[activeDay].title}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{itinerary[activeDay].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">{itinerary[activeDay].shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary[activeDay].highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Description Modal */}
      {selectedDestination !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDestination(null)}>
          <div className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">{itinerary[selectedDestination].title}</h2>
              <button
                onClick={() => setSelectedDestination(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={itinerary[selectedDestination].image || "/placeholder.svg"}
                  alt={itinerary[selectedDestination].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {itinerary[selectedDestination].fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {itinerary[selectedDestination].highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
