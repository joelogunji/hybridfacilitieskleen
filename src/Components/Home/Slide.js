import React from "react"
import { Carousel } from 'antd';
import styled from "styled-components"
import Blogs1 from "./Images/wiping.jpg"
import Blogs2 from "./Images/clean-floor.jpg"
import Blogs3 from "./Images/clean-toilet.jpg"
import Volunteer from "./Images/VolunteerImage.png"


export function Slide () {
    return (
  <Carousel autoplay>
    <Container>
      <Image src={Blogs1}/>
    </Container>
    <Container>
      <Image src={Blogs2}/>
    </Container>
    <Container>
      <Image src={Blogs3}/>
    </Container>
    <Container>
      <Image src={Volunteer}/>
    </Container>
  </Carousel>
)
}

export default Slide 

const Container = styled.div`
height: 100vh;
width: 100%;
color: black;
line-height: 160px;

@media screen and (max-width: 850px) {
  height: 60vh;
}
`

const Image = styled.img`
height: 100%;
width: 100%;
`