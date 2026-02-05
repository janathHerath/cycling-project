import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ItinerarySection } from "@/components/itinerary-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ItinerarySection />
      <ActivitiesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
