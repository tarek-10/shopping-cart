import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
export default function App() {
  const [products, setProducts] = useState(data);

  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} />
            <Filter />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
