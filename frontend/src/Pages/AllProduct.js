import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { useState } from "react";
import { useEffect } from "react";

function AllProduct(props) {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(8)

  useEffect(()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
       let array = all_product.filter((el)=>el.id<=showMore);
       return setProducts(array)
  },[])
  useEffect(()=>{
       let array = all_product.filter((el)=>el.id<=showMore);
       return setProducts(array)
  },[showMore])

  return (
    <div className="shop__category">
      <div className="shopcategory__title">
        <h1>ВСЕ ТОВАРЫ</h1>
        <hr />
      </div>
      <div className="shopcategory__products">
        {products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              imageMain={item.imageMain}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="shpocategory__loadmore" onClick={()=>setShowMore(showMore+8)}>ПОКАЗАТЬ ЕЩЕ</div>
    </div>
  );
}

export default AllProduct;
