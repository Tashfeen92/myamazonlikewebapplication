import React from "react";
import "./Product.css"
import { useStatevalue } from "./StateProvider";
// import image2 from "./Asset/12.jpg"
export default function Product({title , price, image, rating, id}) {
  const [{basket},dispatch]= useStatevalue()
  console.log("hello", basket)
  const addToBasket=()=>{
    console.log("hello from basket fun")
    dispatch({
      type: "ADD_TO_ BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });  
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        
        </div>
        <img className="img1" src={image} alt="" />
        <button className="btn1" onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}
