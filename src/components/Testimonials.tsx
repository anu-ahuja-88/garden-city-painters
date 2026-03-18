"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Samantha Aitken",
    location: "Christchurch",
    rating: 5,
    text: "We had the pleasure of Mostafa and his team doing a complete makeover of three of our bedrooms and a few other tidy up jobs around our place. There was no hesitation to get it done, even with last-minute requests!",
  },
  {
    name: "Ben Tippen",
    location: "Christchurch",
    rating: 5,
    text: "I use Garden City Painters all the time and wouldn’t go anywhere else. He’s always happy to provide quotes, is very well-priced, and his work is immaculate. Highly recommend with complete confidence!",
  },
  {
    name: "Belinda Andrew",
    location: "Christchurch",
    rating: 5,
    text: "Garden City Painters did an amazing job with the internal painting of our townhouse. All completed whilst we were away, great communication and excellent result. Thank you!",
  },
  {
    name: "Amy Scott",
    location: "Christchurch",
    rating: 5,
    text: "Mustafa and the team were so great to work with. They provided a fast quote and were able to complete the job within a week of getting in touch with them. Great work and great communication.",
  },
  {
    name: "Dionne Rogers",
    location: "Trades Professional",
    rating: 5,
    text: "As a fellow tradesman, I've worked alongside Garden City Painters on several projects and have always been impressed with their professionalism and workmanship. They run an organized site and communicate clearly.",
  },
  {
    name: "James Anderson",
    location: "Christchurch",
    rating: 5,
    text: "Garden City Painters did a fantastic job of painting our bedroom and bathroom when we decided to renovate. They were very easy to deal with, did a top quality job, and recommended other great tradies.",
  },
  {
    name: "Barbara Galbraith",
    location: "Local Guide",
    rating: 5,
    text: "Found Garden City Painters great to work with. They kept me in the loop and checked with me if all was going as planned. Very organised and no trouble to do extra when asked. Extremely prompt and professional.",
  },
  {
    name: "Diane Norman",
    location: "Christchurch",
    rating: 5,
    text: "From the very beginning Mostafa has been a delight to deal with. Always cheerful and working with us even when we were unsure of our timeline with prior work happening in our home. Truly a pleasure.",
  },
  {
    name: "Gavin Bannon",
    location: "Christchurch",
    rating: 5,
    text: "Highly experienced painters and they do a great job. They are really nice people to deal with and I highly recommend them for any painting projects in the Canterbury region.",
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
          <p className="text-charcoal/60 text-lg font-body">Real Google reviews from homeowners and businesses across Canterbury.</p>
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
