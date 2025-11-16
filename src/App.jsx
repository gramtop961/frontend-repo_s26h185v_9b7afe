import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portal from './components/Portal'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import './law.css'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portal />
      <Testimonials />
      <Contact />
      <footer className="footer py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-light small opacity-75">© {new Date().getFullYear()} LexElite Counsel. All rights reserved.</div>
          <div className="socials mt-3 mt-md-0">
            <a href="#" className="social">in</a>
            <a href="#" className="social">x</a>
            <a href="#" className="social">fb</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
