import React, { useEffect, useRef } from 'react'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Feature from '../components/Feature'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const location = useLocation()
  const isMounted = useRef(false)

  useEffect(() => {
    console.log(isMounted)
    if (location.hash !== '') {
      const divId = location.hash.replace('#', '')
      const elem = document.getElementById(divId)
      setTimeout(
        function () {
          const yOffset = divId === 'timeline' ? -10 : -90 // for timeline section scrollY is decreased
          const y =
            elem.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        },
        isMounted.current ? 0 : 500
      )
    }
    if (!isMounted.current) {
      isMounted.current = true
    }
  }, [location])
  return (
    <>
      <div className="homepage-navbar">
        <Navbar />
      </div>
      <div className="root-container">
        <div className="homepage-herosection">
          <HeroSection />
        </div>
        <div className="homepage-timeline">
          <Timeline />
        </div>
        <div className="homepage-about">
          <About />
        </div>

        <div className="homepage-team">
          <Team />
        </div>
        <div className="homepage-feature">
          <Feature />
        </div>

        <div className="homepage-faq">
          <FAQ />
        </div>
        <div className="homepage-testimonials">
          <Testimonials />
        </div>
      </div>

      <div className="homepage-footer">
        <Footer />
      </div>
    </>
  )
}

export default Home
