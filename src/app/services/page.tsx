import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ServicesGrid from "@/components/ServicesGrid"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "Our Services | Garden City Painters",
  description: "Expert interior, exterior, and roof painting services in Christchurch and Canterbury.",
}

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional painting and plastering solutions for residential and commercial properties across Christchurch.
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
