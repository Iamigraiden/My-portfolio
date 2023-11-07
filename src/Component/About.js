import React from 'react'
import Navbar from './Navbar'

export default function About() {

  return (
    <div>

      <Navbar title="About Me"  link="/about"/>
      <h3 className='abouthead'>ABOUT <span  style={{color:"red"}}>ME</span></h3>
      <h4 className='personalinfo'>PERSONAL INFOS</h4>
      <div className="about-container">
      <div >
      
            <p className="inf0">First Name: <span className="info2" >Abishek</span> </p>
            <p className="inf0">Last Name: <span className= "info2">Thakur</span></p>
            <p className="inf0">Age: <span className="info2" >22</span></p>
            <p className="inf0">Nationality: <span className="info2" >Indian</span></p>
      
        </div>
        <div >
            <p className="inf0">Address: <span className="info2" >Hamirpu(H.P)</span> </p>
            <p className="inf0">Email: <span className= "info2">abishekthakur8862@gmail.com</span></p>
            <p className="inf0">Github: <span className="info2" ><a href="https://github.com/Iamigraiden" target='_blank' style={{color:"red"}}>Iamigraiden</a></span></p>
            <p className="inf0">Language: <span className="info2" >English,Hindi</span></p>
    </div>
        </div>
        <div className="resume">
        <button><a href="public\Abishek CV.pdf" h><b>DOWNLOAD CV</b></a></button></div>

        <p className="skills"><b>MY SKILLS</b></p>
        <div class="progress-bar-container">
  <div >
  <div class="progress-bar html" id="html">
    <progress  min="0" max="100" value="85"></progress>
  </div> <p>HTML</p>
  </div>
  <div><div class="progress-bar html"id="css" >
    <progress min="0" max="100" value="85"></progress>
  </div><p>CSS</p></div>
  <div> <div class="progress-bar html" id="java">
    <progress  min="0" max="100" value="75"></progress>
  </div><p>JAVA SCRIPT</p> </div>
  <div><div class="progress-bar html" id='bootstrap'>
    <progress min="0" max="100" value="80"></progress>
  </div><p>BOOSTRAP</p></div>
  <div><div class="progress-bar html" id='react'>
    <progress min="0" max="100" value="67"></progress>
  </div><p>REACT</p></div>
  <div> <div class="progress-bar html" id='nodeJS'>
    <progress min="0" max="100" value="62"></progress>
  </div><p>NODEJS</p></div>
   <div> <div class="progress-bar html" id='mongo'>
    <progress min="0" max="100" value="61"></progress>
  </div><p>MONGODB</p></div>
  

</div>

      
<script>

  
</script>
      </div>
      
  )
}
