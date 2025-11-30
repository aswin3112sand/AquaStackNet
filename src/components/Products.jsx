import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import storageImage from '../assets/gallery/2.jpg.png'

// All dummy data lives at the top so it is easy to replace with API responses later.
// TODO: Replace with API calls to Spring Boot once endpoints are ready.
const WHATSAPP_NUMBER = '919789702356'
const CATEGORY_CARDS = [
  {
    key: 'balcony',
    title: 'Balcony Safety Nets',
    description: 'Child-safe, pet-safe balcony protection with pro installation.',
    cta: 'View Balcony Packages',
    image: '/gallery-balcony.webp',
    rating: { score: 4.9, label: '1,200+ installs' },
  },
  {
    key: 'cricket',
    title: 'Cricket Practice & Sports Nets',
    description: 'Cage nets, ball stoppers and terrace practice setups.',
    cta: 'View Cricket Packages',
    image: '/gallery-cricket.webp',
    rating: { score: 4.8, label: '800+ installs' },
  },
  {
    key: 'storage',
    title: 'Storage / Cargo / Utility Nets',
    description: '3mm storage nets for lofts, mezzanine cargo and utility safety.',
    cta: 'View Storage Packages',
    image: '/gallery-storage-4.webp',
    rating: { score: 4.7, label: 'New in stock' },
  },
]

const BALCONY_SIZES = [60, 70, 80, 90, 100]
const RATE_2MM_BALCONY = 20
const RATE_25MM_BALCONY = 22
const RATE_3MM_STORAGE = 32
const BALCONY_DIM_RATIO = 1.75
const CRICKET_DIM_RATIO = 1.25
const BALCONY_IMAGE_MAP = {
  60: '/ba1.png',
  70: '/ba2.png',
  80: '/ba3.png',
  90: '/ba4.png',
  100: '/ba5.png',
}
const STORAGE_DIM_RATIO = 1.35
const STORAGE_PACKAGES = [
  {
    id: 'storage-1400',
    name: 'Storage Net (Flat)',
    description: 'Heavy-duty storage/utility net with finished edges and hooks.',
    typicalSqFt: 100,
    image: storageImage,
    fixedPrice: 1400,
  },
]

const formatFeet = (value) => {
  if (!value || Number.isNaN(value)) return null
  const rounded = Math.round(value * 10) / 10
  return rounded % 1 === 0 ? `${rounded.toFixed(0)} ft` : `${rounded.toFixed(1)} ft`
}

const deriveDimensions = (area, ratio = 1.6) => {
  if (!area || area <= 0) return { width: 0, height: 0 }
  const height = Math.sqrt(area / ratio)
  const width = area / height
  return { width, height }
}

const NET_PREVIEW_THEME = {
  sky: {
    outerBorder: 'border-skybrand-light/80',
    innerBorder: 'border-skybrand/50',
    text: 'text-skybrand-deep',
    bg: 'from-skybrand-light/60 via-white to-sky-50',
    patternStyle: {
      backgroundImage:
        'linear-gradient(90deg, rgba(14,165,233,0.16) 1px, transparent 1px), linear-gradient(0deg, rgba(14,165,233,0.16) 1px, transparent 1px)',
      backgroundSize: '18px 18px',
    },
  },
  emerald: {
    outerBorder: 'border-emerald-200',
    innerBorder: 'border-emerald-400/60',
    text: 'text-emerald-800',
    bg: 'from-emerald-50 via-white to-sky-50',
    patternStyle: {
      backgroundImage:
        'linear-gradient(90deg, rgba(16,185,129,0.16) 1px, transparent 1px), linear-gradient(0deg, rgba(16,185,129,0.16) 1px, transparent 1px)',
      backgroundSize: '18px 18px',
    },
  },
  amber: {
    outerBorder: 'border-amber-200',
    innerBorder: 'border-amber-500/50',
    text: 'text-amber-800',
    bg: 'from-amber-50 via-white to-emerald-50',
    patternStyle: {
      backgroundImage:
        'linear-gradient(90deg, rgba(245,158,11,0.18) 1px, transparent 1px), linear-gradient(0deg, rgba(245,158,11,0.18) 1px, transparent 1px)',
      backgroundSize: '18px 18px',
    },
  },
}

function NetPreview({ width, height, area, label, tone = 'sky' }) {
  const theme = NET_PREVIEW_THEME[tone] ?? NET_PREVIEW_THEME.sky
  const widthLabel = width ? `${formatFeet(width)} wide` : 'Add width'
  const heightLabel = height ? `${formatFeet(height)} high` : 'Add height'
  const areaLabel = label || (area ? `${Math.round(area)} sq.ft` : 'Net visual')

  return (
    <div
      className={`relative h-28 rounded-xl overflow-hidden border ${theme.outerBorder} bg-gradient-to-br ${theme.bg} shadow-[0_10px_22px_rgba(13,36,56,0.08)]`}
    >
      <div className="absolute inset-0 opacity-70" style={theme.patternStyle} />
      <div
        className={`absolute inset-3 rounded-lg border border-dashed ${theme.innerBorder} bg-white/60 backdrop-blur-[1px]`}
      />
      <span
        className={`absolute top-1.5 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/70 shadow-sm bg-white/85 ${theme.text}`}
      >
        {widthLabel}
      </span>
      <span
        className={`absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/70 shadow-sm bg-white/85 origin-center ${theme.text}`}
      >
        {heightLabel}
      </span>
      <span
        className={`absolute bottom-2 right-2 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/80 shadow-sm bg-white/90 ${theme.text}`}
      >
        {areaLabel}
      </span>
    </div>
  )
}
const openWhatsappWithMessage = (message) => {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
}

