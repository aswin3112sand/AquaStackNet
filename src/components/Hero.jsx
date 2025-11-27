import React from 'react'
import { motion } from 'framer-motion'
import galleryImage1 from '../assets/gallery/1.jpg.png'
import galleryImage2 from '../assets/gallery/2.jpg.png'
import galleryImage4 from '../assets/gallery/4.jpg.png'
import galleryImage6 from '../assets/gallery/6.jpg.png'
import galleryCricket from '../assets/gallery/gallery-cricket.webp'
import galleryBalcony from '../assets/gallery/gallery-balcony.webp'

export default function Hero() {
  const gallery = [
    { src: galleryImage1, alt: 'Updated net product photo', label: 'Balcony Net' },
    { src: galleryImage2, alt: 'Updated cargo or storage net photo', label: 'Packing Net' },
    { src: galleryImage4, alt: 'Updated fishing or packing net photo', label: 'Fishing Nets Storage' },
    { src: galleryImage6, alt: 'Updated market-ready net photo', label: 'Child Safety' },
    { src: galleryCricket, alt: 'Cricket practice lane with safety net', label: 'Sports Netting' },
    { src: galleryBalcony, alt: 'Balcony safety net protecting kids and pets', label: 'Pet Safety' },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-skybrand to-skybrand-deep" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[url('/hero-banner.png')] bg-cover bg-center mix-blend-soft-light opacity-75"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/78 to-white/62"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div className="space-y-5">
          <p className="text-xs tracking-[0.35em] uppercase text-anchor-forest font-semibold">
            Balcony • Kids • Pets • Birds • Cricket • Storage Nets
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-anchor-navy">
            Safety Nets for Homes, Sports &amp; Net Storage Solutions
          </h1>
          <p className="text-sm md:text-base text-anchor-navy/80 max-w-xl">
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
              className="interactive inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-anchor-navy border border-anchor-navy/30 bg-white/80 hover:border-accent-coral/80 hover:shadow-lg transition"
            >
              View Products
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-anchor-forest font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-skybrand-light/70">
              ✔ Free site visit
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-skybrand-light/70">
              ✔ Kids &amp; pet safe finishing
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-skybrand-light/70">
              ✔ UV &amp; weather ready
            </span>
          </div>
        </div>

        <div className="relative min-h-[260px]">
          <div className="absolute -inset-6 md:-inset-8 rounded-[28px] bg-gradient-to-br from-skybrand/60 via-white/40 to-accent-coral/25 blur-3xl" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-3xl bg-white/90 backdrop-blur border border-white/80 shadow-[0_18px_48px_rgba(13,36,56,0.18)] p-3"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((item, idx) => (
                <div
                  key={`${item.src}-${idx}`}
                  className="gallery-card group overflow-hidden rounded-xl border border-white/70 shadow-md bg-white/75"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-24 md:h-28 lg:h-32 object-cover transition duration-400 ease-out group-hover:scale-110"
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
