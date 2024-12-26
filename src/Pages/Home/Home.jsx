import React from 'react'
import Header from '../../Components/Headers/Header'
import Banner from '../../Components/Banner/Banner'
import Introduction from '../../Components/Introduction/Introduction'
import OurPopular from '../../Components/OurPopular/OurPopular'
import OurMenu from '../../Components/OurMenu/OurMenu'
import Options from '../../Components/Options/Options'
import OurChef from '../../Components/OurChef/OurChef'
import Feeling from '../../Components/Feeling/Feeling'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Introduction/>
        <OurPopular/>
        <OurMenu/>
        <Options/>
        <OurChef/>
        <Feeling/>
        <Footer/>
    </>
  )
}

export default Home