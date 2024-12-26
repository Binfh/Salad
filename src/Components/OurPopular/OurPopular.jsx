import React from 'react'
import './OurPopular.scss'
import { image } from '../../assets/assets'
import { Link } from 'react-router-dom'


const OurPopular = () => {

    const populars = [
        {
            name:'Green salad',
            img:image.s2,
            des:'Experience a refreshing and vibrant green salad, perfectly combining fresh vegetables and natural flavors. It’s the perfect choice for those who enjoy a light yet nutritious dish.',
            href:'/green_salad'
        },
        {
            name:'Fruit salads',
            img:image.s1,
            des:'Delight in a delicious mix of seasonal fruits, offering a sweet and tangy taste that’s both refreshing and nourishing. Perfect for a healthy snack or a light dessert.',
            href:'/fruit_salad'
        },
        {
            name:'Dessert salads',
            img:image.s3,
            des:'A sweet and creamy salad that combines fresh fruits with a rich, indulgent dressing. Perfect as a refreshing dessert or a unique side dish to complement your meal.',
            href:'/dessert_salad'
        }
    ]

  return (
    <>
        <div className='op'>
            <div className='container_popular'>
                <h3 className='title_popular'>
                    Our <span>Popular</span> Salads
                </h3>
                <div className='box_popular'>
                    {populars.map((popular,idx) =>(
                        <Link to={popular.href} className='child_popular' key={idx} >
                            <img className='img_popular' src={popular.img} alt={popular.name} />
                            <h4 className='title_child_popular'>{popular.name}</h4>
                            <p className='des_popular'>{popular.des}</p>
                        </Link>
                    )) }
                </div>
            </div>
        </div>
    </>
  )
}

export default OurPopular