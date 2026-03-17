"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Award, Users, Star, Clock } from "lucide-react"

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience", suffix: "" },
  { icon: Award, label: "Master Painters NZ Member", value: "✓", suffix: "" },
  { icon: Users, value: "Residential", label: "& Commercial", suffix: "" },
  { icon: Star, value: "5.0★", label: "Google Rating", suffix: "" },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3 lg:justify-center">
              <div className="w-10 h-10 rounded-lg bg-red/20 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-5 h-5 text-red" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-xl leading-tight">
                  {s.value}
                </div>
                <div className="text-white/50 text-[10px] uppercase font-bold tracking-[0.1em] mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
