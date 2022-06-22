import React from 'react'
import Map from "./Map"
import styled from "styled-components"


function Contact() {
  return (
    <>
    <Div>
    
   
    <br/>
    <div>
    <p>Phone 1: +2348183641142   (Whatsapp and Telegram)</p>
    <p>Phone 2: +2349072578285</p>
    <p>Instagram: <a href="https://www.instagram.com/joel_ogunji">@joel_ogunji</a></p>
    <p>Facebook: <a href="https://www.facebook.com/roboballer.ng/">Stemballer</a></p>
    <p></p>
    <br/>
    <Map/>
    <p>       49, Sholanke Street, Akoka, Lagos, Nigeria.</p>
    <p>       Postal code: 100213</p>
    </div>
    </Div>
    
    </>
  )
}

export default Contact


const Div = styled.div`
font-size: 30px;
padding-left: 50px;
`