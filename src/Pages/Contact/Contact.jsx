import React from 'react'
import Header from '../../Components/Headers/Header'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'
import Footer from '../../Components/Footer/Footer'
import ContactCpn from '../../Components/ContactCpn/ContactCpn'

const Contact = () => {
  return (
    <>
        <Header/>
        <BannerAbout index={2}/>
        <ContactCpn/>
        <Footer/>
    </>
  )
}

export default Contact