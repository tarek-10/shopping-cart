import React from "react";
import "./Products.css";
function Products({ products }) {
  console.log(products);
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
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-desc">
              <span>{product.title} </span>
              <span>{product.price}</span>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
