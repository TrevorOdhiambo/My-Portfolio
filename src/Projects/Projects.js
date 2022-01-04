import React from 'react'
import './projects.css'



const Projects = (props)=>{

   return(
    <section className="projects">
    
      <div className="project-container">
      <h1 className="title">Projects</h1>  
      <div className="single-project">
      <div className="project-image"></div>
      <div className="project-details">
        <div className="project-name">React Sleep Tracker</div>
        <div className="project-desc">Irregular sleeping patterns are a common problem. This web app will fulfill your needs in tracking  sleeping patterns, including duration and timings.</div>
        <div className="project-skills"></div>
      </div>  
    </div>
      </div>
    </section >

   )
}
export default Projects