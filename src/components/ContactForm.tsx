"use client"
import { useState } from "react"
import { Phone, Mail, MapPin, CheckCircle, Facebook } from "lucide-react"
import AnimateIn from "./AnimateIn"

const workTypes = [
  "Residential Painting",
  "Commercial Painting",
  "Interior Painting",
  "Exterior Painting",
  "Roof Painting",
  "Plastering & Repairs",
  "Other",
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      workType: formData.get('workType'),
      description: formData.get('description'),
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Failed to send')
      }
    } catch (err) {
      setError("Sorry, there was an error sending your message. Please try again or call us.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-2xl mb-12">
            <h2 className="font-heading font-bold text-4xl text-charcoal mb-3 uppercase tracking-tight">Get a <span className="text-red">Free Quote</span></h2>
            <p className="text-charcoal/60 font-body text-lg">We&apos;ll get back to you within 1 business day.</p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <AnimateIn delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-grey rounded-xl p-10 flex flex-col items-center text-center gap-4 border border-charcoal/5">
                <CheckCircle className="w-12 h-12 text-red" />
                <h3 className="font-heading font-bold text-xl text-charcoal">Thanks — we&apos;ll be in touch.</h3>
                <p className="text-charcoal/60 font-body text-sm">We aim to get back to all enquiries within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5 font-body">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5 font-body">
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all"
                      placeholder="022 XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5 font-body">
                    Email Address <span className="text-red">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-charcoal/20 rounded-lg px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all"
                    placeholder="you@example.co.nz"
                  />
                </div>
                <div>
                  <label htmlFor="work-type" className="block text-sm font-medium text-charcoal mb-1.5 font-body">
                    Type of Work
                  </label>
                  <select
                    id="work-type"
                    name="workType"
                    className="w-full border border-charcoal/20 rounded-lg px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all bg-white cursor-pointer"
                  >
                    <option value="">Select service...</option>
                    {workTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-1.5 font-body">
                    Brief description of your project
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full border border-charcoal/20 rounded-lg px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all resize-none"
                    placeholder="Tell us a bit about the job — size, location, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red hover:bg-red-hover disabled:bg-charcoal/50 text-white py-4 rounded-lg font-heading font-semibold text-sm transition-colors duration-200 cursor-pointer shadow-lg"
                >
                  {loading ? 'Sending...' : 'Send My Enquiry'}
                </button>
                {error && (
                  <p className="text-red text-center text-xs mt-4 font-body font-semibold">{error}</p>
                )}
              </form>
            )}
          </AnimateIn>

          {/* Contact cards */}
          <AnimateIn delay={0.2} className="lg:col-span-2">
            <div className="flex flex-col gap-4 lg:pt-4">
              {[
                { icon: Phone, label: "Call Us", value: "022 351 5421", href: "tel:0223515421" },
                { icon: Mail, label: "Email", value: "info@gardencitypainters.co.nz", href: "mailto:info@gardencitypainters.co.nz" },
                { icon: MapPin, label: "Based in", value: "Christchurch, Canterbury", href: null },
                { icon: Facebook, label: "Follow Us", value: "Garden City Painters", href: "https://www.facebook.com/p/Garden-City-Painters-100063622866685/" },
              ].map((c, i) => (
                <div key={i} className="bg-grey rounded-xl p-5 flex items-center gap-4 border border-charcoal/5">
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="text-charcoal/50 text-xs font-body mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-charcoal font-bold text-sm font-body hover:text-red transition-colors cursor-pointer">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-charcoal font-bold text-sm font-body">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
