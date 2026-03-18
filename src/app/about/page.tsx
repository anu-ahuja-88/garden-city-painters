import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import WhyChooseUs from "@/components/WhyChooseUs"
import AboutSection from "@/components/AboutSection"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "Local Painters Christchurch | Our Story | Garden City Painters",
  description: "Garden City Painters are your local Christchurch experts. Trade-qualified Master Painters with over 15 years of experience. Learn more about our team and values.",
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">Our <span className="text-red">Story</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              For more than 15 years, we&apos;ve been the local choice for top-quality painting across the Christchurch region.
            </p>
          </div>
        </section>
        <AboutSection />
        <WhyChooseUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
