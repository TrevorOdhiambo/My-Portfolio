import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'


const Navbar = ()=>{
  return(
    
    <nav id="nav"> 
      <div className="logo">
        <h2 className="initials">T<span>.</span>O</h2>
     
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a> </li>
        <li><a href="#">Dark Mode <span> <FontAwesomeIcon icon={faMoon}/></span> </a> </li>
        
      </ul>
    </nav>
  )
}

export default Navbar