import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
import removeIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems__format__main">
        <p>Фото</p>
        <p>Название</p>
        <p>Цена</p>
        <p className="delet">Количество</p>
        <p className="delet">Общий счет</p>
        <p>Удалить</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems__format cartitems__format__main">
                <img
                  src={e.imageMain}
                  alt=""
                  className="cartitems__product__icon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <div className="cartitems__quantity delet">
                  {cartItems[e.id]}
                </div>
                <p className="delet">{e.new_price * cartItems[e.id]}</p>
                <img
                  className="carticon__product__icon"
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems__down">
        <div className="cartitems__total">
          <h1>Общий счет к оплате</h1>
          <div>
            <hr />
            <div className="cartitems__total__item">
              <h3>Итог</h3>
              <h3>{getTotalCartAmount()}</h3>
            </div>
            <hr />
          </div>
          <button>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
