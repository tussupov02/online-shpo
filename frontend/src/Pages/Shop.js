import React from 'react'
import Chat from '../Components/Chat/Chat'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'

function Shop() {
  return (
    <div>
      <Hero/>
      <Offers/>
      <Popular/>
      <NewCollections/>
      <Chat/>
    </div>
  )
}

export default Shop