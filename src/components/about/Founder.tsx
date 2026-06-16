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
              Sattva Holistics was founded with a deep passion for helping
              people reconnect with their authentic selves and unlock their
              natural healing potential. Through years of learning, practice,
              and dedication to holistic wellness, our founder has developed a
              heart-centered approach that combines traditional healing wisdom
              with modern wellbeing techniques.
            </p>

            <p className='mt-4 text-gray-600 leading-relaxed max-w-lg'>
              The vision behind Sattva Holistics is simple: to provide a safe,
              supportive environment where individuals can heal, grow, and
              thrive on every level of their being.
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
                  ‘Your spine is the very core of you. It’s what your limbs
                  connect into, what keeps you upright. It goes beyond the
                  physical – it’s the energy centre of your personal world’
                </p>
              </div>

              <p className='py-5 italic text-[#7E7A34]'>
                For pre-teen Danielle, life in Los Angeles was defined by
                movement. In her fast-paced, physical world – dance, ballet and
                cheerleading reigned supreme.
              </p>
              <p className='py-2'>
                For pre-teen Danielle, life in Los Angeles was defined by
                movement. In her fast-paced, physical world – dance, ballet and
                cheerleading reigned supreme. So, when faced with a
                life-changing scoliosis diagnosis at the age of 10, Danielle had
                to dig deep. To find a way to move, without upsetting the
                balance. It was tough, but our girl was no quitter – and at
                university, she finally found what she was looking for.
              </p>
              <p className='py-2'>
                For pre-teen Danielle, life in Los Angeles was defined by
                movement. In her fast-paced, physical world – dance, ballet and
                cheerleading reigned supreme. So, when faced with a
                life-changing scoliosis diagnosis at the age of 10, Danielle had
                to dig deep. To find a way to move, without upsetting the
                balance. It was tough, but our girl was no quitter – and at
                university, she finally found what she was looking for.
              </p>
              <p className='py-2'>
                For pre-teen Danielle, life in Los Angeles was defined by
                movement. In her fast-paced, physical world – dance, ballet and
                cheerleading reigned supreme. So, when faced with a
                life-changing scoliosis diagnosis at the age of 10, Danielle had
                to dig deep. To find a way to move, without upsetting the
                balance. It was tough, but our girl was no quitter – and at
                university, she finally found what she was looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Founder
