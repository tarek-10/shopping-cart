import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <>
      <div className="mainFilter">
        <h2 className="filter-title">Filter</h2>
        <div className="num-of-products">number of product 4</div>
        <div className="filter-by-size">
          <span className="filter-size">Filer</span>
          <select name="filter-select">
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter-by-newest">
          <span className="filter-size">Filter</span>
          <select name="filter-select">
            <option value="Lastest">Latest</option>
            <option value="Lower">Lower</option>
            <option value="Heighest">Highest</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
