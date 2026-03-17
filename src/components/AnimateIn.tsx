"use client"
import { motion, useReducedMotion } from "framer-motion"

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function AnimateIn({ children, delay = 0, y = 24, className }: AnimateInProps) {
  const shouldReduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
