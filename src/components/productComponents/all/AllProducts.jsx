import { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";

import "./allProducts.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axiosClient.get("/").then(({ data }) => {
      setProducts(data);
      console.log(data);
    });
  };
  const onSubmit = () => {
    console.log("salom");
  };
  return (
    <div className="allProducts">
      <div className="product_items">
        {products.map((item) => (
          <div className="product_item" key={item.id}>
            <img src={item.image} alt="rasmlar" className="product_item_img" width="100px" />
            <p className="product_item_title">{item.title}</p>
            <button className="product_item_btn" onSubmit={onSubmit}>Show</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
