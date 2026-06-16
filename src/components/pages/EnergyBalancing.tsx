import Footer from "../Footer"
import AboutEnergy from "../energybalancing/AboutEnergy"
import Benefits from "../energybalancing/Benefits"
import Benefitsbalance from "../energybalancing/Benefitsbalance"
import Faqs from "../energybalancing/Faqs"
import Herosection from "../energybalancing/Herosection"
import Joinclasses from "../energybalancing/Joinclasses"

const EnergyBalancing = () => {
  return (
    <>
      <Herosection/>
      <AboutEnergy/>
      <Benefits />
      <Benefitsbalance />
      <Joinclasses />
      <Faqs/>
      <Footer />
    </>
  )
}

export default EnergyBalancing