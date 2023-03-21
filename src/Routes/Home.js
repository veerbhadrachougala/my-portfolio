import React from 'react'
import NavBar from '../Components/NavBar'
import HomePage from '../Components/HomePage'
import About from './About'
import Projects from './Projects'
import ContactMe from './Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home