import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'


const Navbar = ()=>{
  return(
    
    <nav id="nav"> 
      <div className="logo">
        <h2 className="initials">Trevor <span>Odhiambo</span></h2>
     
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a> </li>
        
      </ul>
      <FontAwesomeIcon className="bar-icon" icon={faBars}/>

    </nav>
  )
}

export default Navbar