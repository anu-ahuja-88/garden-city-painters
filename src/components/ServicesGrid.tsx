"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Home, Building2, Layers, CloudSun, Paintbrush, HardHat, Hammer, Droplets } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description: "Colour changes, feature walls, or full house repaints — we handle it all with minimal mess and maximum care.",
    photo: "Clean interior painting of a modern Christchurch home",
  },
  {
    icon: CloudSun,
    title: "Exterior Painting",
    description: "Protection against the Christchurch elements. We use premium coatings and thorough prep for a lasting finish.",
    photo: "Expertly painted Christchurch home exterior with durable coating",
  },
  {
    icon: Droplets,
    title: "Roof Painting",
    description: "Specialist roof restoration and painting to protect and beautify your property's first line of defence.",
    photo: "Freshly coated roof in Christchurch, high-gloss finish",
  },
  {
    icon: Layers,
    title: "Interior Plastering",
    description: "Seamless surface repairs and high-quality plastering to ensure a perfect foundation for your new paint.",
    photo: "Smooth plaster finish on a newly repaired wall",
  },
  {
    icon: Home,
    title: "Residential Painting",
    description: "Personalised service for homeowners. We treat your house with respect, delivering trade-qualified excellence.",
    photo: "Modern residential property painting project in Canterbury",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "Efficient solutions for businesses. Tight deadlines and high standards for offices, retail, and more.",
    photo: "High-end commercial interior painting project",
  },
  {
    icon: Hammer,
    title: "Surface Preparation & Repairs",
    description: "We don't just paint over problems. We fix them first, ensuring your new finish lasts for years to come.",
    photo: "Properly prepared wall surface ready for painting",
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
              {/* Photo placeholder */}
              <div className="bg-grey aspect-[4/3] flex items-center justify-center px-4">
                <p className="text-charcoal/30 text-xs text-center italic">[PHOTO: {s.photo}]</p>
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
