import React, { useEffect, useState } from 'react'
import './Menuu.scss'
import { Link } from 'react-router-dom';

const Menuu = () => {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    fetch(`https://salad-chi.vercel.app/api/menu`)
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  return (
    <>
      <div className='Menuu'>
        <div className='container_menu'>
          <h3 className='title_menu'>
            Our Special Menu
          </h3>
          <div className='container_menu_child'>
            {
              currentItems.map((m,idx) =>(
                <div className='row_menu' key={idx}>
                  <div className="content_menu">
                    <div className="info_menu">
                      <Link to={'/detail_product'}>
                        <img className='img_pr' src={m.image} alt={m.name} />
                      </Link>
                      <div>
                        <h6>
                          <Link className='name_pr' to={'/detail_product'}>
                            {m.name}
                          </Link>
                        </h6>
                        <p>{m.des}</p>
                      </div>
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
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Menuu