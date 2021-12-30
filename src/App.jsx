import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
export default function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <main>Content</main>
        <Footer />
      </div>
    </>
  );
}
