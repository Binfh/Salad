import React from 'react'
import Header from '../../Components/Headers/Header'
import Footer from '../../Components/Footer/Footer'
import Menuu from '../../Components/Menuu/Menuu'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'

const Menu = () => {
  return (
    <>
        <Header/>
        <BannerAbout index={1}/>
        <Menuu/>
        <Footer/>
    </>
  )
}

export default Menu