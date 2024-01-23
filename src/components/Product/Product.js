import React from "react";
import list from "../../data";
import Cards from "./card";
import "./Product.css";

const Product = ({ handleClick }) => {
  return (
    <section>
      <h1>Products</h1>
      <div className="list">
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </section>
  );
};

export default Product;
