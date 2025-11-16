// Global animations and counters
(function(){
  const gsap = window.gsap
  const ScrollTrigger = window.ScrollTrigger
  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
  }

  // Number counters
  function animateCounter(el){
    const target = Number(el.getAttribute('data-count') || '0')
    const duration = 1.2
    const start = 0
    let current = start
    const step = timestamp => {
      if(!el._start){ el._start = timestamp }
      const progress = Math.min((timestamp - el._start) / (duration * 1000), 1)
      current = Math.floor(progress * (target - start) + start)
      el.textContent = current.toLocaleString()
      if(progress < 1){ requestAnimationFrame(step) }
    }
    requestAnimationFrame(step)
  }

  window.addEventListener('load', () => {
    document.querySelectorAll('.stat-number').forEach((el) => {
      const obs = new IntersectionObserver((entries, ob) => {
        entries.forEach(e => {
          if(e.isIntersecting){ animateCounter(el); ob.unobserve(el) }
        })
      }, { threshold: 0.6 })
      obs.observe(el)
    })
  })
})()
