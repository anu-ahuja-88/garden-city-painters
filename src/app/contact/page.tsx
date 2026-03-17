import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"

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

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Phone</p>
                      <a href="tel:0223515421" className="text-xl font-heading font-bold text-charcoal hover:text-red transition-colors">022 351 5421</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Email</p>
                      <a href="mailto:info@gardencitypainters.co.nz" className="text-xl font-heading font-bold text-charcoal hover:text-red transition-colors">info@gardencitypainters.co.nz</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Location</p>
                      <p className="text-xl font-heading font-bold text-charcoal">Christchurch, Canterbury</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-red" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Follow Us</p>
                      <a href="https://www.facebook.com/Garden-City-Painters" className="text-xl font-heading font-bold text-charcoal hover:text-red transition-colors">Garden City Painters</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-grey p-8 lg:p-12 rounded-2xl border border-charcoal/5">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
