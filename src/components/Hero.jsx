import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const gallery = [
    {
      src: '/gallery-balcony.webp',
      alt: 'Kid and cat safe behind balcony safety net with football',
      label: 'Balcony Safety',
      span: 'md:col-span-2 md:row-span-2',
    },
    { src: '/balcony.png', alt: '80 sq.ft balcony net visual', label: 'Size Visual' },
    {
      src: '/cricket big.png',
      alt: 'Cricket ball stopper net with bat on terrace',
      label: 'Cricket Stopper',
    },
    {
      src: '/gallery-cricket.webp',
      alt: 'Terrace cricket practice cage net',
      label: 'Practice Cage',
      span: 'md:col-span-2',
    },
    {
      src: '/gallery-storage-4.webp',
      alt: 'Heavy-duty storage nets close-up white blue red',
      label: 'Storage Nets',
    },
    {
      src: '/gallery-storage-3.jpg',
      alt: 'Rolled cargo nets ready for packing',
      label: 'Cargo Roll',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white/90 dark:bg-gradient-to-br dark:from-[#081021] dark:via-[#0d1c33] dark:to-[#0a1325]">
      <div className="absolute inset-0 bg-gradient-to-br from-skybrand to-skybrand-deep dark:hidden" aria-hidden="true" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#0c1c34] via-[#0b2444] to-[#12345a]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[url('/hero-banner.png')] bg-cover bg-center mix-blend-soft-light opacity-75 dark:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/78 to-white/62 dark:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden dark:block bg-gradient-to-r from-[#050c16]/75 via-[#0c1a2d]/70 to-[#0d1c31]/60"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start text-anchor-navy dark:text-dark-text">
        <div className="space-y-5">
          <p className="text-xs tracking-[0.35em] uppercase text-anchor-forest dark:text-skybrand-light font-semibold">
            Balcony • Kids • Pets • Birds • Cricket • Storage Nets
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-anchor-navy dark:text-white">
            Safety Nets for Homes, Sports &amp; Net Storage Solutions
          </h1>
          <p className="text-sm md:text-base text-anchor-navy/80 dark:text-dark-muted max-w-xl">
            Premium HDPE nets crafted for Tamil Nadu homes and businesses—protect balconies, kids, pets, stop pigeons, practice cricket safely at home or terrace, and store multiple fishing nets using strong 3mm heavy-duty packing nets without damage.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919789702356"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-green interactive inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white shadow-md"
            >
              <span>Order on WhatsApp</span>
            </a>
            <a
              href="#products"
              className="interactive inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-anchor-navy dark:text-dark-text border border-anchor-navy/30 dark:border-dark-muted bg-white/80 dark:bg-dark-card/70 hover:border-accent-coral/80 dark:hover:border-skybrand-light/80 hover:shadow-lg transition"
            >
              View Products
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-anchor-forest dark:text-dark-text font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-dark-card/70 border border-skybrand-light/70 dark:border-dark-muted/70">
              ✔ Free site visit
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-dark-card/70 border border-skybrand-light/70 dark:border-dark-muted/70">
              ✔ Kids &amp; pet safe finishing
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-dark-card/70 border border-skybrand-light/70 dark:border-dark-muted/70">
              ✔ UV &amp; weather ready
            </span>
          </div>
        </div>

        <div className="relative min-h-[260px]">
          <div className="absolute -inset-6 md:-inset-8 rounded-[28px] bg-gradient-to-br from-skybrand/60 via-white/40 to-accent-coral/25 dark:from-skybrand/30 dark:via-[#0f305a]/60 dark:to-accent-coral/10 blur-3xl" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-3xl bg-white/90 dark:bg-dark-card/80 backdrop-blur border border-white/80 dark:border-dark-muted shadow-[0_18px_48px_rgba(13,36,56,0.18)] dark:shadow-[0_18px_48px_rgba(3,16,36,0.5)] p-3"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {gallery.map((item, idx) => (
                <div
                  key={`${item.src}-${idx}`}
                  className="gallery-card group overflow-hidden rounded-xl border border-white/70 dark:border-dark-muted shadow-md bg-white/75 dark:bg-dark-card/70 relative aspect-square lg:aspect-[5/4]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition duration-400 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="w-full bg-gradient-to-t from-black/55 via-black/25 to-transparent px-3 py-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold text-white bg-white/15 backdrop-blur">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
