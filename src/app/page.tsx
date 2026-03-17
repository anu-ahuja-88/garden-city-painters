import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import TrustBar from "@/components/TrustBar"
import ServicesGrid from "@/components/ServicesGrid"
import WhyChooseUs from "@/components/WhyChooseUs"
import AboutSection from "@/components/AboutSection"
import Testimonials from "@/components/Testimonials"
import CertBadgeBar from "@/components/CertBadgeBar"
import CtaBanner from "@/components/CtaBanner"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <WhyChooseUs />
        <AboutSection />
        <Testimonials />
        <CertBadgeBar />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
