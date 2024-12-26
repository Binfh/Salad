import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container_footer'>
                <div className='one'>
                    <h1 className='title-one'>
                        Subscribe to get email updates of our latest news
                    </h1>
                    <form action='#url' method='GET' className='form_footer'>
                        <input type="text" className='ip_footer' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className='two'>
                    <div className='ab'>
                        <h3 className='title-two'>
                            About
                        </h3>
                        <p>We are committed to delivering exceptional services with a focus on quality, innovation, and integrity. Our mission is to create value for our clients and partners while fostering a culture of growth and collaboration.</p>
                        <ul className='list-ic'>
                            <li><Link><FontAwesomeIcon className='ic' icon={faFacebook}/></Link></li>
                            <li><Link><FontAwesomeIcon className='ic' icon={faLinkedin}/></Link></li>
                            <li><Link><FontAwesomeIcon className='ic' icon={faGoogle}/></Link></li>
                            <li><Link><FontAwesomeIcon className='ic' icon={faTwitter}/></Link></li>
                            <li><Link><FontAwesomeIcon className='ic' icon={faInstagram}/></Link></li>
                        </ul>
                    </div>
                    <div className='ab'>
                        <h3 className='title-two'>
                            Contact Info
                        </h3>
                        <ul className='list-op'>
                            <li className=' no-hover'><FontAwesomeIcon className='ic-right' icon={faAngleRight}/><p>Food, 10001, 5th Avenue, #06 lane street, NY - 62617.</p></li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'tel:+1(21) 234 4567'}>
                                +1(21) 234 4567</Link></li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'google.com'}>
                                binhkhong2410@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ab'>
                        <h3 className='title-two'>
                            Quick links
                        </h3>
                        <ul className='list-op'>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/home'}>
                                Home</Link></li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/about'}>
                                About</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/blog'}>
                                Blog</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/contact'}>
                                Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ab'>
                        <h3 className='title-two'>
                            Help & Support
                        </h3>
                        <ul className='list-op'>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/'}>
                                Live Chart</Link></li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/about'}>
                                Faq&#39;s</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/'}>
                                Support</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ic-right' icon={faAngleRight}/>
                                <Link className='text-ft' to={'/'}>
                                Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='last-text'>© 2021 Salads. All rights reserved. Design by <span>KhongSonBinh</span></p>
        </div>
    </>
  )
}

export default Footer