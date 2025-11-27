import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// All dummy data lives at the top so it is easy to replace with API responses later.
// TODO: Replace with API calls to Spring Boot once endpoints are ready.
const WHATSAPP_NUMBER = '919789702356'
const CATEGORY_CARDS = [
  {
    key: 'balcony',
    title: 'Balcony Safety Nets',
    description: 'Child-safe, pet-safe balcony protection with pro installation.',
    cta: 'View Balcony Packages',
  },
  {
    key: 'cricket',
    title: 'Cricket Practice & Sports Nets',
    description: 'Cage nets, ball stoppers and terrace practice setups.',
    cta: 'View Cricket Packages',
  },
  {
    key: 'storage',
    title: 'Storage / Cargo / Utility Nets',
    description: 'Heavy-duty storage nets. Fill data later.',
    cta: 'View Storage Packages',
  },
]

const BALCONY_SIZES = [60, 70, 80, 90, 100]
const RATE_2MM_BALCONY = 24
const RATE_25MM_BALCONY = 28
const openWhatsappWithMessage = (message) => {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
}

const CRICKET_PACKAGES = [
  {
    id: 'cage',
    name: 'Cricket Practice Cage Net',
    description: 'Full cage for terrace/backyard cricket drills with rope borders.',
    typicalSqFt: 200,
  },
  {
    id: 'ball-stopper',
    name: 'Cricket Ball Stopper Net',
    description: 'Net behind the batsman to stop balls in small grounds or terraces.',
    typicalSqFt: 120,
  },
  {
    id: 'boundary',
    name: 'Side Boundary / Apartment Ball Stopper Net',
    description: 'Side protection for apartments or cages to prevent ball loss.',
    typicalSqFt: 150,
  },
]
const RATE_2MM_CRICKET = 26
const RATE_25MM_CRICKET = 30

