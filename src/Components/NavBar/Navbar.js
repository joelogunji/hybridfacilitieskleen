import React,{useState} from 'react'
import Stemballer from "./hybrid logo.png"
import {FcMenu, FcMinus} from 'react-icons/fc'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
    Nav,  
    NavContainer,  
    LogoHold,  
    MobileIcon,
    NavBar,
    NavLinks 
} 
    from './NavBar.Element'

function Navbar() {
    const [click, setClick] = useState(false);

    const handClick = () => {
        setClick(!click)
    }
  return (
    <>
    <Nav>
        <NavContainer>

            <LogoHold>
                <Link to="/" style={{color:"rgb(4, 4, 24)", textDecoration:"none"}}><img src={Stemballer}/> </Link>
            </LogoHold>

            <MobileIcon onClick={handClick}>
                {click ?<FcMinus />:<FcMenu />}
            </MobileIcon>

            <NavBar onClick={handClick} click={click}>
                <Link to="/" style={{color:"white", textDecoration:"none"}}><NavLinks >Home</NavLinks></Link>
                <Link to="/contact" style={{color:"white", textDecoration:"none"}}><NavLinks>Contact</NavLinks></Link>
                <Link to="/serve" style={{color:"white", textDecoration:"none"}}><NavLinks>Services</NavLinks></Link>
                <Link to="/about" style={{color:"white", textDecoration:"none"}}><NavLinks>About</NavLinks></Link>
            </NavBar>
           
        </NavContainer>
    </Nav>
    
    </>     
    
  )
}

export default Navbar