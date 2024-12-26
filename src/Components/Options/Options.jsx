import { faAppleAlt,faLemon, faCarrot, faHeartbeat, faWeight,  faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Options.scss'

const Options = () => {

    const options = [
        {
            ic:<FontAwesomeIcon icon={faAppleAlt}/>,
            title:'Healthy Food',
            des:'Promote a healthier lifestyle with nutrient-rich meals crafted for your well-being.',
        },
        {
            ic:<FontAwesomeIcon icon={faCarrot}/>,
            title:'Natural Fiber',
            des:'Boost digestion with natural fiber, essential for a balanced diet and a healthy gut',
        },
        {
            ic:<FontAwesomeIcon icon={faLemon}/>,
            title:'Nutritional Food',
            des:'Fuel your body with nutritious, wholesome food that keeps you energized all day.',
        },
        {
            ic:<FontAwesomeIcon icon={faHeartbeat}/>,
            title:'Protect Your Heart',
            des:'Enjoy heart-healthy meals that support your cardiovascular health and overall wellness',
        },
        {
            ic:<FontAwesomeIcon icon={faWeight}/>,
            title:'Weight Control',
            des:'Maintain a balanced weight with meals designed to provide proper nutrition without excess.',
        },
        {
            ic:<FontAwesomeIcon icon={faUtensils}/>,
            title:'Fresh Salads',
            des:'Experience the crisp freshness of greens, packed with essential vitamins and minerals',
        },
        
    ]

  return (
    <div className='options'>
        <div className='container_op'>
            {options.map((option,idx) =>(
                <div className='box_op' key={idx}>
                    <div className='ic_op'>{option.ic}</div>
                    <div>
                        <h4 className='title_op'>
                            {option.title}
                        </h4>
                        <p className='des_op'>{option.des}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options