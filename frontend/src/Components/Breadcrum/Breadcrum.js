import React, { useEffect } from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Breadcrum(props) {
  const { product } = props;
  const [category, setCategory] = useState('')

  useEffect(() => {
    if(product.category==="Classics"){
      setCategory("Classics")
    }
    else if(product.category==="Sport"){
      setCategory("Sport")
    }
    else{
      setCategory("Casual")
    }
  }, [])

  return (
    <div className="breadcrum">
      <Link className="breadcrum__link" to='/'>Home</Link> <img src={arrowIcon} alt="" />{" "}
      <Link className="breadcrum__link" to={`/${category}`}>{product.category} </Link><img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrum;
