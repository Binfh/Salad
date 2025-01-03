import React from 'react'
import './Our Specialists.scss'
import { image } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const OurSpecialists = () => {

  const ourChef = [
    {
      name:'John Doe',
      position:'Owner',
      img:image.person1
    },
    {
      name:'Alexander',
      position:'Chef',
      img:image.person2
    },
    {
      name:'Martin ker',
      position:'Co-founder',
      img:image.person3
    },
    {
      name:'Elizabeth',
      position:'Specialist',
      img:image.person4
    },
  ]

  return (
    <>
        <div id='chef' className='Our_Spe'>
            <div className='container_spe'>
              <h3 className='title_spe'>Our Specialists</h3>
              <div className="row_spe">
                {ourChef.map((chef,idx) =>(
                  <Link className='col_spe' key={idx}>
                    <div className='ov-img'><img src={chef.img} alt={chef.position} /></div>
                    <div>
                      <h4 className='name_chef'>{chef.name}</h4>
                      <p className='po_chef'>{chef.position}</p>
                      <div className="icon_spe">
                        <FontAwesomeIcon className='ic_spe' icon={faFacebook}/>
                        <FontAwesomeIcon className='ic_spe' icon={faTwitter}/>
                        <FontAwesomeIcon className='ic_spe' icon={faInstagram}/>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        </div>
    </>
  )
}

export default OurSpecialists