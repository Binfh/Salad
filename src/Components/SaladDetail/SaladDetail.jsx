import React, { useEffect, useState } from 'react'
import './SaladDetail.scss'
import { useCart } from '../../Context/CartContext'
import { useParams } from 'react-router-dom';
import { useSign } from '../../Context/SignContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const SaladDetail = () => {
    const { id } = useParams(); 
    const {addToCart} = useCart();
    const [saladd, setSaladd] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const {signUp} = useSign();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetch(`https://salad-chi.vercel.app/api/menu/${id}`)
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              setSaladd(data);
              setLoading(false);
          })
          .catch((error) => {
              console.error("Error fetching salad details:", error);
              setLoading(false);
          });
    }, [id]);

    if (loading) {
        return (
            <div className="inline-container">
                <div className="inline-detail">Loading...</div>
            </div>
        );
    }    

    if (!saladd) {
        return (
            <div className="inline-container">
                <div className="inline-detail">No products found</div>
            </div>
        );
    }
    
    const handleAddCart = () => {
        if (!signUp) {
          setShowAlert(true); 
        } else {
          addToCart();
        }
      };
    
    return (
        <div className="salad-detail">
            <div className="container-detail">
                <img className="img-detail" src={saladd.image} alt={saladd.name} />
                <div className="text-detail">
                    <p className='desf'>&#34;{saladd.desFull}&#34;</p>
                    <div className='add-cart-id'>
                        <p className='price-in-detail'>${saladd.price}</p>
                        <button onClick={handleAddCart}>Add to cart</button>
                    </div>
                </div>
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
        </div>
    );
}

export default SaladDetail