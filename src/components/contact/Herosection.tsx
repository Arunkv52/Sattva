import { useState, useEffect } from 'react'
import { Clock, Video, Leaf } from 'lucide-react'
import Navbar from '../Navbar'
import Img1 from '../../assets/contact/img-1.jpg'
import Img2 from '../../assets/contact/img-2.jpg'
import Img3 from '../../assets/contact/img-3.jpg'



const yogaImages = {
  meditation:
    Img1,
  pose: Img2,
  outdoor:
    Img3
}



export default function Herosection () {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <section className='relative min-h-screen contact-bg overflow-hidden flex items-center'>
        {/* Subtle background blobs */}
        <div className='absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-[#D4E8D1]/40 blur-3xl pointer-events-none' />
        <div className='absolute bottom-0 right-[35%] w-56 h-56 rounded-full bg-[#B7D5B4]/30 blur-2xl pointer-events-none' />

        <div className='max-w-full mx-auto w-full px-6 md:px-12  py-25 grid lg:grid-cols-2 gap-12 items-center md:mt-20 mt-20'>
          {/* ── LEFT COLUMN ── */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white border border-[#C8DEC5] rounded-full px-4 py-1.5 w-fit shadow-sm '>
              <Leaf size={14} className='text-[#4A7C59]' />
              <span className='text-sm font-medium text-[#4A7C59] tracking-wide'>
                Welcome to Sattva Holistics
              </span>
            </div>

            {/* Headline */}
            <h1 className='text-[clamp(2.6rem,5.5vw,4rem)] font-bold leading-[1.1] text-white tracking-tight'>
              Discover the Power of <br />
              Healing, Balance <br />
              <span className='text-white/50'>& Inner Transformation</span>
            </h1>

            {/* Description */}
            <p className='text-white text-base md:text-lg leading-relaxed max-w-md'>
              Reconnect with your natural energy through holistic healing
              practices designed to nurture your mind, body, and spirit.
              Experience greater clarity, emotional wellbeing, and lasting inner
              peace.
            </p>

           
           
          </div>

          {/* ── RIGHT COLUMN — Image Mosaic ── */}
          <div
            className={`relative h-[480px] md:h-[560px] transition-all duration-700 delay-200 ease-out hidden md:block ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top-right large image */}
            <div className='absolute top-0 right-0 w-[60%] h-[58%] rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={yogaImages.meditation}
                alt='Meditation outdoors'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Middle-left course card */}
            <div className='absolute top-[30%] left-0 w-[54%] bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-[#E8F0E6]'>
              <div className='h-36 overflow-hidden'>
                <img
                  src={yogaImages.pose}
                  alt='Yoga for beginners'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>
              <div className='px-4 py-3'>
                <p className='font-semibold text-[#1C2B1E] text-sm'>
                  Yoga For Beginners
                </p>
                <div className='flex items-center gap-4 mt-1.5 text-xs text-[#6B7D6E]'>
                  <span className='flex items-center gap-1'>
                    <Video size={13} className='text-[#4A7C59]' />6 Videos
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock size={13} className='text-[#4A7C59]' />
                    12 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-right image */}
            <div className='absolute bottom-0 right-[2%] w-[48%] h-[42%] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F6F1]'>
              <img
                src={yogaImages.outdoor}
                alt='Outdoor yoga session'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>

            

            
          </div>
        </div>
      </section>
    </>
  )
}
