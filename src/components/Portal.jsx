import { useEffect, useState } from 'react'

const demoCases = {
  'A12345': { id: 'A12345', client: 'John Doe', type: 'Civil Litigation', status: 'Under Review', courtDate: '2025-12-10' },
  'B98765': { id: 'B98765', client: 'Jane Smith', type: 'Corporate Law', status: 'Completed', courtDate: '-' },
  'C24680': { id: 'C24680', client: 'Mark Allen', type: 'Criminal Law', status: 'Court Date Scheduled', courtDate: '2025-11-22' },
}

export default function Portal() {
  const [caseId, setCaseId] = useState('')
  const [result, setResult] = useState(null)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('#portal .portal-card', { scrollTrigger: { trigger: '#portal', start: 'top 70%' }, y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const found = demoCases[caseId.trim().toUpperCase()]
    if (!found) {
      setResult(null)
      setShake(true)
      setTimeout(() => setShake(false), 450)
      return
    }
    setResult(found)
  }

  return (
    <section id="portal" className="section-dark py-6">
      <div className="container">
        <h2 className="section-title text-center mb-4">Case Status Portal</h2>
        <p className="text-center text-muted mb-5">Enter your case ID to view a demo status update.</p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className={`portal-card p-4 p-md-5 ${shake ? 'shake' : ''}`} onSubmit={handleSearch}>
              <div className="row g-3 align-items-center">
                <div className="col-sm-8">
                  <input type="text" className="form-control form-control-lg" placeholder="Enter Case ID (e.g., A12345)" value={caseId} onChange={(e) => setCaseId(e.target.value)} />
                </div>
                <div className="col-sm-4 d-grid">
                  <button className="btn btn-gold btn-lg" type="submit">Check Status</button>
                </div>
              </div>

              {result && (
                <div className="status-card mt-4">
                  <div className="row g-3">
                    <div className="col-md-3"><div className="label">Case ID</div><div className="value">{result.id}</div></div>
                    <div className="col-md-3"><div className="label">Client</div><div className="value">{result.client}</div></div>
                    <div className="col-md-3"><div className="label">Type</div><div className="value">{result.type}</div></div>
                    <div className="col-md-3"><div className="label">Status</div><div className={`badge status ${result.status.replace(/\s+/g,'-').toLowerCase()}`}>{result.status}</div></div>
                    {result.courtDate !== '-' && (
                      <div className="col-12"><div className="label">Court Date</div><div className="value">{result.courtDate}</div></div>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
