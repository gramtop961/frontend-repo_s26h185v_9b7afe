import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    // GSAP entrance
    if (window.gsap) {
      window.gsap.from('.nav-animate', { y: -30, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' })
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top" style={{ background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(6px)' }}>
      <div className="container">
        <a className="navbar-brand fw-bold nav-animate" href="#hero">
          <span className="brand-badge me-2">LEX</span> Elite Counsel
        </a>
        <button className="navbar-toggler nav-animate" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link nav-animate" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link nav-animate" href="#services">Practice Areas</a></li>
            <li className="nav-item"><a className="nav-link nav-animate" href="#portal">Case Status</a></li>
            <li className="nav-item"><a className="nav-link nav-animate" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link nav-animate" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3"><a className="btn btn-gold px-3 nav-animate" href="#contact">Book Consultation</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
