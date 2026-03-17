"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Fendalton",
    rating: 5,
    text: "From the first call to the final coat, everything was handled professionally. Our home looks incredible and the team were tidy, on time, and easy to deal with.",
  },
  {
    name: "James R.",
    location: "Christchurch CBD",
    rating: 5,
    text: "We've used Garden City Painters on three commercial fit-outs now. They work around our schedule, hit their deadlines, and the finish quality is always excellent.",
  },
  {
    name: "Craig & Lyn T.",
    location: "Halswell",
    rating: 5,
    text: "Honestly the best plastering and paint job we've ever had done. You can tell they take pride in the work.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-red text-red" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const reduce = useReducedMotion()
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-charcoal mb-4 uppercase tracking-tight">What Our <span className="text-red">Clients</span> Say</h2>
          <p className="text-charcoal/60 text-lg font-body">Real feedback from homeowners and businesses across Canterbury.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-grey rounded-xl p-8 flex flex-col gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-charcoal/5"
            >
              <Stars count={t.rating} />
              <blockquote className="text-charcoal/80 font-body text-base leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-heading font-bold text-charcoal text-sm">{t.name}</p>
                <p className="text-charcoal/40 text-xs font-body mt-0.5 uppercase tracking-widest">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
