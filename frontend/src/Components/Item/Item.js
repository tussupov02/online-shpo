import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center-",
          alignItems: "space-between",
          textAlign: "center",
        }}
        to={`/product/${props.id}`}
      >
        <img src={props.imageMain} alt=""/>
        <div className="item__content">
          <p>{props.name}</p>
          <div className="item__price">
            <div className="item__price__new">{props.new_price}</div>
            <div className="item__price__old">{props.old_price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
