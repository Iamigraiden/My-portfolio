import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <div>
      <Navbar title="Contact me"  link="/contact"/>
      <h3 className='abouthead'>GET IN <span  style={{color:"red"}}>TOUCH</span></h3>
      <div className="con-container">
      <div className='con-info'>
        <div><h3 id='contactsub'>FEEL FREE TO CONTACT</h3>
        <p className='con-para'>Feel free to get in touch with me. I am always <br /> open to discussing new projects, creative ideas <br /> or opportunities to be part of your visions.</p></div>
        <div className="mail">
        <i class="fa-solid fa-3x fa-envelope"></i>
        <div className="mailinfo">
         <div>MAIL ME</div>
         <div style={{color:"red"}}> iamigraiden@gmail.com</div>
        </div>
        </div>
        <div className="icon">
        <i class="fa-brands fa-2x fa-facebook"></i>
        <i class="fa-brands  fa-2x fa-instagram"></i>
        <i class="fa-brands  fa-2x fa-github"></i>
        </div>
      </div>
      <div className="formarea">
      <form action="https://formspree.io/f/moqobdyn" method='post'>
        <div className="formtype">
       <div className="form"> <input type="text" name="Name" id="" placeholder='YOUR NAME' className='input' required/> </div>
       <div className="form" ><input type="email" name="Email" id="" placeholder='YOUR EMAIL' required/></div> 
       <div className="form" ><input type="text" name="" id="" placeholder='YOUR SUBJECT'required/> </div> </div> <br />
        <div className="msgarea"><textarea name="" id="msg-area" cols="" rows="6" placeholder='YOUR MESSAGE ' ></textarea></div><br />
      <div className='fbutton'><input type="submit" value="SEND MESSAGE" /></div>
      
      </form>
      </div>
      </div>
    </div>
  )
}