const currency = (value) => `₹${value.toLocaleString('en-IN')}`
const ENQUIRY_BTN_CLASSES =
  'w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-emerald-500 hover:to-green-600 active:from-green-700 active:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300'

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
    <section id="products" className="relative py-14 bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-x-4 md:inset-x-6 top-6 bottom-6 rounded-[2rem] bg-white/75 backdrop-blur-xl shadow-[0_25px_60px_rgba(26,86,219,0.08)] -z-10" />
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-700">Products</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-anchor-navy">Our Net Categories</h2>
          <p className="text-sm md:text-base text-slate-600">
            Choose Balcony or Cricket nets and then select your package.
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
    <div className="grid md:grid-cols-3 gap-4">
      {CATEGORY_CARDS.map((card, idx) => (
        <motion.article
          key={card.key}
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06, duration: 0.35 }}
          className={`rounded-2xl border ${
            selectedCategory === card.key ? 'border-skybrand-deep shadow-[0_16px_36px_rgba(13,36,56,0.2)]' : 'border-skybrand-light/70'
          } bg-white/95 shadow-[0_12px_26px_rgba(13,36,56,0.12)] p-5 flex flex-col gap-3 hover:-translate-y-[2px] transition`}
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-skybrand to-skybrand-deep text-white flex items-center justify-center text-sm font-semibold shadow-md">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <span className="text-[11px] font-semibold text-skybrand-deep bg-skybrand-light/70 px-2 py-1 rounded-full border border-skybrand-light">
              {card.cta}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-anchor-navy">{card.title}</h3>
          <p className="text-sm text-anchor-navy/75 flex-1">{card.description}</p>
          <button
            type="button"
            onClick={() => onSelect(card.key)}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
              selectedCategory === card.key
                ? 'bg-skybrand-deep text-white shadow-md'
                : 'border border-skybrand-light text-anchor-navy hover:bg-skybrand/20'
            } transition`}
          >
            {selectedCategory === card.key ? 'Selected' : card.cta}
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
      <div className="text-center py-12 text-sm text-anchor-navy/70">
        Pick a category to view packages and custom sizing.
      </div>
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

  return <StoragePlaceholder />
}

function BalconyPackages({ onSelectPackage, custom, customArea, customPrice, onCustomChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-skybrand-deep">Balcony Packages</p>
          <h3 className="text-xl font-semibold text-anchor-navy">Standard sizes + custom calculator</h3>
        </div>
        <span className="text-xs text-anchor-navy/70">Tap Select to add to enquiry</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {BALCONY_SIZES.map((sizeSqFt) => {
          const price2mm = sizeSqFt * RATE_2MM_BALCONY
          const price25mm = sizeSqFt * RATE_25MM_BALCONY

          return (
            <article
              key={sizeSqFt}
              className="rounded-2xl border border-skybrand-light/70 bg-white shadow-[0_12px_30px_rgba(13,36,56,0.1)] p-4 space-y-3 hover:-translate-y-[2px] transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-skybrand-deep font-semibold">Typical Balcony Size</p>
                  <h4 className="text-lg font-semibold text-anchor-navy">{sizeSqFt} sq.ft</h4>
                </div>
                <span className="text-[11px] text-anchor-navy/70 px-3 py-1 rounded-full bg-skybrand-light/60 border border-white/60">
                  Rope, stitch & hooks included
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PackageOption
                  label="2 mm Balcony Net"
                  price={price2mm}
                  rate={RATE_2MM_BALCONY}
                  buttonText="Select 2mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'balcony',
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
                  buttonText="Select 2.5mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'balcony',
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
          onWhatsappQuickEnquiry={onWhatsappQuickEnquiry}
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
          <h3 className="text-xl font-semibold text-anchor-navy">Practice cages, ball stoppers & custom sizes</h3>
        </div>
        <span className="text-xs text-anchor-navy/70">Select to add to enquiry</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CRICKET_PACKAGES.map((product) => {
          const price2 = product.typicalSqFt * RATE_2MM_CRICKET
          const price25 = product.typicalSqFt * RATE_25MM_CRICKET

          return (
            <article
              key={product.id}
              className="rounded-2xl border border-emerald-200 bg-white/95 shadow-[0_14px_32px_rgba(16,94,70,0.12)] p-4 space-y-3 hover:-translate-y-[2px] transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] text-emerald-700 font-semibold">Cricket Package</p>
                  <h4 className="text-lg font-semibold text-anchor-navy">{product.name}</h4>
                  <p className="text-xs text-anchor-navy/70">{product.description}</p>
                </div>
                <span className="text-[11px] text-emerald-700 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  ~{product.typicalSqFt} sq.ft
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PackageOption
                  label="2 mm Sports Net"
                  price={price2}
                  rate={RATE_2MM_CRICKET}
                  buttonText="Select 2mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'cricket',
                      id: product.id,
                      title: product.name,
                      sizeSqFt: product.typicalSqFt,
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
                  buttonText="Select 2.5mm Package"
                  onSelect={() =>
                    onSelectPackage({
                      category: 'cricket',
                      id: product.id,
                      title: product.name,
                      sizeSqFt: product.typicalSqFt,
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

function PackageOption({ label, price, rate, buttonText, onSelect }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 flex flex-col gap-2 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-anchor-navy/70 font-semibold">{label}</p>
          <p className="text-base font-semibold text-anchor-navy">{currency(price)}</p>
        </div>
        <span className="text-[11px] text-anchor-navy/70 px-3 py-1 rounded-full bg-white border border-skybrand-light">
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

function CustomBalconyCard({ custom, customArea, customPrice, onCustomChange, onSelectPackage, onWhatsappQuickEnquiry }) {
  const rate = custom.thickness === '2.5mm' ? RATE_25MM_BALCONY : RATE_2MM_BALCONY
  const canSelect = customArea > 0

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
    <article className="relative overflow-hidden rounded-2xl border border-skybrand-light/80 bg-white/85 shadow-xl shadow-skybrand/15 p-5 flex flex-col gap-4 hover:bg-sky-50/90 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-skybrand/10 via-white to-sky-50 opacity-90" />
      <div className="relative">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-skybrand/40 to-emerald-100 text-skybrand-deep text-[11px] font-semibold px-3 py-1 border border-white/80 shadow-sm">
          Custom Balcony
        </span>
      </div>
      <div className="relative space-y-1">
        <h4 className="text-lg font-semibold text-anchor-navy">Custom Balcony Size</h4>
        <p className="text-sm text-slate-600">Enter width x height to estimate your balcony net cost.</p>
      </div>
      <div className="relative h-24 rounded-xl bg-gradient-to-br from-skybrand-light via-white to-emerald-50 border border-white/70 flex items-center justify-center text-xs text-slate-500">
        Custom balcony net visual
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        <label className="text-xs text-anchor-navy/80 space-y-1">
          Width (ft)
          <input
            type="number"
            value={custom.width}
            onChange={(e) => onCustomChange('width', e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="e.g. 10"
          />
        </label>
        <label className="text-xs text-anchor-navy/80 space-y-1">
          Height (ft)
          <input
            type="number"
            value={custom.height}
            onChange={(e) => onCustomChange('height', e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="e.g. 10"
          />
        </label>
        <label className="col-span-2 text-xs text-anchor-navy/80 space-y-1">
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
      <div className="relative rounded-lg bg-sky-50 px-3 py-2 text-sm text-skybrand-deep flex flex-col gap-1 border border-emerald-100">
        <span>
          Calculated Area: <strong>{customArea ? `${customArea.toFixed(1)} sq.ft` : '—'}</strong>
        </span>
        <span>
          Estimated Price:{' '}
          <strong>{customPrice ? currency(Math.round(customPrice)) : '—'}</strong>
        </span>
      </div>
      <button type="button" className={ENQUIRY_BTN_CLASSES} onClick={handleSelectCustom}>
        Select Custom Balcony Package <span className="text-xs">→</span>
      </button>
      <button
        type="button"
        className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 active:from-green-700 active:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 ${
          canSelect ? '' : 'opacity-60 cursor-not-allowed'
        }`}
        onClick={handleWhatsappCustom}
        disabled={!canSelect}
      >
        Send Custom Balcony on WhatsApp <span className="text-xs">→</span>
      </button>
    </article>
  )
}

