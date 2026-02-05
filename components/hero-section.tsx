import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/sri-lanka-lush-green-tea-plantations-mountains-cyc.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
          <span className="text-sm font-medium text-primary-foreground">🚴 Cycling & Hiking Tours</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          Discover <span className="text-accent">Sri Lanka</span> with Us
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          The natural beauty of paradise offering memories that last a lifetime. From the misty hills to exotic
          palm-fringed sandy beaches, experience Sri Lanka's evergreen forests untouched by civilization and diverse
          flora and fauna.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            asChild
          >
            <Link href="#itinerary">Explore Tours</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
            asChild
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {[
            { label: "Days", value: "10+" },
            { label: "Destinations", value: "15" },
            { label: "UNESCO Sites", value: "6" },
            { label: "Activities", value: "20+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  )
}
