import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [imgMain, setImgMain] = useState("");

  return (
    <div>
      {window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })}
      <div className="productdisplay">
        <div className="productdisplay__left">
          <div className="productdisplay__img__list">
            <img
              src={product.imageMain}
              onClick={() => setImgMain(product.imageMain)}
              alt=""
            />
            {product.imageMain === product.imageOne ? (
              <></>
            ) : (
              <img
                src={product?.imageOne}
                onClick={() => setImgMain(product.imageOne)}
                alt=""
              />
            )}
            <img
              src={product.imageTwo}
              onClick={() => setImgMain(product.imageTwo)}
              alt=""
            />
          </div>
          <div className="productdisplay__img">
            <img
              className="productdisplay__main__img"
              src={imgMain ? imgMain : product.imageMain}
              alt=""
            />
          </div>
        </div>

        <div className="productdisplay__right">
          <h1>{product.name}</h1>
          <div className="productdisplay__right__stars">
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starDullIcon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay__right__prices">
            <div className="productdisplay__right__prices__old">
              {product.old_price} т
            </div>
            <div className="productdisplay__right__prices__new">
              {product.new_price} т
            </div>
          </div>
          <div className="productdispaly__right__description">
            <p>
              Механизм:{" "}
              <span style={{ fontWeight: "400" }}>{product.mechanism}</span>
            </p>
            <p>
              Бренд: <span style={{ fontWeight: "400" }}>{product.brand}</span>
            </p>
            <p>
              Коллекция: <span style={{ fontWeight: "400" }}>{product.collection}</span>
            </p>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ДОБАВИТЬ В КОРЗИНУ
          </button>
        </div>
      </div>
      <p className="content">
      Описание: <span>{product.description}</span>
        
      </p>
    </div>
  );
}

export default ProductDisplay;
