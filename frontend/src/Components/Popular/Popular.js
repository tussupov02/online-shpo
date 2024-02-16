import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

function Popular() {

  const [datProduct, setDatProduct]= useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/populariCar')
    .then((response)=>response.json())
    .then((data)=>setDatProduct(data))
  },[])

  return (
    <div className='popular__main'>
      <div className='popular'>
        <h1>
            Популярные часы
        </h1>
        <hr />
        <div className="popular__item">
            {datProduct.map((item, i)=>{
                return<Item key={i} id={item.id} name={item.name} imageMain={item.imageMain} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
      <div className='popular__img'>
        
      </div>
    </div>
  )
}

export default Popular