const CRICKET_PACKAGES = [
  {
    id: 'cricket-big',
    name: 'Cricket Practice Net – Big',
    description: 'Balcony lane backstop for hard-ball hits with rope borders and clean finish.',
    widthFt: 20,
    heightFt: 10,
    sizeSqFt: 200,
    image: '/cricket big.png',
  },
  {
    id: 'cricket-big-2',
    name: 'Cricket Practice Net – Big 2',
    description: 'Square floor/terrace stopper for catching drills with dual-colour rope edging.',
    widthFt: 14,
    heightFt: 12,
    sizeSqFt: 168,
    image: '/cricket big 2.png',
  },
  {
    id: 'cricket-small',
    name: 'Cricket Practice Net – Small',
    description: 'Lightweight balcony stopper net for casual practice and soft ball sessions.',
    widthFt: 12,
    heightFt: 7,
    sizeSqFt: 84,
    image: '/cricket.2.jpg',
  },
]
const RATE_2MM_CRICKET = 20
const RATE_25MM_CRICKET = 22
const CRICKET_PRESETS = [
  { id: 'cricket-big', label: 'Cricket Big', width: 20, height: 10 },
  { id: 'cricket-big-2', label: 'Cricket Big 2', width: 14, height: 12 },
  { id: 'cricket-small', label: 'Cricket Small', width: 12, height: 10 },
]

const currency = (value) => `₹${value.toLocaleString('en-IN')}`
const ENQUIRY_BTN_CLASSES =
  'w-full relative inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-skybrand to-skybrand-deep hover:from-emerald-500 hover:to-green-600 shadow-[0_14px_30px_rgba(14,165,233,0.35)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-1 focus:ring-offset-white'
