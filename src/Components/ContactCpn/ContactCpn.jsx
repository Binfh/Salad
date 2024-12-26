import React from 'react'
import './ContactCpn.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelopeOpenText, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const ContactCpn = () => {
  return (
    <>
      <div className="contact_cpn">
        <div className="container_cpn">
          <div className="row_cpn">
            <div className="col_cpn">
              <div className='contact_info'>
                <FontAwesomeIcon className='ic_contact' icon={faLocationDot}/>
                <h4>Location</h4>
                <p>Dolor sit, #PTH,8800 Honey Street UK.</p>
              </div>
            </div>
            <div className="col_cpn">
              <div className='contact_info'>
                <FontAwesomeIcon className='ic_contact' icon={faPhoneVolume}/>
                <h4>Phone</h4>
                <p><Link to={'tel:+22 123 984 434'}>+22 123 984 434</Link></p>
                <p><Link to={'tel:+44 123 984 439'}>+44 123 984 439</Link></p>
              </div>
            </div>
            <div className="col_cpn">
              <div className='contact_info'>
                <FontAwesomeIcon className='ic_contact' icon={faEnvelopeOpenText}/>
                <h4>Email</h4>
                <p><Link to={'mailto:binhkhong2410@gmail.com'}>binhkhong2410@gmail.com</Link></p>
                <p><Link to={'mailto:sonbinhkhong@gmail.com'}> sonbinhkhong@gmail.com</Link></p>
              </div>
            </div>
            <div className="col_cpn">
              <div className='contact_info'>
                <FontAwesomeIcon className='ic_contact' icon={faClock}/>
                <h4>Working Hours</h4>
                <p>Wednesday - Sunday 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className="row_form">
            <form className='form_contact' action="" method="get">
              <div className="col_form">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="col_form">
                <label>Email</label>
                <input type="email" required/>
              </div>
              <div className="col_form">
                <label>Subject</label>
                <input type="text" />
              </div>
              <div className="col_form">
                <label>Phone Numbers</label>
                <input type="number" />
              </div>
            </form>
            <div className='note'>
              <label >Message</label>
              <textarea name="note" id=""/>
            </div>
            <div className="btn_submit_contact">
              <button>Submit Message</button>
            </div>
          </div>
          <div className="map-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
              width="100%"
              height="400"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCpn