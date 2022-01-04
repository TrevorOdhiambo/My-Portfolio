import React from 'react'
import './projects.css'
import Project from './Project'


const Projects = ()=>{
   return(
    <section className="projects">
    
      <div className="project-container">
      <h1 className="title">Projects</h1>  
      <Project/>
      </div>
    </section >

   )
}
export default Projects