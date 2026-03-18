import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Get a Free Quote | Contact Garden City Painters Christchurch",
  description: "Need a quote for your painting or plastering project in Christchurch? Contact Garden City Painters today. Free, no-obligation quotes and professional advice.",
}

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">Get in <span className="text-red">Touch</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              Ready to start? Drop us a line below and we&apos;ll get your Christchurch project sorted with a free, no-obligation quote.
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
