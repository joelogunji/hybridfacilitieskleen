import styled from 'styled-components';


export const Nav = styled.nav`
display: flex;
height: 80px;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 999;
background-color: #AB1D55;
box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
 background: linear-gradient(to right bottom,
  
     rgba(3, 138, 255, 0.9)
     rgba(3, 138, 255, 0.7)
         );
/* backdrop-filter: blur(0.5rem); */
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-right: auto;
margin-left: auto;
height: 80px;
z-index: 1;
align-items: center;
font-size: 25px;

`

export const LogoHold = styled.div`
margin-left: 20px;
font-weight: bold;
font-size: 30px;

@media screen and (max-width: 750px){
    font-size: 15px;
}

img {
    height: 50px;
    border-radius: 50%;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 850px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
}
`
export const NavBar = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
width: 500px;
justify-content: space-between;
padding-right: 40px;
font-weight: bold;



@media screen and (max-width: 850px){
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-right: 0;
    top:50px;
    height: 80vh;
    justify-content: flex-start;
    width: 100%;
    background: #101522;
    left: ${({click}) => (click? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
}
`

export const NavLinks = styled.div`
font-size: 20px;
cursor: pointer;
color: #CF8A2F;


&:hover{
    border-bottom: 2px solid whitesmoke;
}

@media screen and (max-width : 850px){
    margin-top: 20px;
    color: #CF8A2F;
}
`