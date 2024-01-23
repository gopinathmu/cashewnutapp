import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate(); 

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleExit = () => {
    navigate("/"); 
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          
   <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          
          <div className="add-btn">
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div className="del">
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
         
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>₹{price}</span>
      </div>
      <p className="exit-btn" onClick={handleExit}>Back to home</p>
    </article>
  );
};

export default Cart;


