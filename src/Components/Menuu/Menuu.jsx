import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faClose,  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menuu.scss';
import { useCart } from '../../Context/CartContext';
import { useSign } from '../../Context/SignContext';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const Menuu = () => {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://salad-chi.vercel.app/api/menu`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  const getVisiblePageNumbers = () => {
    if (currentPage <= 3) {
      return [1, 2, 3];
    } else {
      return [currentPage - 2, currentPage - 1, currentPage];
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const { addToCart,reduceFromCart } = useCart();
  const {signUp} = useSign();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddCart = (event, salad) => {
    if (!signUp) {
      event.preventDefault();
      setShowAlert(true); 
    } else {
      addToCart(salad);
    }
  };

  const handleRemoveCart = (e,salad) =>{
    if (!signUp) {
      e.preventDefault();
      setShowAlert(true); 
    } else {
      reduceFromCart(salad);
    }
  }
  

  const LoadingSkeleton = () => (
    <>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className='row_menu' key={item}>
          <div className="content_menu loading">
            <div className="info_menu">
              <div className="img-skeleton"></div>
              <div className="text-content">
                <div className="title-skeleton"></div>
                <div className="desc-skeleton"></div>
              </div>
            </div>
            <div className="price_product">
              <div className="price-skeleton"></div>
            </div>
            <div className="order">
              <div className="button-skeleton"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className='Menuu'>
      <div className='container_menu'>
        <h3 className='title_menu'>Our Special Menu</h3>
        
        <div className='container_menu_child'>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            currentItems.map((salad, idx) => (
              <div className='row_menu' key={idx}>
                <div className="content_menu">
                  <div className="info_menu">
                    <Link to={'/detail_product'}>
                      <img className='img_pr' src={salad.image} alt={salad.name} />
                    </Link>
                    <div>
                      <h6>
                        <Link className='name_pr' to={'/detail_product'}>
                          {salad.name}
                        </Link>
                      </h6>
                      <p>{salad.des}</p>
                    </div>
                  </div>
                  <div className="price_product">
                    <p><strong>${salad.price}</strong></p>
                  </div>
                  <div className="order">
                    <div 
                      className="button_order"
                    >
                      Add To Cart
                    </div>
                    <div className="quantity-control">
                      <button onClick={(e) => handleRemoveCart(e,salad)} className="decrement">-</button>
                      <button onClick={(event) => handleAddCart(event, salad)} className="increment">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {showAlert && (
          <div className="alert_menu">
            <FontAwesomeIcon icon={faFaceSmile} /> Please log in to order!
            <FontAwesomeIcon
              className="ic_close_menu"
              icon={faClose}
              onClick={() => setShowAlert(false)} 
            />
          </div>
        )}


        {!isLoading && (
          <div className="pagination">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-arrow"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
            </button>

            {getVisiblePageNumbers().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            ))}

            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination-arrow"
            >
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menuu;