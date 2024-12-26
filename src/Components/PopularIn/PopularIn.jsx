import React from 'react'
import './PopularIn.scss'
import { image } from '../../assets/assets'


const PopularIn = () => {

    const listSl = [
        {
            name:'Green salad',
            price:'19.50',
        },
        {
            name:'Fruit  salad',
            price:'40.50',
        },
        {
            name:'Dessert  salad',
            price:'36.50',
        },
    ]
  return (
    <>
        <div className='ppi'>
            <div className="container_ppi">
                <div className="content">
                    <div className="img_of_content">
                        <img src={image.ppi} alt="" />
                    </div>
                    <div className="text-content">
                        <div className='heading_ppi'>
                            <h3>Popular In</h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque,
                                eaque ipsa quae ab illo inventore.
                            </p>
                        </div>
                       <div className="list-sl">
                            {listSl.map((lis,idx) =>(
                                <div className='line' key={idx}>
                                    <h3>{lis.name}</h3>
                                    <p>${lis.price}</p>
                                </div>
                            ))}
                       </div>
                       <button className='btn-ppi'>View More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopularIn