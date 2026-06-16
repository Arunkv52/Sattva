import About from '@/components/pages/About'
import Home from '@/components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contactpage from '@/components/pages/Contact'
import FAQ from '@/components/pages/Faqs'
import Events from '@/components/pages/Events'
import Classes from '@/components/pages/Classes'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contactpage />}/>
          <Route path='/faqs' element={<FAQ/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/classes' element={<Classes />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
