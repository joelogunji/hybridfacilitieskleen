import React from 'react'
import {Firstpage, FirstpageBg, Firstpagecard, FirstpageBGText, OurImpact,
 Donate, Volunteer, Blogs, OurImpactHead, OICardContain,
 OurImpactCard, OICardImage, HomeContain, OurImpactButton, DonateContain, 

 VolunteerContain, VolunteerImage, VolunteerRight, VolunteerRightHead,
 VolunteerButton, VolunteerLeft, VolunteerLeftHead, VRContain,
 VolunteerEmail, VolunteerLeaveMessage, VInput1, BlogCHContain, BlogHead, BlogCardHolder,
 BottomCol, Bottom, BottomContain, Button1, Button2, WMButtons, VInputBottom, SlideContain,
 Objclause, ObjClsContain, VolRightContain} from './Home.element'

import FirstpageCard from './FirstpageCard'
import FirstPIcon1 from "./Images/page1-icon1.png"
import FirstPIcon2 from "./Images/page1-icon2.png"
import FirstPIcon3 from "./Images/page1-icon3.png"
import OICImage1 from "./Images/OICImage1.png"
import OICImage2 from "./Images/OICImage2.png"

import Volunteerimage from "./Images/clean-handshake.jpg"
import BlogCard from "./BlogsCard.js"
import Blogs1 from "./Images/Blogs1.png"
import Blogs2 from "./Images/Blogs2.png"
import Blogs3 from "./Images/Blogs3.png"

import BottomLogo from "./Images/hybrid logo.png"
import FacebookIcon from "./Images/facebook-icon.png"
import InstagramIcon from "./Images/instagram icon.png"
import EmailIcon from "./Images/email-icon.png"
import PhoneIcon from "./Images/phone-icon.png"
import Slider from "./Slide"



function Home() {
  return (
    <HomeContain>
      <Firstpage>
        <FirstpageBg>
          <SlideContain>
            <Slider/>
          </SlideContain>
          <FirstpageBGText>
            <h1>Good Health And Safety Are Our Passion!</h1>
            <p>Property is the pride and joy of its owner... We, at Hybrid Facilities Kleen Limited, are passionate about neatness, safety, and good hygiene of your properties and environment</p><br/>
            <WMButtons>
              <Button1>Contact us</Button1>
              <Button2>Read More</Button2>
            </WMButtons>
          </FirstpageBGText>
        </FirstpageBg>
          <Firstpagecard>
            <FirstpageCard 
            BC="#003399"
            logo={FirstPIcon1}
            head="OUR MISSION"
            text1="At the core of our values, is the utmost
            goal of making individual lives, whether
            old or young, and communities of 
            people, better than we met"
            />
            <FirstpageCard
            BC="#25AAE2"
            logo={FirstPIcon2}
            head="OUR VISION"
            text1="At the core of our values, is the utmost"
            text2="goal of making individual lives, whether"
            text3="old or young, and communities of " 
            text4="people, better than we met"
            />
            <FirstpageCard
            BC="#3AB54A"
            logo={FirstPIcon3}
            head="VOLUNTEER"
            text1="At the core of our values, is the utmost"
            text2="goal of making individual lives, whether"
            text3="old or young, and communities of " 
            text4="people, better than we met"
            />
          </Firstpagecard>
      </Firstpage>

      <Objclause>
        <br/>
        <ObjClsContain>
        <h1>OBJECT CLAUSE</h1>
        <div>
          <ol>
            <li>Janitorial, Residential, Commercial, and Industrial Cleaning Services.</li>
            <li>Laundry and Dry CLeaning Services</li>
            <li>Pressure Washing Services</li>
            <li>Green Cleaning Services</li>
            <li>General Cleaning Services</li>
            <li>De-Cluttering</li>
            <li>Sanitization, Fumigation, and Pest Control</li>
            <li>General Building Maintenance</li>
            <li>Sale of Cleaning Products/Supplies and Equipment.</li>
            <li>Hiring Cleaners for Other Cleaning Companies</li>
            <li>Training CLeaners of other Cleaning Companies</li>
          </ol>
        </div>
        </ObjClsContain>
      </Objclause>
      <br/>
      
     <Volunteer>
      <VolunteerContain>
          <VolunteerLeft>  
            <VolunteerLeftHead>Become a Part of Our satisfied<br/>Customers, <span style={{color: '#3AB54A'}}>Get a Quote!</span></VolunteerLeftHead>
            <VolunteerImage src={Volunteerimage}/>
          </VolunteerLeft>
          <VolunteerRight>
            <VRContain>
              <VolunteerRightHead>Fill to request Quote</VolunteerRightHead>
              
              <form action="action_page.php">
  <VolRightContain>
    <p>Please fill in this form to request quote for our services</p>
    <hr/>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required></input>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

    <label for="phone"><b>Phone number</b></label>
    <input type="text" placeholder="Enter phone number" name="phone" id="phone" required></input>
    <br/>

    <hr/>
  </VolRightContain>

                <label for="service">Choose a Service:</label>
                <select name="services" id="services">
                  <option value="laundry">Laundry</option>
                 <option value="factory cleaning">Office/Factory Cleaning</option>
                  <option value="fumigation">Fumigation</option>
                  <option value="equipment">Material/Equipment Purchase</option>
                </select>
              <br/><br/>
            </form>

              <VolunteerLeaveMessage>
                <label>Additional notes</label><br/>
                <VInput1 type="text" value="enter notes here"></VInput1>
              </VolunteerLeaveMessage>
              <VolunteerButton>Send</VolunteerButton>
            </VRContain>
          </VolunteerRight>
        </VolunteerContain>
      </Volunteer> 

      
      <Bottom>
        <BottomContain>
          <BottomCol><img height="50px" width="90px" src={BottomLogo}/> <div>At the core of our values, is the<br/> utmost goal of making individual<br/> lives, whether old or young, and<br/> communities of people, better than<br/> we meet it.</div></BottomCol>
          <BottomCol>
            <div>MAIN LINKS</div>
            <br/><br/>
            <div>HOME</div><br/>
            <div>ABOUT</div><br/>
            <div>CONTACT</div><br/>
            <div>BLOG</div><br/>
            <div>DONATE</div>
          </BottomCol>
          <BottomCol>
            <div>GET IN TOUCH</div><br/><br/>
            <div><img src={PhoneIcon}/>+2348186793482</div><br/>
            <div><img src={EmailIcon}/>Foundation@gmail.com</div><br/>
            <div>OUR SOCIAL LINKS</div><br/>
            <div>
            <img src={FacebookIcon}/>
            <img src={InstagramIcon}/>
            </div>
          </BottomCol>
          <BottomCol>
            <div>GET LATEST UPDATE</div><br/><br/>
            <div>
              <div>
                <label>Email</label><br/>
                <input type="text" value="Enter email"></input>
              </div>
            </div><br/><br/>
            <div>
              <button style={{color:"blue"}}>Donate</button>  
            </div><br/>
          </BottomCol>
        </BottomContain>
      </Bottom>
    </HomeContain>
  )
}

export default Home