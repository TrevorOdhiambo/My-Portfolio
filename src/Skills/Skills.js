import React from 'react'
import './skills.css'
const Skills = ()=>{
  return(

    <section className="skills">
     <h1>Skills</h1>
      <div className="skills-box">
        <div className="tech-item">
          <p className="tech-name">HTML</p>
          <p className="percentage">90%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">CSS</p>
          <p className="percentage">70%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">JAVASCRIPT</p>
          <p className="percentage">60%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">REACT</p>
          <p className="percentage">40%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">GIT</p>
          <p className="percentage">50%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">NODEJS</p>
          <p className="percentage">10%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">FIREBASE</p>
          <p className="percentage">30%</p>
        </div>
        <div className="tech-item">
          <p className="tech-name">JSON</p>
          <p className="percentage">50%</p>
        </div>
        
      </div>
    </section>
  )
}

export default Skills