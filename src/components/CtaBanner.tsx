"use client"
import { motion, useReducedMotion } from "framer-motion"

export default function CtaBanner() {
  const reduce = useReducedMotion()
  return (
    <section className="bg-red py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading font-bold text-3xl sm:text-4xl mb-4 uppercase tracking-tight"
        >
          Ready for a Finish You&apos;ll Love?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-white/80 text-lg font-body mb-8"
        >
          Get a free, no-obligation quote from our team of Christchurch pros today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: reduce ? 1 : 1.03 }}
            whileTap={{ scale: reduce ? 1 : 0.97 }}
            className="inline-block bg-white text-red hover:bg-grey px-10 py-4 rounded font-heading font-bold text-base transition-colors duration-200 cursor-pointer shadow-lg uppercase tracking-widest"
          >
            Request a Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
