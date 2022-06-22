import React from 'react'
import styled from 'styled-components'

function FirstpageCard(props) {

  return (
    <FirstpageCardHolder style={{backgroundColor: props.BC}}>
        <FPCardLContain><FPCardLogo src={props.logo}/></FPCardLContain>
        <FPCardHead>{props.head}</FPCardHead>
        <FPCardText>
        {props.text1}<br/>
        {props.text2}<br/>
        {props.text3}<br/>
        {props.text4}<br/>
        </FPCardText>
    </FirstpageCardHolder>
  )
}

export default FirstpageCard

const FPCardLContain = styled.div`
height: 30%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 850px) {
    height: 20%;
}
`

const FPCardLogo = styled.img`
height: 70px;
width: 70px;

@media screen and (max-width: 850px) {
    height: 43px;
    width: 43px;
}
`

const FPCardHead = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: center;
font-size: 38px;

@media screen and (max-width: 850px) {
    font-size: small;
    height: 15%;
}
`

const FPCardText = styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: center;
text-align: center;
`

const FirstpageCardHolder = styled.div`
height: 40vh;
width: 31%;
border-radius: 10px;
color: #FFFFFF;
`
