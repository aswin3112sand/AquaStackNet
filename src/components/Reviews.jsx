import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'The balcony looks neat and modern. Our kids can play freely and we feel completely relaxed.',
    name: 'Anitha',
    area: 'Chennai Apartment',
    initials: 'A',
  },
  {
    text: 'Pigeon problem completely stopped. Installation was quick and the team was very professional.',
    name: 'Rahul',
    area: 'Balcony Anti-Bird Net',
    initials: 'R',
  },
  {
    text: 'DIY kit was simple to install with the guide. Perfect for our small balcony and our pet cat.',
    name: 'Vijay & Priya',
    area: 'Pet Safety Net',
    initials: 'VP',
  },
]

export default function Reviews() {
  return (
    <section className="relative py-10 md:py-12">
      <div className="absolute inset-x-4 md:inset-x-8 top-4 bottom-4 rounded-[2rem] bg-white/85 shadow-[0_18px_45px_rgba(4,47,82,0.13)] -z-10" />
      <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-1 text-anchor-navy">What Our Customers Say</h2>
        <p className="text-sm text-anchor-navy/80">Homes, families and pets that feel safer with AS NETS balcony safety nets.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <motion.article
            key={t.name}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="card-magnetic bg-white rounded-2xl border border-skybrand-light/90 shadow-[0_10px_24px_rgba(4,47,82,0.12)] p-4 flex flex-col"
          >
            <div className="text-3xl text-skybrand mb-1" aria-hidden="true">
              “
            </div>
            <p className="text-xs text-anchor-navy/80 flex-1">{t.text}</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-skybrand to-skybrand-deep text-white flex items-center justify-center text-xs font-semibold">
                {t.initials}
              </div>
              <div>
                  <div className="text-xs font-semibold text-anchor-navy">{t.name}</div>
                  <div className="text-[11px] text-anchor-navy/70">{t.area}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  )
}
