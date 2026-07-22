import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa'
import HeaderImage from '../assets/home/bg-main.jpg'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className='relative h-screen overflow-hidden'>
      <Navbar />

      {/* Background Image */}
      <img
        src={HeaderImage}
        alt='Background'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Softer Gradient */}

      {/* Light Blur */}
      <div className='absolute inset-0 backdrop-blur-[1px]' />

      <div className='relative z-20 h-full'>
        {/* Center Title */}
        <div className='absolute md:top-[22%] top-50 left-1/2 -translate-x-1/2'>
          <h1
            className='text-[100px] md:text-[150px] font-serif tracking-[10px] text-[#b82223]'
            style={{
              WebkitTextStroke: '2px 	#363b09' // Tailwind pink-500
            }}
          >
            Energy
          </h1>
        </div>

        {/* Bottom Content */}
        <div className='absolute md:bottom-5 bottom-40 left-5 md:left-8'>
          <h2 className='text-[#7a7346] text-5xl md:text-6xl'>
            Restore Balance.
          </h2>

          <p className='mt-4 text-[#7a7346] text-2xl md:text-5xl'>
            Awaken Your
            <span className='italic'> Inner Energy.</span>
          </p>

          <div className='mt-10 flex flex-wrap gap-5'>
            <a href='https://calendar.app.google/Qx6jKM7bxUobEgBf8'>
              <button className='flex items-center gap-4 rounded-full border border-black px-8 py-4 text-[#7a7346] cursor-pointer hover:bg-[#000] hover:text-white'>
                Consultation
                <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        {/* Social */}
        <div className='absolute md:bottom-5 bottom-25 right-3 flex gap-8'>
          <FaFacebookF className='text-white text-3xl' />
          <FaInstagram className='text-white text-3xl' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
