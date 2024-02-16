import React, { useContext } from "react";
import "./RelatedProducts.css";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";

function RelatedProducts(props) {
  const {product}=props;
  const { all_product } = useContext(ShopContext);
  return (
    <div className="relateproducts">
      <h1>ПОХОЖИЕ ТОВАРЫ <hr /></h1>
      
      <div className="relateproducts__item">
        {all_product.filter(e => e.id!==product.id && e.category === product.category).map((item, i) => {
          return <Item
              key={i}
              id={item.id}
              name={item.name}
              imageMain={item.imageMain}
              new_price={item.new_price}
              old_price={item.old_price}
            />
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
