import React from 'react'
import './Introduction.scss'
import { image } from '../../assets/assets'


const Introduction = () => {
  return (
    <>
        <div className='intro'>
            <div className='container_intro'>
                <div className='img_intro'>
                    <img src={image.intro1} alt="img1" className='img1_intro' />
                    <img src={image.intro2} className='img2_intro' alt="img2" />
                </div>
                <div className='text_intro'>
                    <h3 className='title_intro'>Since 1990</h3>
                    <h3 className='intro1_intro'>We Have <span>30+</span> Years of Experience</h3>
                    <p className='t1_intro'>Fresh ingredients, vibrant flavors, and thoughtful preparation come together in every bite. Our salads are made with the finest produce, ensuring a healthy and delicious experience.</p>
                    <p className='t2_intro'>With a passion for quality, we combine crisp greens, juicy fruits, and flavorful dressings to create salads that satisfy both the palate and the soul.</p>
                    <img className='ck_intro' src={image.sign} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Introduction