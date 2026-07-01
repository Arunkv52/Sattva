import { Link } from 'react-router'

const Whychooseus = () => {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}

      {/* Overlay */}
      <div className='absolute inset-0 bg-[#9d9b96]' />

      {/* Content */}
      <div className='relative z-10 h-full max-w-7xl mx-auto px-5'>
        <div className='flex h-full flex-col justify-between py-14'>
          {/* Top Content */}
          <div className='grid lg:grid-cols-2 gap-5 items-start py-5'>
            <div>
              <h1 className='md:max-w-3xl w-full text-white md:text-5xl text-3xl font-light leading-tight'>
                Healing Programs for Every Stage of Your Journey
              </h1>

              <p className='md:mt-6 mt-3 max-w-lg text-white/80 text-base'>
                Whether you're seeking relaxation, emotional wellbeing, inner
                balance, or personal growth, our holistic programs are designed
                to support you with care and intention.
              </p>
              <p className='md:mt-6 mt-3 max-w-lg text-white/80 text-base'>
                Find the practice that helps you feel stronger, calmer, and more
                connected.
              </p>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <Link to={'/classes'}>
                <button className='cursor-pointer mt-10 lg:mt-28 cursor-pointer border border-white/60 text-white px-10 py-4 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500'>
                  Join Our Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whychooseus
