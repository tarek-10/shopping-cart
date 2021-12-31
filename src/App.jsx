import React, { useState } from "react";
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
          <div className="mainWrapper">
            <Products products={products} />
            <div className="mainFilter">Filter</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
