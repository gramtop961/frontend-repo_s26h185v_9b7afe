import { useEffect } from 'react'

const services = [
  { title: 'Criminal Law', desc: 'Defense with strategic precision and discretion.', icon: 'gavel' },
  { title: 'Corporate Law', desc: 'M&A, compliance, contracts, and counsel.', icon: 'briefcase' },
  { title: 'Family Law', desc: 'Compassionate representation for sensitive matters.', icon: 'heart' },
  { title: 'Real Estate Law', desc: 'Property transactions and dispute resolution.', icon: 'building' },
  { title: 'Immigration Law', desc: 'Visas, residency, and citizenship guidance.', icon: 'globe' },
  { title: 'Contract Law', desc: 'Drafting, negotiation, and enforcement.', icon: 'file-text' },
  { title: 'Civil Litigation', desc: 'Resolute representation in civil disputes.', icon: 'scale' },
]

export default function Services() {
  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }

    // 3D tilt on hover
    const cards = document.querySelectorAll('.service-card')
    const handleMove = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateY = ((x / rect.width) - 0.5) * 10
      const rotateX = ((y / rect.height) - 0.5) * -10
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    }
    const reset = (e) => { e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)' }
    cards.forEach((c) => {
      c.addEventListener('mousemove', handleMove)
      c.addEventListener('mouseleave', reset)
    })
    return () => { cards.forEach((c) => { c.removeEventListener('mousemove', handleMove); c.removeEventListener('mouseleave', reset) }) }
  }, [])

  return (
    <section id="services" className="section-deep py-6">
      <div className="container">
        <h2 className="section-title text-center mb-5">Practice Areas</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <div className="service-card p-4 h-100">
                <div className="icon-circle mb-3"><span className="icon-placeholder">⚖️</span></div>
                <h5 className="mb-2">{s.title}</h5>
                <p className="text-muted mb-4">{s.desc}</p>
                <a href="#contact" className="btn btn-outline-gold">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
