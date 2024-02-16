import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./CSS/ShopCategory.css"
import Item from '../Components/Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  const [categoryTitle, setCategoryTitle] = useState('')

  const categoryFunc=()=>{
    if(props.category==="Classics"){
      setCategoryTitle("Классические часы")
    }else if(props.category==="Sport"){
      setCategoryTitle("Спортивные часы")
    }else if(props.category==="Casual"){
      setCategoryTitle("Повседневные часы")
    }
  }

  useEffect(()=>{
    categoryFunc()
  },[props])

  return (
    <div className='shop__category'>
            <div className="shopcategory__title">
        <h1>{categoryTitle}</h1>
        <hr />
      </div>
      <div className="shopcategory__products">
        {all_product.map((item, i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} imageMain={item.imageMain} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {return null}
        })}
      </div>
    </div>
  )
}

export default ShopCategory