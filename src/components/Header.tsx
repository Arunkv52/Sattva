import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa'

import HeaderVideo from '../assets/video/4577799_Forest_Sunrise_3840x2160.mp4'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className='relative h-screen overflow-hidden'>
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src={HeaderVideo} type='video/mp4' />
      </video>

      {/* Softer Gradient */}
      <div
        className='
          absolute inset-0
          bg-gradient-to-r
          from-[#79834f]/35
          via-[#79834f]/15
          to-[#5e6840]/40
        '
      />

      {/* Light Blur */}
      <div className='absolute inset-0 backdrop-blur-[1px]' />

      <div className='relative z-20 h-full'>
        {/* Center Title */}
        <div className='absolute top-[22%] left-1/2 -translate-x-1/2'>
          <h1
            className='text-[90px] md:text-[150px] font-serif tracking-[10px] text-white'
            style={{
              WebkitTextStroke: '2px #ec4899' // Tailwind pink-500
            }}
          >
            Energy
          </h1>
        </div>

        {/* Bottom Content */}
        <div className='absolute bottom-5 left-8 md:left-8'>
          <h2 className='text-white text-4xl md:text-6xl'>Restore Balance.</h2>

          <p className='mt-4 text-white text-2xl md:text-5xl'>
            Awaken Your
            <span className='italic'> Inner Energy.</span>
          </p>

          <div className='mt-10 flex flex-wrap gap-5'>
            <button className='flex items-center gap-4 rounded-full border border-white px-8 py-4 text-white'>
              Book Now
              <FaArrowRight />
            </button>

            <button className='flex items-center gap-4 rounded-full bg-white/90 px-8 py-4 text-[#667145]'>
              Know about us
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Social */}
        <div className='absolute bottom-5 right-3 flex gap-8'>
          <FaFacebookF className='text-white text-3xl' />
          <FaInstagram className='text-white text-3xl' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
