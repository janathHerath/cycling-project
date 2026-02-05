"use client"

import { Star, ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    text: "An absolutely incredible experience! The cycling tour through Sri Lanka was perfectly organized and our guide was knowledgeable and friendly. Highly recommend!",
    verified: true,
  },
  {
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    text: "Best adventure holiday I've had. The combination of cycling, cultural sites, and wildlife was perfectly balanced. Can't wait to go back!",
    verified: true,
  },
  {
    name: "Emma Williams",
    rating: 5,
    date: "1 month ago",
    text: "Amazing hospitality and wonderful route planning. Every day brought new surprises. The team really cares about their guests' experience.",
    verified: true,
  },
  {
    name: "James Wilson",
    rating: 5,
    date: "2 months ago",
    text: "This was the highlight of my travels. Professional guides, comfortable accommodations, and breathtaking scenery. Absolutely brilliant!",
    verified: true,
  },
]

const googleReviewLink = "https://www.google.com/maps/place/GS+Cycling+Sri+Lanka" // Replace with actual Google Maps link

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What Our Guests Say</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Reviews from Happy Travelers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied travelers who have experienced our unforgettable cycling tours
          </p>

          <a href={googleReviewLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Reviews on Google
            </Button>
          </a>
        </div>

        {/* Review Stats */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">450+</div>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Positive Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                {review.verified && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    <MapPin className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Share Your Experience</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you've traveled with us, we'd love to hear about your experience. Leave a review on Google to help other adventurers discover Sri Lanka!
          </p>
          <a href={googleReviewLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Write a Review on Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
