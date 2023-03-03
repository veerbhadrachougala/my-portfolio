import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectWork from '../Components/ProjectWork'
import HeroImg from '../Components/HeroImg'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="PROJECTS." text="Here you will find some of the personal projects that I have created" />
      <ProjectWork />
      <Footer />
    </div>
  )
}

export default Projects