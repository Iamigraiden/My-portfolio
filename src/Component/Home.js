import React from 'react'
import Navbar from './Navbar'
import image from'./IMG_20231103_105733.jpg'

export default function Home() {
  return (
    <>
    <Navbar title="Home" link="/"/>
    <div className='container'>
      <div className="img">
        <img src={image} alt=""/>
      </div>
        <div className="intro"><p className='heading1'>HI THERE !</p>
      <h2 ><b> I'M <span style={{color:"red"}}>ABISHEK THAKUR</span></b></h2>
      <p className='para'>I'm an India based web designer & front‑end <br /> developer focused on crafting clean & user‑friendly <br /> experiences, I am passionate about building  <br />excellent software that improves the lives of those around me.</p>
    </div>
    </div>
  </>
  )
}
