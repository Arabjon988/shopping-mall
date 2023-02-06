import { useCart } from "react-use-cart";

import "./bag.css";

const Basket = () => {
  return (
    <div className=" container cart">
      <div className="cart_main">
        <div className="cart_items">
          <h1 className="cart_items_title">Your cart is empty</h1>
          <div className="cart_item">
            <img src='' className="cart_item_img" alt="logoo" />
            <div className="cart_item_info">
              <h3 className="cart_item_title">hello</h3>
              <p className="cart_item_text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="cart_item_shop">
              <h3 className="cart_item_shop_title">This product have 1</h3>
              <div className="cart_item_shop_crements">
                <button className="cart_item_shop_crement">+</button>
                <button className="cart_item_shop_crement">-</button>
              </div>
              <button className="cart_item_shop_remove">remove</button>
            </div>
          </div>
        </div>
        <div className="total">
          <h1 className="total_title">Your cart total 0 </h1>
          <h2 className="total_price"> Total price 0 </h2>
          <button type="submit" className="total_buy">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
