import Footer from "../Footer"
import Navbar from "../Navbar"
import About from "../reikihealing/About"
import Benefits from "../reikihealing/Benefits"
import Benefitsbalance from "../reikihealing/Benefitsbalance"
import Faqs from "../reikihealing/Faqs"
import Herosection from "../reikihealing/Herosection"
import Joinclasses from "../reikihealing/Joinclasses"


const Reikihealing = () => {
  return (
    <>
      <Navbar />    
      <Herosection /> 
      <About />
      <Benefits />
      <Benefitsbalance/>
      <Joinclasses/>
      <Faqs/>
      <Footer />
    </>
  )
}

export default Reikihealing