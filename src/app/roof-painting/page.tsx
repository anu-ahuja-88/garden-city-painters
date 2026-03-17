import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import CtaBanner from "@/components/CtaBanner"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Professional Roof Painting Christchurch | Garden City Painters",
  description: "Specialist roof painting and restoration services in Christchurch. Protect and beautify your home with Garden City Painters.",
}

const benefits = [
  "Complete surface preparation",
  "Rust treatment and repairs",
  "High-quality roof coating systems",
  "UV resistant and weatherproof finishes",
  "Extended lifespan for your roof",
  "Enhanced curb appeal",
]

export default function RoofPaintingPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-red text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded mb-6">
                  Specialist Service
                </span>
                <h1 className="text-4xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                  Expert <span className="text-red">Roof</span> <br /> Painting
                </h1>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Your roof is your home&apos;s first line of defense. Our specialized roof painting 
                  services not only enhance the look of your property but provide long-lasting 
                  protection against Christchurch&apos;s harsh weather conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-red" />
                      <span className="text-sm font-medium">{b}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-block bg-red hover:bg-red-hover text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200 cursor-pointer shadow-lg"
                >
                  Book a Roof Inspection
                </a>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1632759162353-066e4a2e584a?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional Roof Painting Christchurch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-charcoal/5">
                  <p className="text-charcoal font-heading font-bold text-2xl">15+ Years</p>
                  <p className="text-charcoal/60 text-sm">Experience in Roof Restoration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">Our Process</h2>
            <p className="text-charcoal/60 text-lg mb-12">
              We follow a rigorous multi-step process to ensure a flawless and durable finish on every roof project.
            </p>
            <div className="space-y-12 text-left">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Cleaning & Moss Treatment</h3>
                  <p className="text-charcoal/60">We start with a thorough pressure wash and apply treatments to remove moss, lichen, and dirt.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Repairs & Priming</h3>
                  <p className="text-charcoal/60">Any surface issues, rust, or damage are repaired before applying a high-performance primer.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Multi-Coat Finish</h3>
                  <p className="text-charcoal/60">We apply premium roof-specific coatings designed for NZ conditions to provide a vibrant, lasting finish.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
