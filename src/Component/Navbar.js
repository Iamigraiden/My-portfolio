import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
     <nav className="navbar navbar-dark bg-black sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href={props.link}><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li><li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li><li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
          </li><li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
</nav> 
    </>
  )
}
