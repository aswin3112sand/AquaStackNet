import React from 'react'

const priceMatrix = [
  {
    size: 40,
    options: [
      { thickness: '2 mm', netCost: 1000, ropeCost: 40, stitch: 50, hooks: 48, total: 1288 },
      { thickness: '2.5 mm', netCost: 1200, ropeCost: 40, stitch: 50, hooks: 48, total: 1488 },
    ],
  },
  {
    size: 50,
    options: [
      { thickness: '2 mm', netCost: 1250, ropeCost: 50, stitch: 62, hooks: 60, total: 1572 },
      { thickness: '2.5 mm', netCost: 1500, ropeCost: 50, stitch: 62, hooks: 60, total: 1822 },
    ],
  },
  {
    size: 60,
    options: [
      { thickness: '2 mm', netCost: 1500, ropeCost: 60, stitch: 75, hooks: 72, total: 1857 },
      { thickness: '2.5 mm', netCost: 1800, ropeCost: 60, stitch: 75, hooks: 72, total: 2157 },
    ],
  },
  {
    size: 80,
    options: [
      { thickness: '2 mm', netCost: 2000, ropeCost: 80, stitch: 100, hooks: 96, total: 2426 },
      { thickness: '2.5 mm', netCost: 2400, ropeCost: 80, stitch: 100, hooks: 96, total: 2826 },
    ],
  },
  {
    size: 100,
    options: [
      { thickness: '2 mm', netCost: 2500, ropeCost: 100, stitch: 125, hooks: 120, total: 2995 },
      { thickness: '2.5 mm', netCost: 3000, ropeCost: 100, stitch: 125, hooks: 120, total: 3495 },
    ],
  },
]

const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl font-display font-semibold mb-2 text-anchor-navy">Balcony Net Pricing (Net + Rope + Stitch + Hooks)</h2>
        <p className="text-sm text-anchor-navy/80">
          Itemised rates for popular balcony sizes. Rope, stitch thread, and hooks are listed separately; totals include a standard ₹150 fitment/handling buffer already added in.
        </p>
      </div>

      <div className="mt-6 bg-white/90 backdrop-blur-xl rounded-[22px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] transition duration-300 border border-white/50 overflow-hidden">
        <div className="relative overflow-x-auto rounded-[18px]">
          <div className="max-h-[420px] overflow-y-auto pb-3 rounded-[18px]">
            <table className="w-full min-w-[780px] text-xs md:text-sm border-collapse table-fixed text-gray-700 tracking-tight">
              <colgroup>
                <col style={{ width: '18%' }} />
                <col style={{ width: '16%' }} />
                <col style={{ width: '14%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
              </colgroup>
              <thead className="sticky top-0 z-30 backdrop-blur-xl">
                <tr className="bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.22),transparent_45%),linear-gradient(120deg,#6ccbff,#3ec8f3,#1fbad6)] text-anchor-navy shadow-[0_14px_26px_rgba(13,36,56,0.24)] border-b border-white/30">
                  <th className="text-left px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm first:rounded-tl-[18px]">Balcony Size (sq.ft)</th>
                  <th className="text-left px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm">Net Thickness</th>
                  <th className="text-right px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm">Net Cost</th>
                  <th className="text-right px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm">
                    <span className="inline-flex items-center gap-1.5">
                      Rope Cost
                      <span className="header-icon hidden sm:inline-flex">🪢</span>
                    </span>
                  </th>
                  <th className="text-right px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm">
                    <span className="inline-flex items-center gap-1.5">
                      Stitch Thread
                      <span className="header-icon hidden sm:inline-flex">🧵</span>
                    </span>
                  </th>
                  <th className="text-right px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm">
                    <span className="inline-flex items-center gap-1.5">
                      Hooks Cost
                      <span className="header-icon hidden sm:inline-flex">🪝</span>
                    </span>
                  </th>
                  <th className="text-right px-6 lg:px-7 py-4 text-[12px] md:text-sm font-semibold tracking-tight drop-shadow-sm last:rounded-tr-[18px]">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {priceMatrix.map((row) =>
                  row.options.map((opt, idx) => (
                    <tr
                      key={`${row.size}-${opt.thickness}`}
                      className="odd:bg-white even:bg-[#F8FAFF] border-b border-black/10 last:border-b-0 transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,175,255,0.18)]"
                    >
                      {idx === 0 && (
                        <td className="px-6 lg:px-7 py-4 font-semibold text-anchor-navy align-middle" rowSpan={row.options.length}>
                          {`${row.size} sq.ft`}
                        </td>
                      )}
                      <td className="px-6 lg:px-7 py-4 text-anchor-navy/85 align-middle">{opt.thickness}</td>
                      <td className="px-6 lg:px-7 py-4 pr-7 text-right num-cell text-anchor-navy/90 align-middle tabular-nums">{formatINR(opt.netCost)}</td>
                      <td className="px-6 lg:px-7 py-4 pr-7 text-right num-cell text-anchor-navy/90 align-middle tabular-nums">{formatINR(opt.ropeCost)}</td>
                      <td className="px-6 lg:px-7 py-4 pr-7 text-right num-cell text-anchor-navy/90 align-middle tabular-nums">{formatINR(opt.stitch)}</td>
                      <td className="px-6 lg:px-7 py-4 pr-7 text-right num-cell text-anchor-navy/90 align-middle tabular-nums">{formatINR(opt.hooks)}</td>
                      <td className="px-6 lg:px-7 py-4 pr-7 text-right num-cell font-semibold price-gradient align-middle tabular-nums">
                        {formatINR(opt.total)}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-5 py-4 bg-gradient-to-r from-neutral-beige to-skybrand-light/35 text-[11px] md:text-xs text-anchor-navy/80 flex flex-col gap-1.5">
          <p>
            Net Cost uses ₹25/sq.ft for 2 mm and ₹30/sq.ft for 2.5 mm. Rope, stitch thread, and hooks are itemised separately; totals already include a ₹150 fitment/handling buffer.
          </p>
          <p>
            Total Price = Net + Rope + Stitch + Hooks + ₹150 buffer. Delivery and optional box packing for net rolls are extra (offer free delivery within city limits if possible).
          </p>
          <p>
            Measurement notes: Rope cost assumes ~₹1/sq.ft for typical balcony perimeters; Stitch Thread is ~₹1.25/sq.ft; Hooks align to ~₹1.2/sq.ft (rounded to clean numbers). Adjust if the balcony has extra corners, larger spans, or premium hardware.
          </p>
          <p className="text-slate-800 font-semibold">
            Tip: Share your balcony photo + approx size on WhatsApp for a neat quote. We can round the final price (e.g., ₹1,250 → ₹1,300) or bundle discounts for multiple balconies.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 justify-center text-[11px] md:text-xs">
        <span className="px-3 py-1 rounded-full bg-white border border-skybrand-light text-slate-700">
          Free site visit &amp; measurement
        </span>
        <span className="px-3 py-1 rounded-full bg-white border border-skybrand-light text-slate-700">
          Custom fit for any balcony / duct
        </span>
        <a
          href="https://wa.me/919789702356"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta-green interactive inline-flex items-center px-4 py-1.5 rounded-full font-semibold text-white shadow-sm"
        >
          <span>Send Photo on WhatsApp for Quote</span>
        </a>
      </div>
    </section>
  )
}
