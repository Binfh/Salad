import React from 'react'
import { image } from '../../assets/assets'
import './OurChef.scss'
import { Link } from 'react-router-dom'

const OurChef = () => {
  return (
    <>
        <div className='o_chef'>
            <div className='container_chef'>
                <div className="row_chef">
                    <div className="col-8_chef">
                        <h3 className="title_chef">
                            Meet Our Best <span>Chef&#39;s</span>
                        </h3>
                        <p className="des_chef">
                            Discover the passion and creativity of our top chefs, who bring exceptional culinary experiences to your table. With years of expertise and a dedication to excellence, they craft dishes that are as delightful to the eyes as they are to the palate.
                        </p>
                        <p className='des_chef' style={{marginTop:'16px'}}>
                            Our chefs are committed to using the finest ingredients, ensuring every dish is a masterpiece of flavor and presentation. Join us on a journey of taste and indulgence, where every bite tells a story.
                        </p>
                        <Link className='btn_chef' to={'/about#chef'}>See Our Chef&#39;s</Link>
                    </div>
                    <div className="col-4_chef">
                        <img src={image.chef} alt="chef" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurChef