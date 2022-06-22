import NavBar from "./Components/NavBar/Navbar"
import GlobalStyle from "./GlobalStyle";
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"
import About from "./Components/About/About"
import Whatsapp from "./Components/Whatsapp/WhatsApp"
import "antd/dist/antd.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <GlobalStyle/>
    <NavBar/>
    <Whatsapp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/serve' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