const HOOK_OPTIONS = [
  { id: 'none', label: 'No Hook (default)', desc: 'Only rope used', badge: 'No hook', rate: 0 },
  { id: 'standard', label: 'Standard Hook (₹6)', desc: 'Regular hook for most installs', badge: 'Std hook', rate: 6 },
  { id: 'ss', label: 'SS Hook + Screw (₹28)', desc: 'Rust-resistant premium hook', badge: 'SS hook', rate: 28 },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [customBalcony, setCustomBalcony] = useState({ width: '', height: '', thickness: '2mm' })
  const [customCricket, setCustomCricket] = useState({ width: '', height: '', thickness: '2mm' })
  const [enquiry, setEnquiry] = useState({ name: '', phone: '', location: '', notes: '' })
  const detailsRef = useRef(null)
  const summaryRef = useRef(null)

  // Smooth scroll to the detail section when a category is chosen.
  useEffect(() => {
    if (selectedCategory && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedCategory])

  useEffect(() => {
    if (selectedPackage && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedPackage])

  const handleCustomBalconyChange = (field, value) => {
    setCustomBalcony((prev) => ({ ...prev, [field]: value }))
  }

  const handleCustomCricketChange = (field, value) => {
    setCustomCricket((prev) => ({ ...prev, [field]: value }))
  }

  const handleSelectPackage = (pkg) => {
    // TODO: Replace with API-driven cart/lead flow
    setSelectedPackage(pkg)
  }

  const handleEnquiryChange = (field, value) => {
    setEnquiry((prev) => ({ ...prev, [field]: value }))
  }

  const handleResetSelection = () => {
    setSelectedPackage(null)
    setEnquiry({ name: '', phone: '', location: '', notes: '' })
  }

  const customBalconyArea = useMemo(() => {
    const width = parseFloat(customBalcony.width)
    const height = parseFloat(customBalcony.height)
    if (!width || !height) return 0
    return width * height
  }, [customBalcony.height, customBalcony.width])

  const customCricketArea = useMemo(() => {
    const width = parseFloat(customCricket.width)
    const height = parseFloat(customCricket.height)
    if (!width || !height) return 0
    return width * height
  }, [customCricket.height, customCricket.width])

  const customBalconyPrice = useMemo(() => {
    if (!customBalconyArea) return 0
    const rate = customBalcony.thickness === '2.5mm' ? RATE_25MM_BALCONY : RATE_2MM_BALCONY
    return customBalconyArea * rate
  }, [customBalcony.thickness, customBalconyArea])

  const customCricketPrice = useMemo(() => {
    if (!customCricketArea) return 0
    const rate = customCricket.thickness === '2.5mm' ? RATE_25MM_CRICKET : RATE_2MM_CRICKET
    return customCricketArea * rate
  }, [customCricket.thickness, customCricketArea])

  return (
    <section
      id="products"
      className="relative py-14 bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0c1a2d] dark:via-[#0b1526] dark:to-[#0f1f3a] transition-colors duration-300"
    >
      <div className="absolute inset-x-4 md:inset-x-6 top-6 bottom-6 rounded-[2rem] bg-white/75 dark:bg-dark-card/70 border border-white/50 dark:border-dark-muted/70 backdrop-blur-xl shadow-[0_25px_60px_rgba(26,86,219,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.32)] -z-10" />
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-700 dark:text-skybrand-light">Products</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-anchor-navy dark:text-dark-text">Our Net Categories</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-dark-muted">
            Choose Balcony, Cricket or Storage nets and then select your package.
          </p>
        </header>

        <CategoryGrid selectedCategory={selectedCategory} onSelect={setSelectedCategory} />

        <div ref={detailsRef}>
          <CategoryDetails
            selectedCategory={selectedCategory}
            onSelectPackage={handleSelectPackage}
            customBalcony={customBalcony}
            customCricket={customCricket}
            customBalconyArea={customBalconyArea}
            customCricketArea={customCricketArea}
            customBalconyPrice={customBalconyPrice}
            customCricketPrice={customCricketPrice}
            onCustomBalconyChange={handleCustomBalconyChange}
            onCustomCricketChange={handleCustomCricketChange}
          />
        </div>

        <SelectedPackageCard
          ref={summaryRef}
          selectedPackage={selectedPackage}
          enquiry={enquiry}
          onEnquiryChange={handleEnquiryChange}
          onReset={handleResetSelection}
        />
      </div>
    </section>
  )
}

function CategoryGrid({ selectedCategory, onSelect }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 perspective-1000">
      {CATEGORY_CARDS.map((card, idx) => (
        <motion.article
          key={card.key}
          initial={{ y: 12, opacity: 0, rotateX: 0, rotateY: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06, duration: 0.35 }}
          style={{ transformStyle: "preserve-3d" }}
          className={`rounded-2xl border ${selectedCategory === card.key ? 'border-skybrand-deep shadow-[0_16px_36px_rgba(13,36,56,0.2)]' : 'border-skybrand-light/70'
            } bg-white/95 dark:bg-[#0f1f3a] text-anchor-navy dark:text-dark-text shadow-[0_12px_26px_rgba(13,36,56,0.12)] p-5 flex flex-col gap-3 transition-all duration-300`}
        >
          <div className="relative h-32 rounded-xl overflow-hidden border border-skybrand-light/60 shadow-sm">
            {card.image ? (
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                loading="lazy"
                animate={{ scale: [1, 1.04, 1], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-skybrand/80 via-white to-skybrand/40" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
            <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/85 text-[11px] font-semibold text-anchor-navy shadow-sm">
              <span>★ {card.rating?.score ?? '4.8'}</span>
              <span className="text-anchor-navy/70 dark:text-dark-text">{card.rating?.label ?? 'Top rated'}</span>
            </div>
            {idx === 0 && (
              <span className="absolute top-2 right-2 text-[11px] px-2 py-1 rounded-full bg-white border border-accent-coral/70 text-accent-coral font-semibold">
                Best Seller
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-skybrand to-skybrand-deep text-white flex items-center justify-center text-sm font-semibold shadow-md">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <span className="text-[11px] font-semibold text-skybrand-deep bg-skybrand-light/70 px-2 py-1 rounded-full border border-skybrand-light">
              {card.cta}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-anchor-navy dark:text-white">{card.title}</h3>
          <p className="text-sm text-anchor-navy/75 dark:text-dark-muted flex-1">{card.description}</p>
          <button
            type="button"
            aria-pressed={selectedCategory === card.key}
            onClick={() => onSelect(card.key)}
            className={`group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold overflow-hidden transition-all duration-300 ${selectedCategory === card.key
              ? 'bg-gradient-to-r from-skybrand to-skybrand-deep text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)] ring-2 ring-skybrand/60'
              : 'border border-skybrand-light bg-white text-anchor-navy hover:-translate-y-[1px] hover:shadow-[0_12px_24px_rgba(13,36,56,0.16)] hover:border-skybrand'
              }`}
          >
            <span className="mr-1 text-base leading-none">•</span>
            {selectedCategory === card.key ? 'Selected' : card.cta}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">→</span>
          </button>
        </motion.article>
      ))}
    </div>
  )
}

function CategoryDetails({
  selectedCategory,
  onSelectPackage,
  customBalcony,
  customCricket,
  customBalconyArea,
  customCricketArea,
  customBalconyPrice,
  customCricketPrice,
  onCustomBalconyChange,
  onCustomCricketChange,
}) {
  if (!selectedCategory) {
    return (
      <CategoryPlaceholder />
    )
  }

  if (selectedCategory === 'balcony') {
    return (
      <BalconyPackages
        onSelectPackage={onSelectPackage}
        custom={customBalcony}
        customArea={customBalconyArea}
        customPrice={customBalconyPrice}
        onCustomChange={onCustomBalconyChange}
      />
    )
  }

  if (selectedCategory === 'cricket') {
    return (
      <CricketPackages
        onSelectPackage={onSelectPackage}
        custom={customCricket}
        customArea={customCricketArea}
        customPrice={customCricketPrice}
        onCustomChange={onCustomCricketChange}
      />
    )
  }

  if (selectedCategory === 'storage') {
    return <StoragePackages onSelectPackage={onSelectPackage} />
  }

  return <StoragePlaceholder />
}

function CategoryPlaceholder() {
  const placeholders = [
    {
      title: 'Balcony Net Combos',
      desc: 'Pre-bundled balcony kits with rope, hooks and finishing are on the way.',
      image: '/ba7.png',
    },
    {
      title: 'Anti-Bird Premium Nets',
      desc: 'Higher UV + flame-retardant bird nets will be added shortly.',
      image: '/cricket.2.jpg',
    },
    {
      title: 'Storage / Cargo Sizes',
      desc: 'Ready-made loft and warehouse storage nets are launching next.',
      image: '/gallery-storage-4.webp',
    },
  ]

  const gradients = [
    'from-skybrand/80 via-white/85 to-skybrand-deep/60',
    'from-emerald-300/70 via-white/80 to-skybrand/70',
    'from-amber-300/70 via-white/80 to-accent-coral/70',
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {placeholders.map((item, idx) => (
        <article
          key={item.title}
          className="rounded-2xl border border-skybrand-light/70 dark:border-dark-muted bg-white/90 dark:bg-[#0f1f3a]/85 shadow-[0_12px_24px_rgba(13,36,56,0.12)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.28)] overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
        >
          <div className={`relative h-32 bg-gradient-to-br ${gradients[idx % gradients.length]} dark:from-[#0f315a]/80 dark:via-[#0b1e38]/80 dark:to-[#0c2442]/80`}>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-white/85 dark:bg-dark-card/80 px-2.5 py-1 text-[11px] font-semibold text-skybrand-deep dark:text-dark-text border border-white/70 dark:border-dark-muted">
              Product Upcoming
            </span>
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/10 dark:bg-white/10 px-2 py-1 text-[10px] font-semibold text-anchor-navy dark:text-dark-text backdrop-blur">
              Coming soon
            </span>
          </div>
          <div className="p-4 space-y-2">
            <h4 className="text-base font-semibold text-anchor-navy dark:text-dark-text">{item.title}</h4>
            <p className="text-sm text-anchor-navy/75 dark:text-dark-muted">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function BalconyPackages({ onSelectPackage, custom, customArea, customPrice, onCustomChange }) {
  const renderBalconyVisual = (sizeSqFt, photoSrc) => (
    <div className="relative h-40 rounded-xl overflow-hidden border border-skybrand-light/80 shadow-sm">
      {photoSrc && (
        <img
          src={photoSrc}
          alt={`Balcony net ${sizeSqFt} sq.ft visual`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-skybrand-deep">Balcony Packages</p>
          <h3 className="text-xl font-semibold text-anchor-navy dark:text-dark-text">Standard sizes + custom calculator</h3>
        </div>
        <span className="text-xs text-anchor-navy/70 dark:text-dark-muted">Tap Select to add to enquiry</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {BALCONY_SIZES.map((sizeSqFt) => {
          const price2mm = sizeSqFt * RATE_2MM_BALCONY
          const price25mm = sizeSqFt * RATE_25MM_BALCONY
          const photoSrc = BALCONY_IMAGE_MAP[sizeSqFt]

          return (
            <article
              key={sizeSqFt}
              className="rounded-2xl border border-skybrand-light/70 dark:border-dark-muted/60 bg-white dark:bg-[#0f1f3a] text-anchor-navy dark:text-dark-text shadow-[0_12px_30px_rgba(13,36,56,0.1)] dark:shadow-[0_14px_32px_rgba(0,0,0,0.35)] p-4 space-y-3 hover:-translate-y-[2px] transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-skybrand-deep font-semibold">Typical Balcony Size</p>
                  <h4 className="text-lg font-semibold text-anchor-navy dark:text-dark-text">{sizeSqFt} sq.ft</h4>
                </div>
                <span className="text-[11px] text-anchor-navy/70 dark:text-dark-muted px-3 py-1 rounded-full bg-skybrand-light/60 border border-white/60">
                  Rope, stitch & hooks included
                </span>
              </div>

              {photoSrc ? (
                renderBalconyVisual(sizeSqFt, photoSrc)
              ) : (
                <div className="h-40 rounded-xl border border-skybrand-light/60 bg-gradient-to-br from-skybrand/20 via-white to-skybrand/10 flex items-center justify-center text-sm text-anchor-navy/70 dark:text-dark-text font-semibold">
                  Balcony visual coming soon
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PackageOption
                  label="2 mm Balcony Net"
                  price={price2mm}
                  rate={RATE_2MM_BALCONY}
                  sizeNote={`${sizeSqFt} sq.ft · Balcony · ₹${RATE_2MM_BALCONY}/sq.ft`}
                  buttonText="Select 2mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'balcony',
                      title: `${sizeSqFt} sq.ft Balcony Net`,
                      sizeSqFt,
                      thicknessMm: 2,
                      ratePerSqFt: RATE_2MM_BALCONY,
                      totalPrice: price2mm,
                    })
                  }
                />
                <PackageOption
                  label="2.5 mm Balcony Net"
                  price={price25mm}
                  rate={RATE_25MM_BALCONY}
                  sizeNote={`${sizeSqFt} sq.ft · Balcony · ₹${RATE_25MM_BALCONY}/sq.ft`}
                  buttonText="Select 2.5mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'balcony',
                      title: `${sizeSqFt} sq.ft Balcony Net`,
                      sizeSqFt,
                      thicknessMm: 2.5,
                      ratePerSqFt: RATE_25MM_BALCONY,
                      totalPrice: price25mm,
                    })
                  }
                />
              </div>
            </article>
          )
        })}

        <CustomBalconyCard
          custom={custom}
          customArea={customArea}
          customPrice={customPrice}
          onCustomChange={onCustomChange}
          onSelectPackage={onSelectPackage}
        />
      </div>
    </div>
  )
}

function CricketPackages({ onSelectPackage, custom, customArea, customPrice, onCustomChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-emerald-700">Cricket / Sports</p>
          <h3 className="text-xl font-semibold text-anchor-navy dark:text-dark-text">Practice cages, ball stoppers & custom sizes</h3>
        </div>
        <span className="text-xs text-anchor-navy/70 dark:text-dark-muted">Select to add to enquiry</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CRICKET_PACKAGES.map((product) => {
          const sqft =
            product.sizeSqFt ||
            (product.widthFt && product.heightFt ? product.widthFt * product.heightFt : product.typicalSqFt || 0)
          const price2 = sqft * RATE_2MM_CRICKET
          const price25 = sqft * RATE_25MM_CRICKET

          return (
            <article
              key={product.id}
              className="rounded-2xl border border-emerald-200 dark:border-dark-muted/60 bg-white/95 dark:bg-[#0f1f3a] text-anchor-navy dark:text-dark-text shadow-[0_14px_32px_rgba(16,94,70,0.12)] dark:shadow-[0_14px_32px_rgba(0,0,0,0.35)] p-4 space-y-3 hover:-translate-y-[2px] transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] text-emerald-700 font-semibold">Cricket Package</p>
                  <h4 className="text-lg font-semibold text-anchor-navy dark:text-dark-text">{product.name}</h4>
                  <p className="text-xs text-anchor-navy/70 dark:text-dark-muted">{product.description}</p>
                  {product.widthFt && product.heightFt && (
                    <p className="text-xs text-emerald-700 font-semibold mt-1">
                      Size: {product.widthFt} ft × {product.heightFt} ft
                    </p>
                  )}
                </div>
                <span className="text-[11px] text-emerald-700 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  ~{sqft} sq.ft
                </span>
              </div>

              {product.image && (
                <div className="relative h-36 rounded-xl overflow-hidden border border-emerald-100 shadow-sm">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  {product.widthFt && product.heightFt && (
                    <span className="absolute bottom-2 right-2 text-[11px] font-semibold px-2 py-1 rounded-full bg-white/90 text-emerald-800 border border-white/70 shadow-sm">
                      {product.widthFt} ft × {product.heightFt} ft
                    </span>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PackageOption
                  label="2 mm Sports Net"
                  price={price2}
                  rate={RATE_2MM_CRICKET}
                  sizeNote={
                    product.widthFt && product.heightFt
                      ? `${product.name} · ${product.widthFt} ft × ${product.heightFt} ft · ₹${RATE_2MM_CRICKET}/sq.ft`
                      : `${product.name} · ₹${RATE_2MM_CRICKET}/sq.ft`
                  }
                  buttonText="Select 2mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'cricket',
                      id: product.id,
                      title: product.name,
                      sizeSqFt: sqft,
                      thicknessMm: 2,
                      ratePerSqFt: RATE_2MM_CRICKET,
                      totalPrice: price2,
                    })
                  }
                />
                <PackageOption
                  label="2.5 mm Sports Net"
                  price={price25}
                  rate={RATE_25MM_CRICKET}
                  sizeNote={
                    product.widthFt && product.heightFt
                      ? `${product.name} · ${product.widthFt} ft × ${product.heightFt} ft · ₹${RATE_25MM_CRICKET}/sq.ft`
                      : `${product.name} · ₹${RATE_25MM_CRICKET}/sq.ft`
                  }
                  buttonText="Select 2.5mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'cricket',
                      id: product.id,
                      title: product.name,
                      sizeSqFt: sqft,
                      thicknessMm: 2.5,
                      ratePerSqFt: RATE_25MM_CRICKET,
                      totalPrice: price25,
                    })
                  }
                />
              </div>
            </article>
          )
        })}

        <CustomCricketCard
          custom={custom}
          customArea={customArea}
          customPrice={customPrice}
          onCustomChange={onCustomChange}
        />
      </div>
    </div>
  )
}

function StoragePackages({ onSelectPackage }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-amber-700">Storage / Utility</p>
          <h3 className="text-xl font-semibold text-anchor-navy dark:text-dark-text">Storage nets with ready size visuals</h3>
        </div>
        <span className="text-xs text-anchor-navy/70 dark:text-dark-muted">Select to add to enquiry</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {STORAGE_PACKAGES.map((product) => {
          const totalPrice = product.fixedPrice ?? product.typicalSqFt * RATE_3MM_STORAGE
          const handleWhatsappStorage = () => {
            const message = `
Storage Net Enquiry:

Product: ${product.name}
Size: ${product.typicalSqFt} sq.ft
Price: ${currency(totalPrice)}

Please call back to confirm installation slot.
            `

            openWhatsappWithMessage(message)
          }

          return (
            <article
              key={product.id}
              className="rounded-2xl border border-amber-200 dark:border-dark-muted/60 bg-white dark:bg-[#0f1f3a] text-anchor-navy dark:text-dark-text shadow-[0_12px_28px_rgba(180,83,9,0.1)] dark:shadow-[0_14px_32px_rgba(0,0,0,0.35)] p-4 space-y-3 hover:-translate-y-[2px] transition"
            >
              {product.image && (
                <div className="relative h-56 rounded-xl overflow-hidden border border-amber-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-[11px] text-amber-700 font-semibold uppercase tracking-[0.12em]">Storage Net</p>
                  <h4 className="text-lg font-semibold text-anchor-navy dark:text-dark-text">{product.name}</h4>
                </div>
                <span className="text-xl font-bold text-anchor-navy dark:text-dark-text">{currency(totalPrice)}</span>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg transition gap-2"
                onClick={handleWhatsappStorage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                  <path d="M16 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.35.614 4.64 1.78 6.667L2.667 29.333l6.802-1.745A13.28 13.28 0 0 0 16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667Zm0 24A10.63 10.63 0 0 1 10.03 25.3l-.214-.128-4.056 1.041 1.076-3.957-.137-.235a10.626 10.626 0 0 1-1.532-5.02c0-5.876 4.793-10.667 10.667-10.667 5.876 0 10.667 4.79 10.667 10.667 0 5.874-4.79 10.667-10.667 10.667Zm5.86-7.94c-.32-.16-1.89-.93-2.185-1.035-.293-.108-.508-.16-.723.158-.213.32-.828 1.032-1.014 1.247-.186.213-.374.24-.694.08-.32-.16-1.353-.498-2.578-1.586-.95-.848-1.59-1.894-1.778-2.214-.186-.32-.02-.49.14-.65.14-.14.32-.374.48-.56.16-.186.213-.32.32-.534.107-.213.054-.4-.027-.56-.08-.16-.723-1.744-.992-2.392-.26-.626-.526-.54-.723-.55-.186-.013-.4-.013-.614-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.574 1.147 3.094 1.306 3.307.16.213 2.254 3.44 5.46 4.72.764.33 1.36.525 1.82.672.765.243 1.46.208 2.013.126.614-.094 1.89-.772 2.16-1.52.267-.747.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
                </svg>
                WhatsApp Enquiry
              </button>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function PackageOption({ label, price, rate, buttonText, onSelect, sizeNote }) {
  return (
    <div className="rounded-xl border border-slate-100 dark:border-dark-muted/50 bg-slate-50/50 dark:bg-[#0a1627] p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition">
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-anchor-navy dark:text-dark-text">{label}</p>
        {sizeNote && <p className="text-xs text-anchor-navy/70 dark:text-dark-muted">{sizeNote}</p>}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-xl font-bold text-anchor-navy dark:text-dark-text leading-tight">{currency(price)}</p>
        <span className="text-[11px] text-anchor-navy/70 dark:text-dark-text px-3 py-1 rounded-full bg-white dark:bg-[#132a4a] border border-skybrand-light dark:border-dark-muted/60">
          ₹{rate}/sq.ft
        </span>
      </div>

      <div className="flex gap-2">
        <button type="button" className={ENQUIRY_BTN_CLASSES} onClick={onSelect}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

function CustomBalconyCard({ custom, customArea, customPrice, onCustomChange, onSelectPackage }) {
  const rate = custom.thickness === '2.5mm' ? RATE_25MM_BALCONY : RATE_2MM_BALCONY
  const canSelect = customArea > 0
  const fallbackDims = { width: 12, height: 10 }
  const previewWidth = parseFloat(custom.width) || fallbackDims.width
  const previewHeight = parseFloat(custom.height) || fallbackDims.height
  const previewArea = customArea || 120
  const customBgImage = '/ba6.png'

  const handleSelectCustom = () => {
    if (!canSelect) {
      alert('Enter width and height to calculate your custom size first')
      return
    }

    onSelectPackage({
      category: 'balcony',
      title: 'Custom Balcony Net',
      sizeSqFt: Number(customArea.toFixed(1)),
      thicknessMm: custom.thickness === '2.5mm' ? 2.5 : 2,
      ratePerSqFt: rate,
      totalPrice: Math.round(customPrice),
    })
  }

  const handleWhatsappCustom = () => {
    if (!canSelect) {
      alert('Enter width and height to calculate your custom size first')
      return
    }

    const message = `
Custom Balcony Net Request:

Width: ${custom.width} ft
Height: ${custom.height} ft
Thickness: ${custom.thickness}
Area: ${customArea.toFixed(1)} sq.ft
Estimated Price: ${currency(Math.round(customPrice))}

Please call back to confirm installation slot.
    `

    openWhatsappWithMessage(message)
  }

  return (
    <article className="relative overflow-hidden rounded-2xl border border-skybrand-light/80 dark:border-dark-muted bg-white/90 dark:bg-dark-card/80 text-anchor-navy dark:text-dark-text shadow-xl shadow-skybrand/15 p-5 flex flex-col gap-4 hover:bg-sky-50/90 dark:hover:bg-dark-card/70 transition-all duration-300">
      <div className="h-48 rounded-xl overflow-hidden border border-white/80 dark:border-dark-muted shadow-sm">
        <img src={customBgImage} alt="Balcony net visual" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-4">
        <div className="relative">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-skybrand/40 to-emerald-100 text-skybrand-deep text-[11px] font-semibold px-3 py-1 border border-white/80 shadow-sm">
            Custom Balcony
          </span>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold text-anchor-navy dark:text-dark-text">Custom Balcony Size</h4>
          <p className="text-sm text-slate-600 dark:text-dark-muted">Enter width x height to estimate your balcony net cost.</p>
        </div>
       
        <div className="grid grid-cols-2 gap-3">
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Width (ft)
            <input
              type="number"
              value={custom.width}
              onChange={(e) => onCustomChange('width', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 12"
            />
          </label>
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Height (ft)
            <input
              type="number"
              value={custom.height}
              onChange={(e) => onCustomChange('height', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 10"
            />
          </label>
          <label className="col-span-2 text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Net thickness
            <select
              value={custom.thickness}
              onChange={(e) => onCustomChange('thickness', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option value="2mm">2mm</option>
              <option value="2.5mm">2.5mm</option>
            </select>
          </label>
        </div>
        <div className="rounded-lg bg-sky-50 dark:bg-dark-card/70 px-3 py-2 text-sm text-skybrand-deep dark:text-dark-text flex flex-col gap-1 border border-emerald-100 dark:border-dark-muted">
          <span>
            Calculated Area: <strong>{customArea ? `${customArea.toFixed(1)} sq.ft` : '—'}</strong>
          </span>
          <span>
            Estimated Price:{' '}
            <strong>{customPrice ? currency(Math.round(customPrice)) : '—'}</strong>
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            className={`${ENQUIRY_BTN_CLASSES} sm:col-span-2`}
            onClick={handleSelectCustom}
          >
            Select Custom Balcony<span className="text-xs">→</span>
          </button>
          
        </div>
      </div>
    </article>
  )
}

function CustomCricketCard({ custom, customArea, customPrice, onCustomChange }) {
  const customRate = custom.thickness === '2.5mm' ? RATE_25MM_CRICKET : RATE_2MM_CRICKET
  const canSelectCustom = customArea > 0
  const fallbackDims = { width: 12, height: 10 }
  const previewWidth = parseFloat(custom.width) || fallbackDims.width
  const previewHeight = parseFloat(custom.height) || fallbackDims.height
  const previewArea = customArea || 120
  const customBgImage = '/cricket big.png'
  const handlePresetFill = (preset) => {
    onCustomChange('width', String(preset.width))
    onCustomChange('height', String(preset.height))
  }
  const handleWhatsappCustomCricket = () => {
    if (!canSelectCustom) {
      alert('Enter width and height to calculate your custom size first')
      return
    }

    const message = `
Custom Cricket Net Request:

Width: ${custom.width} ft
Height: ${custom.height} ft
Thickness: ${custom.thickness}
Area: ${customArea.toFixed(1)} sq.ft
Rate: ₹${customRate} per sq.ft
Estimated Price: ${currency(Math.round(customPrice))}

Please call back to confirm installation slot.
    `

    openWhatsappWithMessage(message)
  }

  return (
    <article className="relative overflow-hidden rounded-2xl border border-emerald-200 dark:border-dark-muted bg-white/90 dark:bg-dark-card/80 text-anchor-navy dark:text-dark-text shadow-xl shadow-emerald-50 p-5 flex flex-col gap-4 hover:bg-sky-50/90 dark:hover:bg-dark-card/70 transition-all duration-300">
      <div className="relative h-48 rounded-xl overflow-hidden border border-emerald-100 dark:border-dark-muted shadow-sm">
        <img src={customBgImage} alt="Cricket practice visual" className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute bottom-2 right-2 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-emerald-800 border border-white/70 shadow-sm">
          Sample: 12 ft × 10 ft
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-800 text-[11px] font-semibold px-3 py-1 border border-white/80 shadow-sm">
            Custom Practice
          </span>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold text-anchor-navy dark:text-dark-text">Custom Cricket Size</h4>
          <p className="text-sm text-slate-600 dark:text-dark-muted">Enter width x height to estimate your sports net cost.</p>
        </div>
       
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-semibold text-emerald-800">Quick measurements:</span>
          {CRICKET_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handlePresetFill(preset)}
              className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-semibold text-anchor-navy hover:border-emerald-500 hover:text-emerald-700 transition"
            >
              {preset.label} · {preset.width}×{preset.height} ft
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Width (ft)
            <input
              type="number"
              value={custom.width}
              onChange={(e) => onCustomChange('width', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 12"
            />
          </label>
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Height (ft)
            <input
              type="number"
              value={custom.height}
              onChange={(e) => onCustomChange('height', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 10"
            />
          </label>
          <label className="col-span-2 text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Net thickness
            <select
              value={custom.thickness}
              onChange={(e) => onCustomChange('thickness', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option value="2mm">2mm</option>
              <option value="2.5mm">2.5mm</option>
            </select>
          </label>
        </div>
        <div className="rounded-lg bg-emerald-50 dark:bg-dark-card/70 px-3 py-2 text-sm text-emerald-700 dark:text-dark-text flex flex-col gap-1 border border-emerald-100 dark:border-dark-muted">
          <span>
            Calculated Area: <strong>{customArea ? `${customArea.toFixed(1)} sq.ft` : '—'}</strong>
          </span>
          <span>
            Estimated Price:{' '}
            <strong>{customPrice ? currency(Math.round(customPrice)) : '—'}</strong>
          </span>
        </div>
        <button
          type="button"
          className="w-full mt-1 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-blue-600 text-white shadow-md hover:bg-green-600 active:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={handleWhatsappCustomCricket}
        >
          WhatsApp Enquiry
        </button>
      </div>
    </article>
  )
}

function StoragePlaceholder() {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-anchor-navy">Storage / Cargo / Utility Nets</h3>
      <p className="text-sm text-anchor-navy/75">
        3mm storage, cargo and fishing nets coming soon. This section mirrors the structure above so you can plug in new data easily.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-skybrand-light/70 bg-white shadow-[0_12px_30px_rgba(13,36,56,0.1)] p-4 space-y-2">
          <div className="h-32 rounded-xl bg-neutral-beige/60 border border-skybrand-light/60 flex items-center justify-center text-xs text-anchor-navy/60">
            Storage net image placeholder
          </div>
          <h4 className="text-base font-semibold text-anchor-navy">3mm Storage / Cargo Net – Coming Soon</h4>
          <p className="text-xs text-anchor-navy/75">Add SKUs, rates and thickness options similar to balcony/cricket cards.</p>
          <button
            type="button"
            className="rounded-full bg-skybrand text-anchor-navy px-4 py-2 text-sm font-semibold shadow-soft"
            onClick={() => console.log('Storage net enquiry placeholder')}
          >
            Notify Me
          </button>
        </article>
        <article className="rounded-2xl border border-dashed border-skybrand-deep/60 bg-white shadow-[0_12px_30px_rgba(13,36,56,0.1)] p-4 space-y-2 flex items-center justify-center text-anchor-navy/60 text-sm">
          Duplicate this card layout and plug in future storage / cargo / fishing data.
        </article>
      </div>
    </div>
  )
}

const SelectedPackageCard = React.forwardRef(function SelectedPackageCard(
  { selectedPackage, enquiry, onEnquiryChange, onReset },
  ref,
) {
  if (!selectedPackage) return null

  const isCustomCricket =
    selectedPackage.category === 'cricket' &&
    (!selectedPackage.id || selectedPackage.title?.toLowerCase().includes('custom'))

  // Builds WhatsApp enquiry payload; keep simple validation for name/phone.
  const [hookChoice, setHookChoice] = useState(HOOK_OPTIONS[0].id)
  const [hookQuantity, setHookQuantity] = useState('')

  const hookChoiceData = HOOK_OPTIONS.find((h) => h.id === hookChoice) ?? HOOK_OPTIONS[0]
  const hookEligible = selectedPackage.category === 'balcony' || selectedPackage.category === 'cricket'
  const estimatedHookCount = hookEligible && selectedPackage.sizeSqFt ? Math.max(0, Math.round(selectedPackage.sizeSqFt * 1.2)) : 0

  useEffect(() => {
    if (hookEligible) {
      setHookQuantity(estimatedHookCount ? String(estimatedHookCount) : '')
    } else {
      setHookQuantity('')
    }
  }, [hookEligible, estimatedHookCount, selectedPackage?.title])

  const hookCount = hookEligible ? Math.max(0, Number(hookQuantity) || 0) : 0
  const hookCost = hookChoiceData.rate * hookCount
  const totalWithHooks = Math.round(selectedPackage.totalPrice + hookCost)

  const handleWhatsappEnquiry = () => {
    const name = enquiry.name?.trim()
    const phoneNumber = enquiry.phone?.trim()
    if (!name || !phoneNumber) {
      alert('Please enter your name and phone number')
      return
    }

    const message = `
Hello, I want to enquire about this package:

Category: ${selectedPackage.category}
Product: ${selectedPackage.title}
Size: ${selectedPackage.sizeSqFt || 'Custom'} sq.ft
Thickness: ${selectedPackage.thicknessMm}mm
Rate: ₹${selectedPackage.ratePerSqFt} per sq.ft
Base Price: ₹${selectedPackage.totalPrice}
Hook Option: ${hookChoiceData.label} (x${hookCount || estimatedHookCount || 0} = ₹${hookCost})
Total with hook selection: ₹${totalWithHooks || selectedPackage.totalPrice}

Customer Details:
Name: ${name}
Phone: ${phoneNumber}
Location: ${enquiry.location || '-'}
Notes: ${enquiry.notes || '-'}
    `

    openWhatsappWithMessage(message)
  }

  const handleWhatsappCustomCricket = () => {
    const message = `
Custom Cricket Net Selection:

Size: ${selectedPackage.sizeSqFt ? `${selectedPackage.sizeSqFt} sq.ft` : 'Custom size'}
Thickness: ${selectedPackage.thicknessMm}mm
Rate: ₹${selectedPackage.ratePerSqFt} per sq.ft
Estimated Total: ₹${selectedPackage.totalPrice}
Hook Option: ${hookChoiceData.label} (x${hookCount || estimatedHookCount || 0} = ₹${hookCost})
Total with hook selection: ₹${totalWithHooks || selectedPackage.totalPrice}

Please call back to confirm installation slot.
    `

    openWhatsappWithMessage(message)
  }

  return (
    <article
      ref={ref}
      className="rounded-2xl border border-anchor-navy/10 dark:border-dark-muted/60 bg-white/95 dark:bg-[#0f1f3a] text-anchor-navy dark:text-dark-text shadow-[0_16px_40px_rgba(13,36,56,0.15)] dark:shadow-[0_16px_42px_rgba(0,0,0,0.38)] p-5 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-skybrand-deep uppercase tracking-[0.16em]">Selected Package</p>
          <h3 className="text-xl font-semibold text-anchor-navy dark:text-dark-text">
            {selectedPackage.title || 'Custom Package'} · {selectedPackage.sizeSqFt || 'Custom'} sq.ft
          </h3>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-anchor-navy/70 dark:text-dark-muted underline decoration-dotted"
          onClick={onReset}
        >
          Reset
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="rounded-xl border border-skybrand-light/70 bg-skybrand-light/40 dark:bg-dark-card/80 dark:border-dark-muted p-3 space-y-1 transition-colors duration-200">
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy dark:text-dark-text">
            <span>Thickness</span>
            <span>{selectedPackage.thicknessMm} mm</span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy dark:text-dark-text">
            <span>Rate per sq.ft</span>
            <span>₹{selectedPackage.ratePerSqFt}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy dark:text-dark-text">
            <span>Base Price</span>
            <span>{currency(selectedPackage.totalPrice)}</span>
          </div>
          {hookEligible && (
            <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy dark:text-dark-text">
              <span>Hook Cost</span>
              <span>{currency(hookCost)}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy dark:text-dark-text">
            <span>Total with hook</span>
            <span>{currency(totalWithHooks)}</span>
          </div>
          <div className="pt-2 border-t border-white/60 dark:border-dark-muted flex flex-col gap-2">
            <span className="text-xs font-semibold text-anchor-navy/80 dark:text-dark-text">Hook option</span>
            <div className="flex flex-wrap gap-2">
              {HOOK_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setHookChoice(opt.id)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold border transition ${
                    hookChoice === opt.id
                      ? 'bg-gradient-to-r from-skybrand to-skybrand-deep text-white shadow-[0_10px_22px_rgba(14,165,233,0.35)]'
                      : 'bg-white/80 dark:bg-dark-card/70 text-anchor-navy dark:text-dark-text border-skybrand-light/70 dark:border-dark-muted hover:border-skybrand'
                  }`}
                >
                  {opt.badge}
                </button>
              ))}
            </div>
            {hookEligible && (
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-anchor-navy/80 dark:text-dark-text">
                  How many hooks? (default uses size estimate)
                  <input
                    type="number"
                    min="0"
                    value={hookQuantity}
                    onChange={(e) => setHookQuantity(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 dark:border-dark-muted bg-white/90 dark:bg-dark-card/70 px-3 py-1.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder={estimatedHookCount ? `${estimatedHookCount}` : 'e.g. 40'}
                  />
                </label>
                <p className="text-[11px] text-anchor-navy/70 dark:text-dark-muted">
                  Default is No Hook. Pick Standard (₹6) or SS (₹28) and set quantity to include hook supply.
                </p>
                <div className="text-[11px] text-anchor-navy/75 dark:text-dark-text space-y-0.5">
                  <div>Hooks counted: {hookCount || 0}</div>
                  <div>Hook cost: {currency(hookCost)}</div>
                  <div className="font-semibold">Total with hook: {currency(totalWithHooks)}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-dark-muted/60 bg-white dark:bg-[#0a1627] p-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
              Name
              <input
                type="text"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={enquiry.name}
                onChange={(e) => onEnquiryChange('name', e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
              Phone / WhatsApp
              <input
                type="tel"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={enquiry.phone}
                onChange={(e) => onEnquiryChange('phone', e.target.value)}
                placeholder="Your phone"
              />
            </label>
          </div>
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Location
            <input
              type="text"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              value={enquiry.location}
              onChange={(e) => onEnquiryChange('location', e.target.value)}
              placeholder="City / Area"
            />
          </label>
          <label className="text-xs text-anchor-navy/80 dark:text-dark-text space-y-1">
            Notes
            <textarea
              rows={2}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              value={enquiry.notes}
              onChange={(e) => onEnquiryChange('notes', e.target.value)}
              placeholder="Share balcony photos or installation notes"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className={ENQUIRY_BTN_CLASSES} onClick={handleWhatsappEnquiry}>
          Send WhatsApp Enquiry
        </button>
        {isCustomCricket && (
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md hover:shadow-lg transition"
            onClick={handleWhatsappCustomCricket}
          >
            Custom Cricket WhatsApp
          </button>
        )}
      </div>
    </article>
  )
})
