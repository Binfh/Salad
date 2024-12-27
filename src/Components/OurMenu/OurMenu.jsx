import React from 'react'
import './OurMenu.scss'
import { Link } from 'react-router-dom'

const OurMenu = () => {
  return (
    <>
        <div className='o_menu'>
            <div className='container_mn'>
                <div className='row_mn'>
                    <div className='col_mn'>
                        <h3 className='title_mn'>Our Restaurants <span>Menu</span></h3>
                        <div className='des_mn'>
                            <p className='col1_mn'>Discover the incredible flavors at our restaurant. We are committed to delivering fresh and high-quality dishes that cater to every taste.</p>
                            <p className='col1_mn'>Enjoy a cozy atmosphere and professional service. Each dish is prepared with care, making your dining experience complete and unforgettable</p>
                        </div>
                        <Link className='btn_mn' to={'/menu'} onClick={() => window.scrollTo(0, 0)}>What&#39;s on the Menu</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurMenu