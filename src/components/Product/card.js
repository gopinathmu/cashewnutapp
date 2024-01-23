import React from "react";
import "./Product.css";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (

    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>₹{price}</p>
      </div>
      <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>

  );
};

export default Cards;