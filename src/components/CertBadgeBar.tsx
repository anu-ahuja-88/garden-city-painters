import AnimateIn from "./AnimateIn"

const certs = [
  "Master Painters New Zealand",
  "Site Safe NZ",
  "Resene Eco Decorator",
  "Dulux Accredited",
]

export default function CertBadgeBar() {
  return (
    <section className="bg-grey py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-charcoal">
        <AnimateIn>
          <h2 className="font-heading font-bold text-3xl mb-12 uppercase tracking-tight">Accredited & <span className="text-red">Trusted</span></h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {certs.map((cert, i) => (
              <div
                key={i}
                className="bg-white border border-charcoal/10 rounded-xl px-8 py-5 flex items-center justify-center min-w-[200px] shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-charcoal/60 text-[10px] text-center uppercase tracking-widest font-bold font-body">{cert}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
