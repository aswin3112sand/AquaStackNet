import React from 'react'
import Hero from './components/Hero.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Products from './components/Products.jsx'
import Pricing from './components/Pricing.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Reviews from './components/Reviews.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="gradient-bg min-h-screen text-slate-900">
      <div className="fixed inset-0 -z-10 mesh-overlay opacity-90" />
      <header className="sticky top-0 z-20 relative overflow-hidden header-split">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative z-10">
          <div className="flex items-center gap-2 font-semibold tracking-[0.18em] text-xs uppercase text-skybrand-deep">
            <span className="logo-chip interactive w-11 h-11 rounded-full border border-white shadow-[0_0_18px_rgba(111,198,255,0.9)]">
              <img src="/lo1.jpg" alt="AS NETS logo" />
            </span>
            <span>AS NETS</span>
          </div>
          <nav className="hidden md:flex gap-4 text-xs text-anchor-navy/90 font-semibold">
            <a href="#home" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Home
            </a>
            <a href="#why" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Why Us
            </a>
            <a href="#products" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Products
            </a>
            <a href="#pricing" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Pricing
            </a>
            <a href="#how" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              How It Works
            </a>
            <a href="#reviews" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Reviews
            </a>
            <a href="#contact" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 hover:text-skybrand-deep transition font-semibold text-anchor-navy">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="why">
          <WhyChoose />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="how">
          <HowItWorks />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
