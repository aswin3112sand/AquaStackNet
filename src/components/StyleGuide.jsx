import React from 'react'

const colors = [
  { name: 'Sky Blue', value: '#66C8FF', role: 'Primary ~60% | hero, banners, large panels' },
  { name: 'Sky Deep', value: '#0D67A5', role: 'Anchors, buttons depth, gradients' },
  { name: 'Neutral Beige', value: '#F7F1E8', role: 'Background / negative space ~20%' },
  { name: 'Taupe', value: '#E8DFD3', role: 'Cards, secondary surfaces' },
  { name: 'Coral Accent', value: '#FF6B4A', role: 'CTAs, badges, hover glows ~10%' },
  { name: 'Navy Anchor', value: '#0D2438', role: 'Headings, navigation ~10%' },
  { name: 'Forest Accent', value: '#0E3B2C', role: 'Supportive dark tone, eco vibe' },
]

const micro = [
  'WhatsApp CTAs: start green, shift to turquoise–purple gradient on hover (240–320ms, scale 1.02). Class: btn-cta-green.',
  'Primary CTAs: coral → turquoise–purple gradient on hover (240–320ms, scale 1.02). Class: btn-cta.',
  'Cards: magnetic lift (translateY(-4px), scale 1.02, 260ms) with accent outline. Class: card-magnetic.',
  'Navigation: navy to coral hover with sliding underline (220ms). Class: nav-link.',
  'Icons/Images: tilt (-3°) on hover (180ms). Class: icon-tilt; gallery-card already animated.',
  'Cursor: interactive elements use coral arrow cursor override. Class: interactive.',
  'Form Fields: focus rings in sky blue; valid = green; invalid focus = coral. Class: input-field.',
  'Gradients: hero/panels use blue-to-teal plus coral tint for depth; background mesh animated at 16–18s.'
]

export default function StyleGuide() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-2 text-anchor-navy">Design System Snapshot</h2>
        <p className="text-sm text-anchor-navy/80">
          Palette, typography, and micro-interactions tuned for AS NETS (Tanglish tone, local TN context) with a polished global feel.
        </p>
      </div>

      <div className="grid md:grid-cols-[1.15fr,0.85fr] gap-5">
        <div className="card-magnetic bg-white rounded-2xl border border-neutral-taupe/60 shadow-[0_14px_32px_rgba(13,36,56,0.12)] p-4">
          <h3 className="text-sm font-semibold text-anchor-navy mb-3">Colour Palette</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {colors.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border border-white shadow-md"
                  style={{ background: c.value }}
                  aria-label={c.name}
                />
                <div className="text-[11px]">
                  <div className="font-semibold text-anchor-navy">{c.name}</div>
                  <div className="text-anchor-navy/70">{c.value}</div>
                  <div className="text-anchor-navy/60">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-magnetic bg-white rounded-2xl border border-neutral-taupe/60 shadow-[0_14px_32px_rgba(13,36,56,0.12)] p-4">
          <h3 className="text-sm font-semibold text-anchor-navy mb-2">Type & Layout</h3>
          <ul className="text-[11px] text-anchor-navy/75 space-y-2">
            <li><strong className="text-anchor-navy">Headings:</strong> Playfair Display, bold/serif for premium, trustworthy tone.</li>
            <li><strong className="text-anchor-navy">Body:</strong> Inter sans for clarity on mobile & desktop.</li>
            <li><strong className="text-anchor-navy">Layout:</strong> Bento-ish cards, generous whitespace, neutral bases under blue.</li>
            <li><strong className="text-anchor-navy">Contrast:</strong> Navy text on sky blue sections; coral accents for CTAs/badges.</li>
          </ul>

          <h3 className="text-sm font-semibold text-anchor-navy mt-4 mb-2">Micro-Interactions</h3>
          <ul className="text-[11px] text-anchor-navy/75 space-y-1 list-disc list-inside">
            {micro.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
