import Link from "next/link"
import { Bike, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Bike className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                GS Cycling <span className="text-primary">Sri Lanka</span>
              </span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6 leading-relaxed">
              Discover the natural beauty of paradise with our cycling and hiking tours. Experience memories that last a
              lifetime across Sri Lanka.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Itinerary", "Activities", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-background/70 text-sm mb-4">Subscribe for travel tips and exclusive offers.</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} GS Cycling Sri Lanka. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
