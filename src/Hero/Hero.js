import React from "react"
import './hero.css'
import Navbar from '../Nav/Navbar'
const Hero = ()=>{
  return(
    <section className="container">
      <Navbar/>
      <div className="introduction">
        {/* <h1 className="name">
          Hello! I'm TREVOR...
          </h1>
          <p>
            A Budding web developer driven by curiosity!!! 
          </p> */}
        
      </div>
      <div className="buttons">
         <button className="cv-btn">CV
           </button>     
         <button className="git-btn">Github</button>   
      </div>
    </section>
  )

}

export default Hero