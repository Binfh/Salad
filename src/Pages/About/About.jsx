import React, { useEffect, useRef } from 'react'
import Header from '../../Components/Headers/Header'
import Feeling from '../../Components/Feeling/Feeling'
import Footer from '../../Components/Footer/Footer'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'
import IntroductionAb from '../../Components/IntroductionAb/IntroductionAb'
import PopularIn from '../../Components/PopularIn/PopularIn'
import OurSpecialists from '../../Components/Our Specialists/Our Specialists'
import { useLocation } from 'react-router-dom'

const About = () => {

  const ourSRef = useRef(null); 
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#chef' && ourSRef.current) {
      ourSRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  }, [location]);
  return (
    <>
        <Header/>
        <BannerAbout index={0}/>
        <IntroductionAb/>
        <PopularIn/>
        <div ref={ourSRef}>
          <OurSpecialists/>
        </div>
        <Feeling/>
        <Footer/>
    </>
  )
}

export default About