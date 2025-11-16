import { useEffect, useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('#contact .contact-card', { scrollTrigger: { trigger: '#contact', start: 'top 70%' }, y: 30, opacity: 0, duration: 0.8 })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 900)
  }

  return (
    <section id="contact" className="section-dark py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="section-title mb-3">Contact</h2>
            <p className="text-muted mb-4">Reach out to schedule your consultation or to discuss your legal needs. We respond promptly and confidentially.</p>
            <ul className="list-unstyled text-light small">
              <li className="mb-2">Email: contact@lexelite.com</li>
              <li className="mb-2">Phone: +1 (202) 555-0198</li>
              <li className="mb-2">Address: 1200 Constitution Ave NW, Washington, DC</li>
            </ul>
            <div className="map-placeholder mt-4">Map Placeholder</div>
          </div>
          <div className="col-lg-6">
            <form className="contact-card p-4 p-md-5" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6"><input className="form-control" placeholder="Name" required /></div>
                <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" required /></div>
                <div className="col-md-6"><input type="tel" className="form-control" placeholder="Phone" /></div>
                <div className="col-md-6">
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>Case Type</option>
                    <option>Corporate</option>
                    <option>Criminal</option>
                    <option>Family</option>
                    <option>Real Estate</option>
                    <option>Immigration</option>
                    <option>Contract</option>
                    <option>Civil Litigation</option>
                  </select>
                </div>
                <div className="col-12"><textarea className="form-control" rows="4" placeholder="Message"></textarea></div>
              </div>
              <div className="d-grid mt-3">
                <button className="btn btn-gold btn-lg" type="submit" disabled={loading}>
                  {loading ? 'Sending…' : (sent ? 'Sent ✓' : 'Submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
