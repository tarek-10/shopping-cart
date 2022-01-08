import React, { useState } from "react";
import ProductModal from "./ProductModal";
import "./Products.css";
function Products({ products }) {
  const [product, setProduct] = useState("");
  const operModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <div className="productWrapper">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => operModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
          <button className="product-btn">Add To Cart</button>
        </div>
      ))}
      <ProductModal closeModal={closeModal} product={product} />
    </div>
  );
}

export default Products;
