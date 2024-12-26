import React, { useEffect, useState } from 'react'
import './Menuu.scss'
import { Link } from 'react-router-dom';

const Menuu = () => {
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    // Thêm /api vào path
    fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
        <div className='Menuu'>
            <div className='container_menu'>
              <h3 className='title_menu'>
                Our Special Menu
              </h3>
              <div className='container_menu_child'>
                {
                  menu.map((m,idx) =>(
                    <div className='row_menu' key={idx}>
                      <div className="content_menu">
                        <Link to={'/detail_product'}>
                          <img src={m.image} alt={m.name} />
                        </Link>
                       <div className="info_menu">
                        <h6>
                          <Link to={'/detail_product'}>
                            {m.name}
                          </Link>
                        </h6>
                        <p>{m.des}</p>
                       </div>
                       <div className="price_product">
                        <p><strong>${m.price}</strong></p>
                       </div>
                       <div className="order">
                        <Link className='button_order' to={'abc'}>Order Now</Link>
                       </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    </>
  )
}

export default Menuu