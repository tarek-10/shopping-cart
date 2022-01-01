import React, { useState } from "react";
import "./Products.css";
import ProductModal from "./ProductModal";
function Products({ products }) {
  const [product, setProduct] = useState("");
  const operModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    // <div className="products-wrapper">
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <div className="product-item">
    //         <img src={product.imageUrl} alt={product.title} />
    //         <div className="product-desc">
    //           <p>{product.desc} </p>
    //           <span>{product.price}</span>
    //         </div>
    //         <button>Add To Cart</button>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-2 mx-3">
          <div className="items">
            <a href="#" onClick={() => operModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className="product-desc">
              <span>{product.title} </span>
              <span> ${product.price}</span>
            </div>
            <button className="product-btn">Add To Cart</button>
          </div>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}

export default Products;
