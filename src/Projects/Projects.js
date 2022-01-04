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
        <div className="project-name">Url Shortener</div>
        <div className="project-desc">A website that consumes the TinyUrl API to shorten links</div>
        <div className="project-skills">
          <div className="skill">Javascript</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">APIs</div>
          <div className="skill">JSON</div>
        
        </div>
      </div>  
    </div>

      <div className="single-project">
      
      <div className="project-details">
        <div className="project-name">React Sleep Tracker</div>
        <div className="project-desc">Irregular sleeping patterns are a common problem. <br/>This web app will fulfill your needs in tracking  sleeping patterns, including duration and timings.</div>
        <div className="project-skills">
          <div className="skill">React</div>
          <div className="skill">Firebase</div>
          <div className="skill">CSS</div>
         
        </div>
      </div>  
      <div className="project-image"></div>
    </div>
      </div>
    </section >

   )
}
export default Projects