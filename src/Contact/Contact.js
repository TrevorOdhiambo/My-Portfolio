import React,{useState } from "react"
import './contact.css'
import { db } from '../../src/firebase.js'
const Contact = ()=>{

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [msg,setMsg] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()

    db.collection('contacts').add({
      name : name,
      email : email,
      msg : msg
    })
    .then(()=>{
      alert('Succesful')
    })
    .catch((error)=>{
      alert(error.msg)
    })
  }
  return(
    <section className="contact">
      <h1 className="title">Contact Me</h1>
      <div className="details">

      </div>
      <div className="contact-form">
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" className="name-input" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type="text" className="email-input" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <textarea type="text" className="message-input" placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
          <input type="button" className="btn" value="Submit"/>
        </form> 
      </div>
    </section>
  )
}

export default Contact