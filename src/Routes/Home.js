import React from 'react'
import NavBar from '../Components/NavBar'
import HomePage from '../Components/HomePage'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'
import ProjectWork from '../Components/ProjectWork'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <HeroImg heading="ABOUT." text="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology" />
      <AboutContent />
      <HeroImg heading="PROJECTS." text="Here you will find some of the personal projects that I have created" />
      <ProjectWork />
      <HeroImg heading="CONTACT." text="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home