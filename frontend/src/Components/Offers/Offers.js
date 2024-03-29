import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__content">
        <h1>O'CLOCK</h1>
        <hr />
        <p>
          Добро пожаловать в мир героев времени, где наши брутальные часы –
          источник мощи и стиля. Изготовленные с использованием передовых
          технологий и высококачественных материалов, они представляют собой
          совершенное сочетание силы и элегантности. Смелые дизайны, насыщенные
          цвета и уникальные детали делают каждую модель неповторимой. Выбирайте
          часы, подчеркивающие ваш характер, и поднимайте свой образ на новый
          уровень стиля. Эти часы – выражение вашей индивидуальности, и наш
          магазин является источником вдохновения для ценителей каждой секунды
          жизни. Не ждите, чтобы кто-то другой определил ваше время – возьмите
          его в свои руки с нашими брутальными часами и станьте легендой своего
          времени!
        </p>
        <Link className="offers__btn" to="/allProduct">
          КАТАЛОГ
        </Link>
      </div>
      <div className="offers__img"></div>
    </div>
  );
};

export default Offers;
