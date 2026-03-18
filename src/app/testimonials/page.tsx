import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import CtaBanner from "@/components/CtaBanner"
import { Star } from "lucide-react"

export const metadata = {
  title: "Client Reviews & Testimonials | Garden City Painters Christchurch",
  description: "See what homeowners and businesses across Christchurch think of Garden City Painters. Professional, reliable, and top-quality painting services.",
}

export default function TestimonialsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">Client <span className="text-red">Reviews</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 font-body">
              We take pride in every finish. Here is what our Christchurch and Canterbury clients have to say about our work.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-red fill-red" />
                ))}
              </div>
              <span className="text-white font-bold">5.0 / 5.0</span>
              <span className="text-white/40">on Google Reviews</span>
            </div>
          </div>
        </section>
        
        <Testimonials />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <a 
              href="https://www.google.com/search?q=Garden+City+Painters+Christchurch+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal hover:text-red font-bold text-lg underline underline-offset-8 transition-colors"
            >
              View More Google Reviews
            </a>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
