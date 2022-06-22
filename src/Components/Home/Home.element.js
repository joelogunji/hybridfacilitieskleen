import styled from 'styled-components'
import FirstpageBackground from './Images/Firstpage-Bg.png'


export const HomeContain = styled.div`
background-color: #E5E5E5;

@media screen and (max-width: 850px) {
    font-size: smaller;
}
`

export const Firstpage = styled.div`
// height: 150vh;
width: 100%; 
display: flex;
flex-direction: column;
align-items: center;
`

export const FirstpageBg = styled.div`
height: 75%;
width: 100%;
/* background-image: url(${FirstpageBackground}); */
`

export const SlideContain = styled.div`
height: 100%;
width: 100%;
`

export const Firstpagecard = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -70px;
    z-index: 1;

    @media screen and (max-width: 850px) {
    height: 80%;
    width: 90%;
}
`
export const FirstpageBGText = styled.div`
height: 20%;
width: 50%;
position: absolute;
left: 10%;
top: 25%;
color: #FFFFFF;
z-index: 1;
font-size: 20px;

p{
    color: black;
}

@media screen and (max-width: 750px) {
    font-size: 10px;
    top: 20%;
}
`

export const WMButtons = styled.div`
display: flex;
justify-content: space-between;
`

export const OurImpact = styled.div`
height: 55vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const OurImpactHead = styled.div`
height: 20%;
width: 100%;
text-align: center;
font-size: 38px;
font-weight: medium;

@media screen and (max-width: 850px) {
    font-size: 28px;
}
`

export const OICardContain = styled.div`
height: 80%;
width: 94%;
display: flex;
justify-content: space-between;
`

export const OurImpactCard = styled.div`
height: 100%;
width: 32%;
font-size: 16px;
font-weight: 500;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 850px) {
    font-size: smaller;
}
`

export const OurImpactButton = styled.div`
height: 15%;;
width: 100%;
background-color: #3AB54A;
text-align: center;
border-radius: 8px;
`

export const OICardImage = styled.img`
height: 100%;
width: 100%;
`

export const Volunteer = styled.div`
height: 70vh;
width: 100%;
display: flex;
justify-content: center;
`

export const VolunteerContain = styled.div`
height: 100%;
width: 95%;
display: flex;
justify-content: space-between;
`

export const VolunteerLeft = styled.div`
height: 100%;
width: 48%;
`

export const VolunteerLeftHead = styled.div`
height: 23%;
width: 100%;
font-size: 30px;
font-weight: medium;

@media screen and (max-width: 850px) {
    font-size: 25px;
}
`

export const VolunteerImage = styled.img`
height: 77%;
width: 100%;
`

export const VolunteerRight  = styled.div`
height: 100%;
width: 48%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 2px 5px 2px 2px #dddddd;
`

export const VRContain = styled.div`
height: 96%;
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const VolunteerRightHead = styled.div`
font-size: 30px;
font-weight: medium;
height: 20%;

@media screen and (max-width: 850px) {
    font-size: 25px;
}
`


export const VolRightContain = styled.div`
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
`

export const VolunteerEmail = styled.form`
height: 15%;
width: 80%;
`

export const VolunteerLeaveMessage = styled.form`
height: 45%;
width: 80%;
`

export const VInput1 = styled.input`
height: 50%;
width: 100%;
border-radius: 5px;
border-width: 1px;
`

export const VolunteerButton = styled.button`
height: 9%;
width: 80%;
border-radius: 5px;
background-color: #25AAE2;
`

export const Blogs = styled.div`
height: 100vh;
width: 100%;

@media screen and (max-width: 850px) {
    height: 70vh;
}
`

export const BlogCHContain = styled.div`
height: 80%;
width: 100%;
display: flex;
justify-content: center;
`

export const BlogHead = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 38px;
font-weight: medium;

@media screen and (max-width: 850px) {
    font-size: 20px;
}
`

export const BlogCardHolder = styled.div`
height: 100%;
width: 95%;
display: flex;
justify-content: space-between;
`

export const EventGallery = styled.div`
height: 120vh;
width: 100%;
display: flex;
justify-content: center;
`

export const EGContain = styled.div`
height: 100%;
width: 95%;
`


export const Bottom = styled.div`
height: 50vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #003399;
color: white;

@media screen and (max-width: 750px) {
    font-size: 10px;
    height: 40vh;
}
`

export const BottomCol = styled.div`
height: 100%;
width: 23%;
flex-wrap: wrap;
`

export const BottomContain = styled.div`
height: 80%;
width: 95%;
display: flex;
justify-content: space-between;
`

export const Button1 = styled.button`
width: 150px;
height: 45px;
background-color: #3AB54A;
color: white;
border-radius: 5px;
border: none;
`

export const Button2 = styled.button`
width: 150px;
height: 42px;
background: none;
color: white;
border-color: white;
`

export const VInputBottom = styled.input`
height: 50px;
width: 100%;
border-radius: 5px;
`

export const Objclause = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const ObjClsContain = styled.div`
width: 90%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;

h1{
    font-size: 35px;
}
li{
    font-size: 25px;
}

@media screen and (max-width:750px){
    h1{
        font-size: 25px;
    }
    li{
        font-size: 15px;
    }
    
}
`