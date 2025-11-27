import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'High Durability',
    icon: '🛡️',
    text: 'UV-resistant, high-tensile nets designed for daily use in Indian weather conditions.',
  },
  {
    title: 'Trusted Material',
    icon: '🏢',
    text: 'Premium hooks, rope and fixtures that protect your balcony without spoiling the look.',
  },
  {
    title: 'Professional / DIY Options',
    icon: '🧰',
    text: 'Choose expert installation or DIY kits with clear instructions based on your budget.',
  },
  {
    title: 'Safe for Kids & Pets',
    icon: '👨‍👩‍👧‍👦',
    text: 'Extra safety for kids, elderly people and pets around balconies and open spaces.',
  },
]

export default function WhyChoose() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-2 text-anchor-navy">Why Choose AS NETS?</h2>
        <p className="text-sm text-anchor-navy/80">
          Safety, durability and clean design for your balcony and home – with balcony safety nets that look as good as they protect.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="card-magnetic bg-white rounded-2xl border border-skybrand-light/80 shadow-[0_10px_24px_rgba(4,47,82,0.12)] p-4 flex flex-col gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-skybrand to-skybrand-deep text-white flex items-center justify-center text-lg shadow-md icon-tilt">
              <span aria-hidden="true">{item.icon}</span>
            </div>
            <h3 className="text-sm font-semibold text-anchor-navy">{item.title}</h3>
            <p className="text-xs text-anchor-navy/75">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
