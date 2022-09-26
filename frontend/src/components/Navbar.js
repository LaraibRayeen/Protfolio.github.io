import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../Image/Screenshot.png'
const Navbar = () => {
  return (
    <>
     
     <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} className="img-fluid w-75 h-auto d-inline-block"></img>
      
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fa-solid fa-bars-staggered"/>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item my-0  mx-2  position-relative ">
          <a className="nav-link active link-dark fs-5 mylink  h3 " aria-current="page" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item my-0  mx- position-relative">
          <a className="nav-link link-dark fs-5  mylink h3" href="#about">
            About
          </a>
        </li>
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink  h3" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink h3" href="#portfolio">
            Portfolio
          </a>
        </li> 
        <li className="nav-item my-0  mx-2 position-relative">
          <a className="nav-link link-dark fs-5 mylink h3" href="#contect">
            Contect
          </a>
        </li>
        <li className="nav-item mt-4 mt-lg-0   mx-2">
          <a  type="button" className="btn btn-outline-dark mylink" data-mdb-ripple-color="dark" href="#">
            Hire me
          </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    
    </>    
  )
}
export default Navbar;