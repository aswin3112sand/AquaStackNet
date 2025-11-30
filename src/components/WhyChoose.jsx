import React from 'react'

export default function WhyChoose() {
  const features = [
    {
      title: 'Fishing-Grade HDPE Material',
      desc: 'Fishing industry quality — salt, sun, tension ready. Balcony use-ku double strength guarantee.',
      icon: '🎣',
      className: 'md:col-span-2 lg:col-span-2',
    },
    {
      title: 'High Breaking Strength',
      desc: 'Kids leaning, pets weight, wind force — strong pull withstand without sag.',
      icon: '💪',
    },
    {
      title: 'UV-Stabilized for Indian Sun',
      desc: '100% UV coated. No fade / colour change. Life +2–4 years balcony use.',
      icon: '🌞',
    },
    {
      title: 'Thick Twisted Mono-Filament',
      desc: 'Twisted mono filament = tight weave + high durability. Safety-ku mukkiyam.',
      icon: '🧵',
    },
    {
      title: 'Strong Knot Strength',
      desc: 'Square / diamond mesh knots are tight, non-slip, tangle-free — kids/pets safe.',
      icon: '🔒',
    },
    {
      title: 'Man Cut & Man Stitch Finish',
      desc: 'Borders hand-cut and hand-stitched with rope binding. Hooks tension strong, shape perfect.',
      icon: '🪡',
    },
    {
      title: '4mm Heavy-Duty Border Rope',
      desc: 'Fishing-grade rope, tight grip, no stretch or sag. Clean installation tension.',
      icon: '🪢',
    },
    {
      title: 'Waterproof + Anti-Dust',
      desc: 'Water absorb pannaadhu. Rain, dust, pigeon dirt easy wipe. Anti-bird ready.',
      icon: '💧',
    },
    {
      title: 'Pets & Kids Safe Finish',
      desc: 'Smooth touch. No sharp edges. Hands cut aagathu, pets nails get stuck aagathu.',
      icon: '🐾',
    },
    {
      title: 'Long Life 3–5 Years+',
      desc: 'Normal nets 1.5–2 yrs. Fishing-grade fibre 3–5 yrs+ with care.',
      icon: '⏳',
    },
  ]

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-anchor-navy dark:text-white mb-4">
          Why Choose AS NETS?
        </h2>
        <p className="text-anchor-navy/70 dark:text-dark-muted max-w-2xl mx-auto">
          We combine quality materials with expert craftsmanship to deliver the best safety solutions for your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm border border-white/60 dark:border-dark-muted hover:shadow-xl transition-all duration-300 group ${feature.className ?? ''}`}
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-anchor-navy dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-anchor-navy/70 dark:text-dark-muted leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
