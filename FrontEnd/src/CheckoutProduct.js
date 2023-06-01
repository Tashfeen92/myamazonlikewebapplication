import React from "react";
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";

export default function CheckoutProduct({ id, image, title, price, rating }) {
   const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket =()=>{
    dispatch({
      type:  "REMOVE_FROM_BASKET",
      id:id
    })

  }
  return (
    <div className="checkoutProduct">
        hllllllllllll
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_price">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from BASKET</button>
      </div>
    </div>
  );
}
