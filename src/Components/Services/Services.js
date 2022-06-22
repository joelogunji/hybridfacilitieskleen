import React from 'react'
import styled from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";
import Fumigation from "./Images/Fumigation.jpg"
import Domestic from "./Images/Domestic-cleaning.jpg"
import Laundry from "./Images/stacked-clothes.jpg"
import Sale from "./Images/cleaning-equipment.jpg" 
import BG from "./Images/cleaning-bg.jpg"
import Polishing from "./Images/Polishing.jpg"
import Upholstery from "./Images/Upholstry.jpg"



const Services = () => {
  React.useEffect(()=>{
    Aos.init()
},[]);

  return (
    <MainContain>
        <Wrapper>
            <h1>OUR SERVICES</h1>

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

            <Card1 data-aos="fade-up" data-aos-offset="350" data-aos-easing="ease-in-sine">
                <h1>FUMIGATION AND PEST CONTROL</h1>
                <br/>
                <Img1 src={Fumigation}/>
                <br/>
                <p>At Hybrid Facilities Kleen Ltd, we remove those sickening pests and bugs from your homes and offices through our Fumigation and Pest Control Services. Hybrid Facilities Kleen Ltd focuses primarily on the control and eradication of pests commonly found in Nigeria, using only environmentally friendly products. Some of these pests include bed bugs, termites, rats, cockroaches among others. </p>
                <p>Our solutions assist in the effective prevention of pests in household and commercial premises like residence, hotels, food and beverages, warehouses etc. Our experts are proficient in identifying all kinds of infestations and provide solutions accordingly. Our trained and experienced technicians use the latest fumigant technology to avoid extensive disruption to your operations.</p>
            </Card1>

            <Card1 data-aos="fade-right"
    data-aos-offset="380"
    data-aos-easing="ease-in-sine">
                 <h1>DOMESTIC CLEANING</h1>
                <br/>
                <Img1 src={Domestic}/>
                <br/>
                <p>Hybrid Facilities Kleen Ltd offers a professional clean to suit your office and home environments. We work to determine which solution best meets your specific needs. Let us provide a tailor-made solution to ensure all your requirements are met.</p>
                <p>Remember that a clean, pleasant and healthy environment is an important consideration for a productive and happy workforce, when determining their job satisfaction. Your staff members deserve the best conditions that can be provided.</p>
            </Card1>

            <Card1 data-aos="fade-left"
    data-aos-offset="420"
    data-aos-easing="ease-in-sine" >
            <h1>Laundry Services</h1>
            <br/>
            <Img1 src={Laundry}/>
            <br/>
            <p>Your Laundry is also part of our business. We carry out washing, rinsing, drying, and ironing of Laundries effectively</p>
            </Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="480"
    data-aos-easing="ease-in-sine" >
             <h1>Sale of Cleaning Products/Supplies and Equipment.</h1>
                <br/>
                <Img1 src={Sale}/>
                <br/>
                <p>We sell all sorts of quality products/supplies and equipment used in cleaning at moderate rates... Quality Guaranteed.</p>
            </Card1>

            <Card1 data-aos="fade-right" data-aos-offset="520" data-aos-easing="ease-in-sine">
                <h1>Marble/Terrazzo Floor Restoration and Wood Polishing</h1>
                <br/>
                <Img1 src={Polishing}/>
                <br/>
                <p>Our marble/terrazzo restoration and wood polishing is top-notch. At Hybrid Facilities Kleen, we offer a comprehensive marble floor restoration service from light maintenance to complete grinding and polishing of all types of stone including marble, limestone, granite, terrazzo, concrete and slate.</p>
            </Card1>

            <Card1 data-aos="fade-left" data-aos-offset="560" data-aos-easing="ease-in-sine">
                <h1>Upholstery and Rug Cleaning</h1>
                <br/>
                <Img1 src={Upholstery}/>
                <br/>
                <p>At Hybrid Facilities Kleen Ltd, we do an efficient cleaning of rugs, sofas, chairs, cushions, car upholstery and many more. 
                    Regular carpet cleaning will help prolong the life of carpet as well as minimizing the number of bacteria and dirt harboured in the fibres. Most commercial premises clean their carpets every 6 months to a year maximum. We always pay attention to the different kind of fabrics used. 
                    Our trained staff test small area of the fabric used before work begins. This will enable us choose the best chemicals for the fabric to produce an excellent result. At the end of the cleaning, your upholstery will be in top condition, ready to use after a short time of drying with fresh nice smell</p>
            </Card1>

        </Wrapper>

    </MainContain>
  )
}

export default Services


const MainContain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #E5E5E5;
    /* background-position: center;
    background-size: contain; */
    font-family: serif;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;

    h1 {
        font-size: 40px;
        color: brown;
    }
`

const Card1 = styled.div`
    width: 85%;
    border-radius: 7px;
    padding: 25px 25px 25px 25px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border: 10px;
    flex-wrap: wrap;
    color: red;
    font-size: 15px;

    @media screen and (max-width: 750px) {
        
    }

    h1{
        font-size: 20px;
        color: black;
    }
`

const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 7px;
box-shadow: 0px 0px 4px 4px rgba(225, 225, 225, 0.5);
transition-property: all;
transition-duration: 0.5s;

&:hover {
    width: 120%;
    height: 120%;
}
`

const Img1 = styled.img`
height: 400px;
width: 450px;
border-radius: 7px;
box-shadow: 0px 0px 4px 4px rgba(225, 225, 225, 0.5);
transition-property: all;
transition-duration: 0.5s;


@media screen and (max-width: 700px) {
    width: 200px;
    height: 250px;
    
    
}
`

const Objclause = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const ObjClsContain = styled.div`
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