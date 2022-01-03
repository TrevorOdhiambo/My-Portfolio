import React,{useState } from "react"
import './contact.css'
import { db } from '../../src/firebase.js'
const Contact = ()=>{

  
  return(
    <section className="contact">
      <h1 className="title">Contact Me</h1>
      <div className="details">

      </div>
      <div className="contact-form">
        <form id="form">
          <input type="text" className="name-input" placeholder="Name" />
          <input type="text" className="email-input" placeholder="Email" />
          <textarea type="text" className="message-input" placeholder="Message" />
          <input type="button" className="btn" value="Submit"/>
        </form> 
      </div>
    </section>
  )
}

export default Contact