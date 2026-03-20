"use client"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Home, Building2, Layers, CloudSun, Paintbrush, HardHat, Hammer, Droplets } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description: "Colour changes, feature walls, or full house repaints. We handle it all with minimal mess and maximum care.",
    photo: "/gallery/interior-painting-modern-kitchen-christchurch.png",
  },
  {
    icon: CloudSun,
    title: "Exterior Painting",
    description: "Built to stand up to the Christchurch elements. We use premium coatings and thorough prep for a finish that lasts.",
    photo: "/gallery/modern-residential-painting-christchurch.png",
  },
  {
    icon: Droplets,
    title: "Roof Painting",
    description: "Specialist roof restoration and painting. Protect your home and keep it looking sharp for years.",
    photo: "/gallery/large-residential-painting-canterbury.png",
  },
  {
    icon: Layers,
    title: "Interior Plastering",
    description: "Smooth, seamless plastering for walls and ceilings. The perfect foundation for your new paint job.",
    photo: "/gallery/interior-house-painting-in-progress.png",
  },
  {
    icon: Home,
    title: "Residential Painting",
    description: "We treat your home like our own. Professional service, trade-qualified expertise, and zero stress.",
    photo: "/gallery/residential-exterior-painting-completed-christchurch.png",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "No-fuss solutions for Christchurch businesses. We stick to deadlines and deliver high-quality results.",
    photo: "/gallery/commercial-painting-project-scaffolding-christchurch.png",
  },
  {
    icon: Hammer,
    title: "Surface Prep & Repairs",
    description: "We don't just paint over the cracks. We fix the underlying issues so your finish stays looking great.",
    photo: "/gallery/exterior-preparation-painting-christchurch.png",
  },
]

export default function ServicesGrid() {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-charcoal mb-4">Our Services</h2>
          <p className="text-charcoal/60 text-lg font-body">
            Trade qualified painters delivering quality work across Christchurch and Greater Canterbury.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group bg-white border border-charcoal/10 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.photo}
                  alt={`${s.title} — Garden City Painters Christchurch`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-red/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-red" />
                  </div>
                  <h4 className="font-heading font-bold text-charcoal text-base">{s.title}</h4>
                </div>
                <p className="text-charcoal/60 text-sm font-body leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-charcoal hover:bg-red text-white px-8 py-4 rounded font-semibold text-sm transition-colors duration-200 cursor-pointer"
          >
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
