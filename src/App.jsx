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
import Navbar from './components/Navbar.jsx'
import RevealOnScroll from './components/RevealOnScroll.jsx'

export default function App() {
  return (
    <div className="gradient-bg min-h-screen text-slate-900 dark:text-dark-text transition-colors duration-300">
      <div className="fixed inset-0 -z-10 mesh-overlay opacity-90 dark:opacity-20" />

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <RevealOnScroll width="100%">
          <section id="why">
            <WhyChoose />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="products">
            <Products />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="pricing">
            <Pricing />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="how">
            <HowItWorks />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="reviews">
            <Reviews />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="about">
            <About />
          </section>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <section id="contact">
            <Contact />
          </section>
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  )
}