function CustomCricketCard({ custom, customArea, customPrice, onCustomChange }) {
  const customRate = custom.thickness === '2.5mm' ? RATE_25MM_CRICKET : RATE_2MM_CRICKET
  const canSelectCustom = customArea > 0
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
    <article className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/85 shadow-xl shadow-emerald-50 p-5 flex flex-col gap-4 hover:bg-sky-50/90 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50 opacity-90" />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="relative">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-800 text-[11px] font-semibold px-3 py-1 border border-white/80 shadow-sm">
            Custom Practice
          </span>
        </div>
        <div className="relative space-y-1">
          <h4 className="text-lg font-semibold text-anchor-navy">Custom Cricket Size</h4>
          <p className="text-sm text-slate-600">Enter width x height to estimate your sports net cost.</p>
        </div>
        <div className="relative h-24 rounded-xl bg-gradient-to-br from-sky-100 via-white to-emerald-100 border border-white/70 flex items-center justify-center text-xs text-slate-500">
          Custom cricket net visual
        </div>
        <div className="relative grid grid-cols-2 gap-3">
          <label className="text-xs text-anchor-navy/80 space-y-1">
            Width (ft)
            <input
              type="number"
              value={custom.width}
              onChange={(e) => onCustomChange('width', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 20"
            />
          </label>
          <label className="text-xs text-anchor-navy/80 space-y-1">
            Height (ft)
            <input
              type="number"
              value={custom.height}
              onChange={(e) => onCustomChange('height', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="e.g. 10"
            />
          </label>
          <label className="col-span-2 text-xs text-anchor-navy/80 space-y-1">
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
        <div className="relative rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700 flex flex-col gap-1 border border-emerald-100">
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
          disabled={!canSelectCustom}
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
Total Price: ₹${selectedPackage.totalPrice}

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

Please call back to confirm installation slot.
    `

    openWhatsappWithMessage(message)
  }

  return (
    <article
      ref={ref}
      className="rounded-2xl border border-anchor-navy/10 bg-white/95 shadow-[0_16px_40px_rgba(13,36,56,0.15)] p-5 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-skybrand-deep uppercase tracking-[0.16em]">Selected Package</p>
          <h3 className="text-xl font-semibold text-anchor-navy">
            {selectedPackage.title || 'Custom Package'} · {selectedPackage.sizeSqFt || 'Custom'} sq.ft
          </h3>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-anchor-navy/70 underline decoration-dotted"
          onClick={onReset}
        >
          Reset
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="rounded-xl border border-skybrand-light/70 bg-skybrand-light/40 p-3 space-y-1">
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy">
            <span>Thickness</span>
            <span>{selectedPackage.thicknessMm} mm</span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy">
            <span>Rate per sq.ft</span>
            <span>₹{selectedPackage.ratePerSqFt}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-anchor-navy">
            <span>Total Price</span>
            <span>{currency(selectedPackage.totalPrice)}</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <label className="text-xs text-anchor-navy/80 space-y-1">
              Name
              <input
                type="text"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={enquiry.name}
                onChange={(e) => onEnquiryChange('name', e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label className="text-xs text-anchor-navy/80 space-y-1">
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
          <label className="text-xs text-anchor-navy/80 space-y-1">
            Location
            <input
              type="text"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              value={enquiry.location}
              onChange={(e) => onEnquiryChange('location', e.target.value)}
              placeholder="City / Area"
            />
          </label>
          <label className="text-xs text-anchor-navy/80 space-y-1">
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
