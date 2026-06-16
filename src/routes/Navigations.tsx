import About from '@/components/pages/About'
import Home from '@/components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import EnergyBalancing from '../components/pages/EnergyBalancing'
import Upcomeclass from '@/components/pages/Upcomeclass'
import Previousclass from '@/components/pages/Previousclass'
import Gallery from '@/components/pages/Gallery'
import Contactpage from '@/components/pages/Contact'
import Reikihealing from '@/components/pages/Reikihealing'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/energybalancing' element={<EnergyBalancing />} />
          <Route path='/reikihealing' element={<Reikihealing/>}/>
          <Route path='/upcomingclass' element={<Upcomeclass />} />
          <Route path='/previousclass' element={<Previousclass />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contactpage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
