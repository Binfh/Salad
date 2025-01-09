import React from 'react'
import './IntroductionAb.scss'
import { image } from '../../assets/assets'


const IntroductionAb = () => {
  return (
    <>
        <div className='intro-ab'>
            <div className='container_intro-ab'>
                <div className='row-intr-ab'>
                    <div className='text_intro-ab'>
                        <h3 className='title_intro-ab'>Since 1990</h3>
                        <h3 className='intro1_intro-ab'>We Have <span>30+</span> Years of Experience</h3>
                        <p className='t1_intro-ab'>Fresh ingredients, vibrant flavors, and thoughtful preparation come together in every bite. Our salads are made with the finest produce, ensuring a healthy and delicious experience.</p>
                        <p className='t2_intro-ab'>With a passion for quality, we combine crisp greens, juicy fruits, and flavorful dressings to create salads that satisfy both the palate and the soul.</p>
                        <img className='ck_intro-ab' src={image.sign} alt="" />
                    </div>
                    <div className='img_intro-ab'>
                        <img src={image.intro3} alt="img1" className='img1_intro-ab' />
                        <img src={image.intro4} className='img2_intro-ab' alt="img2" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default IntroductionAb