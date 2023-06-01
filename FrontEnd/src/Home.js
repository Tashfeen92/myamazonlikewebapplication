import React from "react";
import "./Home.css";
// import image from "./Asset/kl.jpg";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://thehealthcaretechnologyreport.com/wp-content/uploads/2018/12/amazon.jpeg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="13"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1237"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="1239"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="1230"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          {" "}
          <Product
            id="1234"
            title="The lean startup"
            price={23.89}
            image="https://m.media-amazon.com/images/I/81W2Pw+kM2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
