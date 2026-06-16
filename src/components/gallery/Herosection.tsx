import HeroImagee from '../../assets/gallery/new-9.jpg'
import Navbar from '../Navbar'

const Herosection = () => {
  return (
    <>
      <Navbar />
      <section className='relative h-[100vh] overflow-hidden rounded-2xl'>
        <img
          src={HeroImagee}
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/40' />

        <div className='relative z-10 flex h-full items-center justify-center'>
          <div className='text-center text-white'>
            <p className='mb-4 uppercase tracking-[0.4em]'>Gallery</p>

            <h1 className='text-6xl font-light md:text-6xl'>
              Moments of 
              <span className='font-serif italic'>Healing & Connection</span>
            </h1>

            <p className='mx-auto mt-8 max-w-xl text-lg text-white/80'>
              Explore inspiring moments from our wellness sessions, healing circles, workshops, and community gatherings.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection
