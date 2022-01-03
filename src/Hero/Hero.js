import React from "react"
import './hero.css'
import Navbar from '../Nav/Navbar'
const Hero = ()=>{
  return(
    <section className="container">
      <Navbar/>
      <div className="introduction">
        <h1 className="name">
          Hello! I'm TREVOR...
          </h1>
          <p>
            A Budding web developer driven by curiosity!!! I hope to become an amazing problem solver and a brilliant developer - and the journey starts here.
          </p>
        
      </div>
      <div className="buttons">
         <a className="btns cv-btn">CV <span>&#8594;</span> 
           </a>     
         <a href='https://github.com/TrevorOdhiambo' className="btns git-btn">Github <span>&#8594;</span></a>   
      </div>
    </section>
  )

}

export default Hero