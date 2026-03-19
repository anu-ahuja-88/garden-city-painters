"use client"
import { motion, useReducedMotion } from "framer-motion"
import { MapPin, Phone, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" },
  })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1E]"
    >
      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 60%, transparent 100%)",
        }}
      />

      {/* ── Red diagonal slash — painter's stroke ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.07]"
        viewBox="0 0 600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wide paint stroke */}
        <path
          d="M-100 900 L500 0 L600 0 L0 900Z"
          fill="#E31B23"
        />
        {/* Narrow accent stroke */}
        <path
          d="M100 900 L580 80 L600 80 L120 900Z"
          fill="#E31B23"
        />
      </svg>

      {/* ── Glow blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(227,27,35,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(227,27,35,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Paint roller icon — decorative right side ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: reduce ? 0 : 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <svg
          width="220"
          height="320"
          viewBox="0 0 220 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-10"
        >
          {/* Roller head */}
          <rect x="10" y="20" width="160" height="60" rx="12" fill="#E31B23" />
          {/* Roller cylinder */}
          <rect x="20" y="30" width="140" height="40" rx="8" fill="#C4171E" />
          {/* Handle arm */}
          <rect x="165" y="50" width="16" height="160" rx="8" fill="white" />
          {/* Handle grip */}
          <rect x="148" y="196" width="50" height="24" rx="10" fill="white" />
          {/* Paint drips */}
          <rect x="30" y="80" width="10" height="40" rx="5" fill="#E31B23" opacity="0.6" />
          <rect x="60" y="80" width="8" height="55" rx="4" fill="#E31B23" opacity="0.4" />
          <rect x="100" y="80" width="10" height="30" rx="5" fill="#E31B23" opacity="0.5" />
          <rect x="135" y="80" width="8" height="48" rx="4" fill="#E31B23" opacity="0.35" />
        </svg>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 bg-[#E31B23]/10 border border-[#E31B23]/30 text-[#E31B23] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23] animate-pulse" />
            Master Painters NZ Member
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
        >
          Expert Painters &amp; Plasterers
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="relative z-10"> in Christchurch</span>
            {/* Red underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="absolute bottom-1 left-0 right-0 h-[4px] bg-[#E31B23] rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-white/70 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Trade qualified experts delivering top-notch finishes for homes and
          businesses across Canterbury. Over 15 years of local experience you
          can trust.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: reduce ? 1 : 1.03 }}
            whileTap={{ scale: reduce ? 1 : 0.97 }}
            className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C4171E] text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200 shadow-lg shadow-[#E31B23]/30"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/gallery"
            whileHover={{ scale: reduce ? 1 : 1.03 }}
            whileTap={{ scale: reduce ? 1 : 0.97 }}
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white hover:bg-white/5 px-8 py-4 rounded font-semibold text-base transition-all duration-200"
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust signals row */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E31B23]" />
            Christchurch &amp; Greater Canterbury
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href="tel:02235154221"
            className="flex items-center gap-2 hover:text-white transition-colors duration-150"
          >
            <Phone className="w-4 h-4 text-[#E31B23]" />
            022 351 5421
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400">★★★★★</span>
            5.0 Google Rating
          </span>
        </motion.div>
      </div>

      {/* ── Bottom fade into next section ── */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#1C1C1E] to-transparent" />

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
      </motion.div>
    </section>
  )
}
