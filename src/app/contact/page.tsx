import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact Us | Garden City Painters",
  description: "Get a free quote for your painting project in Christchurch. Contact Garden City Painters today.",
}

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team today for a free, no-obligation quote.
            </p>
          </div>
        </section>

        {/* We use the ContactForm component directly as it already contains the form and contact details layout */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
