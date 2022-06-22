import React from 'react'
import './WhatsApp.css'
import WhatsappIcon from "./whatsapp.jpg"


const WhatsApp = () => {
  return (
    <>
    <a
        href="https://wa.me/2348096581480"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsappIcon}/>
    </a>
    </>
  )
}

export default WhatsApp