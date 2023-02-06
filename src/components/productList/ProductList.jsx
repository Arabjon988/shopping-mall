import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import axiosClient from "../../api/axiosClient";
import "./productList.css";

const ProductList = () => {
  const { addItem } = useCart();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    axiosClient.get(`${id}`).then(({ data }) => {
      setProduct(data);
    });
  };

  return (
    <div className="productList">
      <div className="container">
        <div className="product_list_item">
          <div className="productList_info">
            <h1 className="product_itemlist_title">{product.title}</h1>
            <p className="product_list_item_text">{product.description}</p>
            <p className="product_list_item_price">${product.price}</p>
            <button
              type="submit"
              className="product_list_item_btn"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="product_list_item_img"
            width="400px"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
