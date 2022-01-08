import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
export default function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handlerFitlerBySize = (e) => {
    setSize(e.target.value);

    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...products];

      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );

      setProducts(newProducts);
    }
  };

  const handlerFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "Lowest") {
        return a.price - b.price;
      } else if (order == "Hightest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} />
            <Filter
              size={size}
              sort={sort}
              handlerFitlerBySize={handlerFitlerBySize}
              handlerFilterByOrder={handlerFilterByOrder}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
