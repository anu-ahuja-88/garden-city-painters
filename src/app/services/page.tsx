import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ServicesGrid from "@/components/ServicesGrid"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "Painting & Plastering Services Christchurch | Garden City Painters",
  description: "Professional interior, exterior, and roof painting services across Christchurch. Trade-qualified experts delivering quality results for homes and businesses.",
}

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">Our <span className="text-red">Services</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              From a single room refresh to a full commercial complex, we bring the same level of care and craft to every job in the Canterbury region.
            </p>
          </div>
        </section>
        <ServicesGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
