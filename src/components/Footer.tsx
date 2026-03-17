import { Phone, Mail, MapPin, Facebook } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-red flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">GC</span>
              </div>
              <span className="font-heading font-bold text-white text-lg leading-tight uppercase tracking-tight">
                Garden City<br />
                <span className="text-red text-xs font-semibold tracking-[0.2em] uppercase">Painters</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-body">
              Over 15 years of excellence in painting and plastering across the Canterbury region. Trade qualified and Master Painters member.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com/Garden-City-Painters" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-red hover:text-white transition-all cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-white/60 font-body">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red" /> 
                <a href="tel:0223515421" className="hover:text-white transition-colors cursor-pointer">022 351 5421</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red" /> 
                <a href="mailto:info@gardencitypainters.co.nz" className="hover:text-white transition-colors cursor-pointer">info@gardencitypainters.co.nz</a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red" /> 
                Christchurch, Canterbury
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-y-3 text-sm text-white/50 font-body">
              <a href="/services" className="hover:text-red transition-colors cursor-pointer">Our Services</a>
              <a href="/roof-painting" className="hover:text-red transition-colors cursor-pointer">Roof Painting</a>
              <a href="/about" className="hover:text-red transition-colors cursor-pointer">About Us</a>
              <a href="/gallery" className="hover:text-red transition-colors cursor-pointer">Our Work</a>
              <a href="/testimonials" className="hover:text-red transition-colors cursor-pointer">Testimonials</a>
              <a href="/contact" className="hover:text-red transition-colors cursor-pointer">Contact</a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Free Estimate</h4>
            <p className="text-white/50 text-sm mb-6 font-body leading-relaxed">Ready to refresh your property? Contact us for a non-obligation quote today.</p>
            <a href="/contact" className="inline-block bg-red hover:bg-red-hover text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors duration-200 cursor-pointer">
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/30 font-body">
          <p>© {year} Garden City Painters. All rights reserved.</p>
          <p>Website by <span className="text-red">Verra Web Studio</span></p>
        </div>
      </div>
    </footer>
  )
}
