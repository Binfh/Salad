import React, { useEffect, useState } from 'react'
import './Menuu.scss'

const Menuu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Thay URL bên dưới bằng URL Vercel của bạn
    fetch("https://vercel.com/binhs-projects-282a8be9/salad/menu")
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
              {
                menu.map((m,idx) =>(
                  <div className='row_menu' key={idx}>
                    
                  </div>
                ))
              }
            </div>
        </div>
    </>
  )
}

export default Menuu