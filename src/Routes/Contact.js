import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import ContactForm from '../Components/ContactForm'
const ContactMe = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="CONTACT." text="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactMe