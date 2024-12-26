import React from 'react'
import './Banner.scss'
import { image } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <>
        <section className='banner py b1'>
            <div className='banner-content'>
                <div className='container_banner py-1'>
                    <div className='row_banner'>
                        <div className='col_banner'>
                            <h3>Fresh Healthy<span className='t1_banner'>Delicious Salads</span></h3>
                            <p className='des_banner'>Healthy foods to eat everyday, Tasty and healthy vegetables salad with fresh tomatoes, coriander leaves and more.</p>
                            <div className='btn_banner'><Link className='link_btn_banner' to={'/menu'}>Order Now</Link></div>
                        </div>
                        <div className='col_banner ps'>
                            <div className='sub-banner rotating'> 
                                <img className='img_banner' src={image.img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner