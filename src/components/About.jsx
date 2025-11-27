import React from 'react'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 items-start">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-2 text-anchor-navy">About AS NETS</h2>
          <div className="inline-flex flex-wrap gap-2 text-[11px] font-semibold text-anchor-navy/80 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-skybrand-light/40 border border-skybrand/50">
              Balcony Safety Net / Anti-Bird Net / Pigeon Net / Kids &amp; Pet Safety Net
            </span>
          </div>
          <p className="text-sm text-anchor-navy font-semibold mb-2">
            “Complete safety for balconies, kids, pets &amp; bird protection.”
          </p>
          <p className="text-sm text-anchor-navy/80 mb-3">
            Premium HDPE balcony safety nets designed to prevent falls, protect kids and pets, and stop pigeons from entering your balcony.
            Weather-resistant, durable and professionally fitted using strong border rope and rust-proof hooks. Ideal for apartments, balconies,
            windows, AC units and open home spaces.
          </p>
        </div>
        <div className="card-magnetic bg-white/95 rounded-2xl border border-skybrand-light/80 shadow-[0_12px_26px_rgba(4,47,82,0.16)] p-4 text-sm text-anchor-navy/80">
          <h3 className="text-sm font-semibold mb-2 text-anchor-navy">Why Customers Work With Us</h3>
          <ul className="space-y-1 text-xs list-disc list-inside">
            <li>Experience in balcony safety nets and anti-bird solutions.</li>
            <li>Service available across selected areas / cities (update with your locations).</li>
            <li>Same-day or fast installation options based on schedule.</li>
            <li>Transparent per sq.ft pricing and clear quotes.</li>
            <li>Professional team with focus on neat finish and long-term safety.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
