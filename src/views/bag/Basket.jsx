import { useCart } from "react-use-cart";
import ProductList from "../../components/productList/ProductList";

import "./bag.css";

const Basket = () => {

  const {
    items,
    totalUniqueItems,
    totalItems,
    cartTotal,
    removeItem,
    updateItemQuantity,
    emptyCart
  } = useCart();


  return (
    <div className=" container cart">
      <div className="cart_main">
        <div className="cart_items">
          <h1 className="cart_items_title">Your cart total {totalUniqueItems}  || <button className="cart_item_shop_clear" onClick={()=>emptyCart()}>clear</button> </h1>
          {items.map((item) => (
          <div className="cart_item" key={item.id}>

            <img src={item.image} className="cart_item_img" alt="logoo" />
              <p className="cart_item_price" > {item.price}$</p>
            <div className="cart_item_info">
              <h3 className="cart_item_title" >{item.title}</h3>
              <p className="cart_item_text" >{item.description}</p>
            </div>
            <div className="cart_item_shop">
              <h3 className="cart_item_shop_title">This product have {item.quantity}</h3>
              <div className="cart_item_shop_crements">
                <button className="cart_item_shop_crement" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="cart_item_shop_crement" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              </div>
              <button className="cart_item_shop_remove" onClick={() => removeItem(item.id)} >Remove</button>
            </div>
          </div>
          ))}
       
        </div>
        <div className="total">
          <h1 className="total_title">Your cart total {totalUniqueItems} </h1>
          <h2 className="total_price"> Total price $ {cartTotal} </h2>
          <button type="submit" className="total_buy">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
