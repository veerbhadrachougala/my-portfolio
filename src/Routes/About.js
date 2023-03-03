import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="ABOUT." text="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About