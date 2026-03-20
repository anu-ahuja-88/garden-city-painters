"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Roof Painting", href: "/roof-painting" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const isHome = pathname === "/"
  const hasBackground = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBackground ? "bg-charcoal/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo.png"
              alt="Garden City Painters Logo"
              width={160}
              height={48}
              fetchPriority="high"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0223515421"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-red" />
              022 351 5421
            </a>
            <a
              href="/contact"
              className="bg-red hover:bg-red-hover text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-charcoal border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:0223515421"
                className="flex items-center gap-2 text-white/80 text-sm mt-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-red" />
                022 351 5421
              </a>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-red text-white px-5 py-3 rounded text-sm font-semibold text-center mt-2 cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

