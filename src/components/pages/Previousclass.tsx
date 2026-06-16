import Previousevents from "../classes/Previousevents"
import Previousclassevents from "../classes/Previousclassevents"
import Footer from "../Footer"
import Navbar from "../Navbar"

const Previousclass = () => {
  return (
    <>
        <Navbar />
        <Previousclassevents />
        <Previousevents />
        <Footer />
    </>
  )
}

export default Previousclass