import { CheckCircle } from "lucide-react"
import AnimateIn from "./AnimateIn"

const credentials = [
  "Members of Master Painters New Zealand",
  "Over 15 years industry experience",
  "Team of trade qualified painters",
  "Full public liability insurance",
  "Quality workmanship guaranteed",
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <AnimateIn>
              <h2 className="font-heading font-bold text-4xl text-white mb-6 leading-tight uppercase tracking-tight">
                Christchurch <span className="text-red">Painters</span> You Can Count On
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-6">
                Garden City Painters has been part of the Christchurch community for over 15 years. We&apos;re a local team of trade-qualified pros who actually care about the finish. Whether it&apos;s a quick refresh or a full architectural makeover, we&apos;ve got you covered across the whole Canterbury region.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-8">
                We believe in doing a job properly the first time. As proud members of Master Painters New Zealand, we stick to the highest standards, ensuring your home or business looks top-notch for years to come. No shortcuts, just quality workmanship.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <ul className="space-y-3 mb-10">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm font-body">
                    <CheckCircle className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <a
                href="/contact"
                className="inline-block bg-red hover:bg-red-hover text-white px-8 py-4 rounded font-semibold text-sm transition-colors duration-200 cursor-pointer shadow-lg"
              >
                Get in Touch
              </a>
            </AnimateIn>
          </div>

          {/* Photo */}
          <AnimateIn delay={0.2}>
            <div className="bg-white/5 rounded-2xl aspect-[4/3] flex items-center justify-center border border-white/10 overflow-hidden relative">
               <img 
                src="/christchurch-painters-vans.png" 
                alt="Garden City Painters professional team and vans"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
                 <p className="text-white text-sm font-heading font-bold uppercase tracking-widest">Master Painters NZ Member</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
