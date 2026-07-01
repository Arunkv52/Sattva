import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa'
import HeaderImage from '../assets/home/bg-main.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router'

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
            className='text-[100px] md:text-[150px] font-serif tracking-[10px] text-white'
            style={{
              WebkitTextStroke: '2px #ec4899' // Tailwind pink-500
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
              <button className='flex items-center gap-4 rounded-full border border-black px-8 py-4 text-[#7a7346] cursor-pointer'>
                Book Your Slots
                <FaArrowRight />
              </button>
            </a>
            <Link to={'/about'}>
              <button className='flex items-center gap-4 rounded-full bg-[#93cfdb] px-8 py-4 text-[#667145] cursor-pointer'>
                Know more
                <FaArrowRight />
              </button>
            </Link>
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
