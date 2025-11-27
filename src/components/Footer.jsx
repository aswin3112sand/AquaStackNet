import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-skybrand-light/90 bg-white/95">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-anchor-navy">
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-skybrand-deep to-skybrand shadow-[0_0_12px_rgba(102,200,255,0.65)]" />
          <span>AS NETS</span>
        </div>
        <div className="flex gap-3 text-[11px] text-slate-600">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#how" className="nav-link">
            How It Works
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-200 text-slate-500 bg-white hover:border-skybrand hover:text-skybrand-deep shadow-sm transition"
          >
            <span className="text-base">📷</span>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-200 text-slate-500 bg-white hover:border-skybrand hover:text-skybrand-deep shadow-sm transition"
          >
            <span className="text-base">📘</span>
          </a>
          <a
            href="https://wa.me/919789702356"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M16 6c-4.97 0-9 3.882-9 8.66 0 1.701.533 3.292 1.453 4.622L7 26l6.904-1.827A9.6 9.6 0 0 0 16 23.32c4.97 0 9-3.882 9-8.66C25 9.882 20.97 6 16 6Zm0 1.78c3.98 0 7.22 3.112 7.22 6.94 0 3.829-3.24 6.94-7.22 6.94-.946 0-1.874-.176-2.734-.52l-.39-.15-4.112 1.09 1.102-3.815-.25-.36a6.04 6.04 0 0 1-1.18-3.185c0-3.828 3.24-6.94 7.22-6.94Zm-3.006 3.34c-.156-.35-.32-.357-.47-.363-.123-.005-.263-.005-.403-.005-.14 0-.37.053-.564.263-.194.21-.74.72-.74 1.756 0 1.035.758 2.035.864 2.175.106.14 1.458 2.24 3.594 3.05 1.778.666 2.14.534 2.525.5.386-.035 1.244-.51 1.42-1.003.175-.492.175-.914.123-1-.053-.088-.194-.14-.408-.245-.214-.105-1.266-.624-1.46-.695-.194-.07-.335-.105-.47.105-.14.21-.54.695-.662.84-.122.14-.245.158-.458.053-.214-.105-.902-.33-1.72-1.05-.636-.564-1.065-1.26-1.188-1.47-.123-.21-.013-.323.092-.428.095-.095.214-.245.32-.368.107-.122.142-.21.214-.35.07-.14.035-.263-.018-.368-.053-.105-.467-1.17-.642-1.597Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-[11px] text-slate-500 pb-3">
        © {year} AS NETS – Balcony Safety Nets. All rights reserved.
      </div>
    </footer>
  )
}
