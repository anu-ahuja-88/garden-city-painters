"use client"
import { motion, useReducedMotion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function HeroSection() {
  const reduce = useReducedMotion()
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" },
  })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #1a1a1c, #2a2a2e)`,
      }}
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/gallery/modern-residential-painting-christchurch.png')`,
          }}
          role="img"
          aria-label="Freshly painted modern Christchurch home exterior by Garden City Painters"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block bg-red text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded mb-8">
            Master Painters NZ Member
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
        >
          High-End Painting &amp; Plastering<br className="hidden sm:block" /> in Christchurch
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-white/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Trade qualified experts delivering flawless finishes for homes and businesses across Canterbury — Over 15 years experience.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: reduce ? 1 : 1.03 }}
            whileTap={{ scale: reduce ? 1 : 0.97 }}
            className="bg-red hover:bg-red-hover text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200 cursor-pointer shadow-lg"
          >
            Get a Free Quote
          </motion.a>
          <motion.a
            href="/gallery"
            whileHover={{ scale: reduce ? 1 : 1.03 }}
            whileTap={{ scale: reduce ? 1 : 0.97 }}
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded font-semibold text-base transition-all duration-200 cursor-pointer"
          >
            View Our Work
          </motion.a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="mt-10 flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
          <MapPin className="w-4 h-4 text-red" />
          Serving Christchurch &amp; Greater Canterbury
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </section>
  )
}
