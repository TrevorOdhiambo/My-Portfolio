import React from 'react'
import './cv.css'
import { RiCloseLine } from "react-icons/ri";

function CV( {setIsOpen} ){
  return(
    <>
   <div className="darkBG" onClick = {()=> setIsOpen(false)}></div>
   <div className="centered">
     <div className="modal">
       <div className="modalHeader">
         <h5 className="heading">RESUME</h5>
       </div>
       <button className="closeBtn" onClick={()=>setIsOpen(false)}>
       <RiCloseLine style={{ marginBottom: "-3px" }} />
       </button>
       <div className="modalContent">
         Are you sure you want to delete this item
       </div>
     </div>
   </div>
   </>
  )
}

export default CV