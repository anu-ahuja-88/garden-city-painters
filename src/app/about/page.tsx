import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import WhyChooseUs from "@/components/WhyChooseUs"
import AboutSection from "@/components/AboutSection"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "About Us | Garden City Painters",
  description: "Learn about Garden City Painters, your local Christchurch painting specialists with over 15 years of experience.",
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">About Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Your trusted partner for high-quality painting and plastering in the Christchurch region.
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
