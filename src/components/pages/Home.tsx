import Header from '../Header'
import Footer from '../Footer'
import OfferingsSection from '../home/OfferingsSection'
import WelcomeSection from '../home/WelcomeSection'
import About from '../home/About'


const Home = () => {
  return (
    <>
      <Header />
      {/* About */}
      <section className='md:py-10 md:px-3'>
       <OfferingsSection />
      </section>
     
       {/* Welcome */}
      <section>
        <WelcomeSection />
      </section>

      
      {/* About */}
      <section>
        <About/>
      </section>
     

     {/* Footer */}
     <Footer />


    </>
  )
}

export default Home



