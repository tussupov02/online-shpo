import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      { window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })}
       <div>
        <p className='title'>O'CLOCK</p>
        <hr/>
        <p className='sity'>ASTANA</p>
       </div>
       <div className='hero__top'>
        <p>Время не ждет слабаков – выбирай стиль, не откладывая!</p>
       </div>
    </div>
  )
}

export default Hero