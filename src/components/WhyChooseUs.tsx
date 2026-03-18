import { Award, CheckCircle, ShieldCheck, GraduationCap, Microscope, ThumbsUp } from "lucide-react"
import AnimateIn from "./AnimateIn"

const reasons = [
  {
    icon: GraduationCap,
    title: "15+ Years Experience",
    body: "We've been in the game for over 15 years, bringing a massive amount of local knowledge to every project.",
  },
  {
    icon: ShieldCheck,
    title: "Trade Qualified Team",
    body: "Our painters are trade-qualified pros who actually take pride in their craft and professional standards.",
  },
  {
    icon: Award,
    title: "Master Painters NZ",
    body: "Proud members of Master Painters NZ, so you know our work meets the highest national quality benchmarks.",
  },
  {
    icon: Microscope,
    title: "Attention to Detail",
    body: "We focus on the fine details that make a huge difference, ensuring a premium finish every single time.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    body: "We stand 100% behind our work. Quality workmanship is guaranteed on every job we take on.",
  },
  {
    icon: CheckCircle,
    title: "Christchurch Locals",
    body: "Proudly serving the wider Canterbury region with local knowledge and reliable service you can count on.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-grey py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-2xl mb-4 text-center mx-auto md:text-left md:mx-0">
            <h2 className="font-heading font-bold text-4xl text-charcoal mb-4">
              Why Garden City Painters?
            </h2>
            <p className="text-charcoal/60 text-lg font-body">
              For over 15 years, we have been the first choice for quality painting in Christchurch.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((r, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-8 h-full border border-charcoal/5 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center mb-5">
                  <r.icon className="w-6 h-6 text-red" />
                </div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-3">{r.title}</h3>
                <p className="text-charcoal/60 font-body text-sm leading-relaxed">{r.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-12 text-center md:text-left">
          <a
            href="/about"
            className="inline-block text-red hover:text-red-hover font-semibold text-sm underline underline-offset-4 transition-colors duration-200 cursor-pointer"
          >
            Learn More About Our Team →
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
