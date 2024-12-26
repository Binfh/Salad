import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../../assets/assets'
import './BannerAbout.scss'

const BannerAbout = ({index}) => {

    const list = [
        {
            name:'About Us',
            here:'About'
        },
        {
            name:'Our Menu',
            here:'Menu'
        },
        {
            name:'Contact Us',
            here:'Contact'
        },
    ]
  return (
    <>
        <section className='banner_ab b1'>
            <div className='container_banner_ab py-1'>
                <div className='row_banner_ab'>
                    <div className='col_banner_ab'>
                        {list.map((l,idx) =>(
                            (index === idx &&
                            <div key={idx}>
                                <h3>{l.name}</h3>
                                <ul>
                                    <li><Link className='fchild' to={'/'}>Home</Link></li>
                                    <li><FontAwesomeIcon className='ic-r' icon={faAngleRight}/>{l.here}</li>
                                </ul>
                            </div>
                            )
                        ))}
                    </div>
                    <div className='col_banner_ab'>
                        <div className='sub-banner_ab'> 
                            <img className='img_banner_ab' src={image.ab} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BannerAbout