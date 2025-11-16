import { useEffect } from 'react'

const testimonials = [
  { name: 'Michael R.', role: 'Entrepreneur', text: 'Professional, strategic, and incredibly effective. My case was handled with exceptional care.', rating: 5 },
  { name: 'Sarah L.', role: 'Founder', text: 'Clear communication and outstanding results. Highly recommend for corporate matters.', rating: 5 },
  { name: 'David P.', role: 'Private Client', text: 'The attention to detail and courtroom presence were unmatched.', rating: 4 },
]

export default function Testimonials() {
  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.t-card', {
        scrollTrigger: { trigger: '#testimonials', start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }

    // simple auto carousel
    let index = 0
    const track = document.querySelector('.t-track')
    const items = document.querySelectorAll('.t-item')
    const cycle = () => {
      if (!track || items.length === 0) return
      index = (index + 1) % items.length
      track.style.transform = `translateX(-${index * 100}%)`
    }
    const id = setInterval(cycle, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="section-deep py-6">
      <div className="container">
        <h2 className="section-title text-center mb-5">Client Testimonials</h2>
        <div className="t-carousel">
          <div className="t-track">
            {testimonials.map((t, i) => (
              <div className="t-item" key={i}>
                <div className="t-card">
                  <div className="stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                  <p className="t-text">“{t.text}”</p>
                  <div className="t-author">{t.name} — <span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
