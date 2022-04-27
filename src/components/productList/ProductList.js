import React from "react";
import "./productList.css";
import Product from '../product/Product'
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Web Apps</h1>
        <p className="pl-desc">
          Some of my personal projects that i code and deployed using the MERN stack and various libreries.
        </p>
      </div>
      <div className="pl-list">
        {products.map(
          (item)=>{
            return <Product key={item.id} img={item.img} link={item.link}> </Product>
          }
        )}
      </div>
    </div>
  );
};

export default ProductList;
