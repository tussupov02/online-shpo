import './NewCollections.css'
import React from 'react'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'

function NewCollections() {
  const [newCollection, setNewCollection]= useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollectiond')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data))
  },[])
  return (
    <div className='new__collections'>
        <h1>НОВАЯ КОЛЛЕКЦИЯ</h1>
        <hr />
        <div className="collections">
            {newCollection.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} imageMain={item.imageMain} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections