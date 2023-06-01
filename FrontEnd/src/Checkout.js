import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "./StateProvider";


export default function Checkout() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://www.webinterpret.com/wp-content/uploads/2020/03/amazon-global-ecommerce-cart.png"
          alt=""
        />
        <div>
          <h2 className="checkout_title"> your Shopping Basket</h2>
          {/* <CheckoutProduct/> */}
          {console.log(basket)}
          {basket?.map((item) => 
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          )}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
