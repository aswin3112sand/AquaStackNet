import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const payload = {
      name: formData.get('name') || '',
      phone: formData.get('phone') || '',
      type: formData.get('type') || '',
      width: formData.get('width') || '',
      height: formData.get('height') || '',
      message: formData.get('message') || '',
    }

    const text = encodeURIComponent(
      `Hi AS NETS, enquiry from website:\n` +
      `Name: ${payload.name}\n` +
      `Phone/WhatsApp: ${payload.phone}\n` +
      `Net Type: ${payload.type}\n` +
      `Size (ft): ${payload.width || '—'} x ${payload.height || '—'}\n` +
      `Notes: ${payload.message || '—'}`
    )

    window.open(`https://wa.me/919789702356?text=${text}`, '_blank')
    setStatus('Sent to WhatsApp. If WhatsApp did not open, please click the green Chat button.')
    e.target.reset()
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-1 text-anchor-navy">Contact &amp; Free Quote</h2>
        <p className="text-sm text-anchor-navy/80">
          Share your balcony photos &amp; size – we&apos;ll guide you with the best balcony safety net option and pricing.
        </p>
      </div>
      <div className="grid md:grid-cols-[0.85fr,1.15fr] gap-5 items-start">
        <div className="card-magnetic bg-gradient-to-br from-[#0d67a5] via-[#1f8fd6] to-[#7cd7ff] text-white rounded-2xl border border-white/40 shadow-[0_16px_34px_rgba(6,60,110,0.22)] p-4 text-sm">
          <h3 className="text-sm font-semibold mb-2 text-white">Reach Us</h3>
          <p className="mb-1">
            <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/919789702356"
              className="text-white/90 hover:text-white underline-offset-2 hover:underline nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91-97897-02356
            </a>
          </p>
          <p className="mb-1">
            <strong>Call:</strong> +91-97897-02356
          </p>
          <p className="mb-1">
            <strong>Location:</strong> Tuticorin - 628003, Tamil Nadu
          </p>
          <p className="text-[11px] text-white/80 mb-3">Service area: Tuticorin &amp; nearby Tamil Nadu locations.</p>
          <a
            href="https://wa.me/919789702356"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-green interactive inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-xs font-semibold text-white shadow-md"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card-magnetic bg-gradient-to-br from-[#fff0e7] via-white to-[#e6f6ff] rounded-2xl border border-white/60 shadow-[0_16px_34px_rgba(4,47,82,0.18)] p-4 text-sm"
        >
          <h3 className="text-sm font-semibold mb-3 text-anchor-navy">Ask for a Free Quote</h3>
          <div className="mb-2">
            <label htmlFor="name" className="block text-xs mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
              placeholder="Your name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="block text-xs mb-1">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
              placeholder="Your phone number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="type" className="block text-xs mb-1">
              Net Type
            </label>
            <select
              id="type"
              name="type"
              className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
            >
              <option>Balcony Safety Net</option>
              <option>Anti-Bird / Pigeon Net</option>
              <option>Kids Safety Net</option>
              <option>Pet Safety Net</option>
              <option>Sports / Cricket Practice Net</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label htmlFor="width" className="block text-xs mb-1">
                Width (ft)
              </label>
              <input
                id="width"
                name="width"
                type="number"
                min="0"
                step="0.1"
                className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
                placeholder="e.g. 10"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-xs mb-1">
                Height (ft)
              </label>
              <input
                id="height"
                name="height"
                type="number"
                min="0"
                step="0.1"
                className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
                placeholder="e.g. 8"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="block text-xs mb-1">
              Message / Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="input-field w-full rounded-lg border border-skybrand-light bg-white/90 px-2.5 py-1.5 text-xs outline-none focus:border-accent-coral focus:ring-1 focus:ring-accent-coral/60"
              placeholder="Balcony type, floor, grill details, etc."
            />
          </div>
          <button
            type="submit"
            className="btn-cta interactive w-full mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-white shadow-soft"
          >
            <span>Send Enquiry</span>
          </button>
          {status && <p className="mt-2 text-[11px] text-skybrand-deep">{status}</p>}
        </form>
      </div>
    </section>
  )
}
