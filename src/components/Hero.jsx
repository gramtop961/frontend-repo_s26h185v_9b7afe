import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const overlayRef = useRef(null)

  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 1, delay: 0.15, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
    }
  }, [])

  return (
    <section id="hero" className="position-relative text-white hero-section">
      <div className="spline-wrap">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div ref={overlayRef} className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold hero-title" style={{ fontFamily: 'Playfair Display, serif' }}>
              Advocate Alexander Pierce
            </h1>
            <p className="lead text-gold hero-sub mb-4">Your Trusted Legal Consultant</p>
            <p className="opacity-75 mb-4 hero-sub">We provide premium, strategic legal counsel with uncompromising integrity and results-driven representation.</p>
            <div className="d-flex gap-3 hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg px-4">Book Consultation</a>
              <a href="#services" className="btn btn-outline-light btn-lg px-4">View Services</a>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-overlay pointer-events-none"></div>
    </section>
  )
}
