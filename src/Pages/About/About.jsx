import React from 'react'
import Header from '../../Components/Headers/Header'
import Feeling from '../../Components/Feeling/Feeling'
import Footer from '../../Components/Footer/Footer'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'
import IntroductionAb from '../../Components/IntroductionAb/IntroductionAb'
import PopularIn from '../../Components/PopularIn/PopularIn'
import OurSpecialists from '../../Components/Our Specialists/Our Specialists'

const About = () => {
  return (
    <>
        <Header/>
        <BannerAbout index={0}/>
        <IntroductionAb/>
        <PopularIn/>
        <OurSpecialists/>
        <Feeling/>
        <Footer/>
    </>
  )
}

export default About