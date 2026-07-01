import FounderImg from '../../assets/about/founder.jpg'
const Founder = () => {
  return (
    <>
      <div className='container mx-auto md:px-50 px-5 md:py-30 py-20'>
        <div className='grid lg:grid-cols-2 items-start gap-12'>
          {/* Left Content */}
          <div className='md:sticky top-5'>
            <h1 className='text-7xl md:text-4xl text-[var(--text-color)] leading-none'>
              Meet the <span className='italic'>Founder</span>
            </h1>

            <p className='mt-8 text-gray-600 leading-relaxed max-w-lg'>
              Sattva Holistics was founded with a vision to create a nurturing
              environment where healing feels natural and accessible.
            </p>

            <p className='mt-4 text-gray-600 leading-relaxed max-w-lg'>
              Driven by a passion for holistic wellbeing and mindful living, our
              founder combines movement, awareness, and restorative practices to
              support individuals on their personal wellness journey.
            </p>
            <p className='mt-4 text-gray-600 leading-relaxed max-w-lg'>
              Every session is designed with care—encouraging balance,
              self-discovery, and sustainable growth.{' '}
            </p>
            <p className='mt-4 text-gray-600 leading-relaxed max-w-lg'>
              At Sattva Holistics, wellness is not a destination; it is a way of
              living.{' '}
            </p>

            <p className='py-9 font-bold text-[var(--text-color)]'>
              Shalini, the Founder of Sattva Holistics.
            </p>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-center'>
            {/* Main Image Card */}
            <div className='relative'>
              <div className='md:flex justify-start items-center gap-5'>
                <img
                  src={FounderImg}
                  alt='Instructor'
                  className='w-full h-[250px] object-contain'
                />
                <p className='italic py-8'>
                  "Your body holds wisdom. When you create space to listen, healing begins naturally."
                </p>
              </div>

              <p className='py-5 italic text-[#7E7A34]'>
                For years, our approach has centered around helping people reconnect with themselves through intentional movement and mindful practices.
              </p>
              <p className='py-2'>
               We believe wellness is personal. Every individual enters with different goals whether to reduce stress, build strength, find emotional balance, or simply create moments of calm.
              </p>
              <p className='py-2'>
                Our programs combine guidance, compassion, and practical techniques to support long-term wellbeing and inner transformation.
              </p>
              <p className='py-2'>
                At Sattva Holistics, every step forward is celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Founder
