import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    label: '01',
    title: 'Choose Your Net',
    text: 'Tell us your balcony type and what you need protection from – birds, kids, pets or sports.',
  },
  {
    label: '02',
    title: 'Share Measurements',
    text: 'Send balcony photos & measurements on WhatsApp for a quick and accurate quote.',
  },
  {
    label: '03',
    title: 'Get Quote & Install',
    text: 'Confirm the quote and schedule installation or receive a DIY kit with complete guidance.',
  },
]

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-1 text-anchor-navy">How Our Process Works</h2>
        <p className="text-sm text-anchor-navy/80">Simple 3-step process to secure your balcony and open spaces.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-stretch">
        {steps.map((s, idx) => (
          <React.Fragment key={s.label}>
            <motion.article
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="card-magnetic bg-white/95 rounded-2xl border border-skybrand-light/80 shadow-[0_12px_26px_rgba(4,47,82,0.16)] p-4 flex flex-col gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-skybrand to-skybrand-deep text-white flex items-center justify-center text-[11px] font-semibold mb-1 icon-tilt">
                {s.label}
              </div>
              <h3 className="text-sm font-semibold text-anchor-navy">{s.title}</h3>
              <p className="text-xs text-anchor-navy/75">{s.text}</p>
            </motion.article>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
