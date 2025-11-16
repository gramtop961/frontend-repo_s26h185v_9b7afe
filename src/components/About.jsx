import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.about-card', {
        scrollTrigger: { trigger: '#about', start: 'top 70%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }
  }, [])

  return (
    <section id="about" className="section-dark py-6">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="profile-frame about-card">
              <div className="placeholder-photo">AP</div>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="section-title about-card">About The Lawyer</h2>
            <p className="text-muted about-card">Alexander Pierce is an experienced legal strategist with over a decade of practice, specializing in corporate, criminal, and civil litigation. He is known for meticulous preparation and persuasive advocacy.</p>
            <div className="row g-4 mt-2">
              <div className="col-md-6 about-card">
                <div className="stat-tile">
                  <div className="stat-number" data-count="12">0</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              <div className="col-md-6 about-card">
                <div className="stat-tile">
                  <div className="stat-number" data-count="95">0</div>
                  <div className="stat-label">Success Rate (%)</div>
                </div>
              </div>
              <div className="col-md-6 about-card">
                <div className="stat-tile">
                  <div className="stat-number" data-count="150">0</div>
                  <div className="stat-label">Won Cases</div>
                </div>
              </div>
              <div className="col-md-6 about-card">
                <div className="stat-tile">
                  <div className="stat-number" data-count="500">0</div>
                  <div className="stat-label">Clients Served</div>
                </div>
              </div>
            </div>

            <div className="badges mt-4 about-card">
              <span className="badge rounded-pill bg-gold me-2 mb-2">Top Litigator</span>
              <span className="badge rounded-pill bg-gold me-2 mb-2">Bar Association Member</span>
              <span className="badge rounded-pill bg-gold me-2 mb-2">Corporate Counsel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
