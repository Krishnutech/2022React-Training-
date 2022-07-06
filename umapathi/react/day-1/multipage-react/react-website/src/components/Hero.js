import React from 'react'
import "../styles/home.css"

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <p>Best magical card collections ever !</p>
            <button>Buy now</button>
        </div>
        <img src='../bg.png' alt='hero' />
    </div>
  )
}

export default Hero