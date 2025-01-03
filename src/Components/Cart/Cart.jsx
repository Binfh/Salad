import React, { useEffect, useState } from 'react'
import { useCart } from '../../Context/CartContext';
import './Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose, faMoneyBillTransfer, faWarning, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';


const Cart = () => {
    const {
      cartItems,
      removeFromCart,
      cartTotal,
      resetCart
    } = useCart();

    const title = [
      'Items','Title','Price','Quantity','Total','Remove'
    ]

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [paymentMethod, setPaymentMethod] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showAlert,setShowAlert] = useState(false)

    const handleConfirmOrder = () => {
      if (!paymentMethod) {
        setShowAlert(true)
        return;
      }
      setShowAlert(false)
      setShowOverlay(true)
      setShowSuccessModal(true);
    };

    const handleCloseOverLay = () =>{
      setShowAlert(false)
      setShowSuccessModal(false);
      setShowOverlay(false)
      resetCart()
      window.scrollTo(0, 0);
    }

  return (
    <>
      <div className="cart_page">
        <div className="container_cart">
        {cartItems.length === 0 ? (
          <div className="cart_empty"><FontAwesomeIcon className='cart-ic' icon={faCartShopping}/>Your cart is empty</div>
        ) : (
              <>
                <div className='list_product'>
                  <div className='container_title'>
                    {title.map((_,idx) =>(
                        <div key={idx} className="title_in-cart">
                          {title[idx]}
                        </div>
                      ))}
                  </div>
                  {cartItems.map((salad,index) => (
                    <div key={salad.id} className={`prd ${index === 0 ? 'first-prd' : ''}`}>
                        <img
                          src={salad.image}
                          alt={salad.name}
                          className="img-prd"
                        />
                        <h3>{salad.name}</h3>
                        <p className="">
                          ${salad.price }
                        </p>
                        <span>{salad.quantity}</span>
                        <span>${(salad.price * salad.quantity).toFixed(2)}</span>  
                        <FontAwesomeIcon className='ic-remove' onClick={() => removeFromCart(salad.id)} icon={faXmark}/>
                    </div>
                  ))}
                </div>
                <div className="check-out">
                    <div className="cart-total">
                      <h3>Cart Total</h3>
                      <div className="sub-total">
                        <span>Subtotal</span>
                        <p>${cartTotal.toFixed(2)}</p>
                      </div>
                      <div className="delivery-fee">
                        <span>Delivery Fee</span>
                        <p>$5</p>
                      </div>
                      <div className="total">
                        <span>Total</span>
                        <p>${(cartTotal + 5).toFixed(2) }</p>
                      </div>
                      <div className="payment-method">
                        <h2>Choose Payment Method</h2>
                        <div className="payment-options">
                          <label>
                            <input
                              type="radio"
                              name="payment"
                              value="credit"
                              checked={paymentMethod === "credit"}
                              onChange={() => setPaymentMethod("credit")}
                            />
                            Credit Card <FontAwesomeIcon icon={faCreditCard}/>
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="payment"
                              value="paypal"
                              checked={paymentMethod === "paypal"}
                              onChange={() => setPaymentMethod("paypal")}
                            />
                            PayPal <FontAwesomeIcon icon={faPaypal}/>
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="payment"
                              value="bank"
                              checked={paymentMethod === "bank"}
                              onChange={() => setPaymentMethod("bank")}
                            />
                            Bank Transfer <FontAwesomeIcon icon={faMoneyBillTransfer}/>
                          </label>
                        </div>
                      </div>
                      <button onClick={handleConfirmOrder}>Proceed to checkout</button>
                    </div>
                    <div className="promo-code">
                      <p>If you have a promo code , Enter it here</p>
                      <div className='box-ip-promo'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                      </div>
                    </div>
                </div>
              </>
            )}
            {showAlert && (
              <div className="alert_payment">
                <FontAwesomeIcon icon={faWarning} /> Please select a payment method!
                <FontAwesomeIcon
                  className="ic_close_payment"
                  icon={faClose}
                  onClick={() => setShowAlert(false)} 
                />
              </div>
            )}
            {
              showSuccessModal && (
                <div className="check-out-success">
                  <FontAwesomeIcon className='ic-close-modal' onClick={handleCloseOverLay} icon={faClose}/>
                  <span>Order Successful!</span>
                  <p>Thank you for your order. We will contact you as soon as possible</p>
                </div>
              )
            }
            {showOverlay && (
              <div onClick={handleCloseOverLay} className="over-lay"></div>
            )}
        </div>
      </div>
    </>
  )
}

export default Cart