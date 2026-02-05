import { Bike, Mountain, Users, MapPin } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Bike,
      title: "Cycling Tours",
      description: "Explore scenic routes through villages, tea plantations, and ancient cities on two wheels.",
    },
    {
      icon: Mountain,
      title: "Hiking Adventures",
      description: "Trek through national parks, waterfalls, and misty highlands with expert guides.",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Our experienced team knows every trail and will ensure your safety and comfort.",
    },
    {
      icon: MapPin,
      title: "Custom Tours",
      description: "We offer readymade and custom programs tailored to your interests and fitness level.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Experience Paradise on Two Wheels
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our people conduct tours (cycling and hiking) in many areas in the country with various companies.
              Experienced riders guide you all over the tour and deal with your needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We present readymade and custom made programmes including sun, sea, sand, swim, surfing, safari, rafting,
              diving, snorkeling, whale watching, turtle watching, history, culture, nature, leisure, and pleasure
              throughout your tours.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/cyclist-riding-through-sri-lanka-tea-plantation.jpg"
                    alt="Cycling through tea plantations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/sigiriya-lion-rock-sri-lanka-ancient-fortress.jpg"
                    alt="Sigiriya Lion Rock"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/wild-elephant-safari-sri-lanka-national-park.jpg"
                    alt="Wild elephants in Sri Lanka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/sri-lanka-beach-palm-trees-tropical-paradise.jpg"
                    alt="Beautiful Sri Lankan beach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
