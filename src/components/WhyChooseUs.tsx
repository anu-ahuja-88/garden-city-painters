import { Award, CheckCircle, ShieldCheck, GraduationCap, Microscope, ThumbsUp } from "lucide-react"
import AnimateIn from "./AnimateIn"

const reasons = [
  {
    icon: GraduationCap,
    title: "15+ Years Experience",
    body: "Over 15 years in the painting industry, bringing a wealth of knowledge to every project we undertake.",
  },
  {
    icon: ShieldCheck,
    title: "Trade Qualified Team",
    body: "Our painters are trade qualified professionals who take pride in their craft and professional standards.",
  },
  {
    icon: Award,
    title: "Master Painters NZ",
    body: "Proud members of Master Painters New Zealand, ensuring our work meets rigorous national quality benchmarks.",
  },
  {
    icon: Microscope,
    title: "Attention to Detail",
    body: "We focus strongly on the fine details and top-quality workmanship that set a premium finish apart.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    body: "We stand behind our work. Quality work is guaranteed on every residential and commercial project.",
  },
  {
    icon: CheckCircle,
    title: "Christchurch Locals",
    body: "Proudly serving the wider Canterbury region with local knowledge and reliable service.",
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
