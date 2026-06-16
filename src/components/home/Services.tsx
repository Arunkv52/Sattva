import Yoga1 from '../../assets/home/premium-images/image-1.jpg'
import Yoga2 from '../../assets/home/premium-images/image-10.jpg'
import Yoga3 from '../../assets/home/premium-images/image-3.jpg'


const Services = () => {
  return (
    <>
      <section className='md:px-3 px-5 py-20 min-h-screen'>
        <div className=' mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* LEFT CARD */}
          <div className='relative rounded-[32px] overflow-hidden group h-[520px]'>
            <img
              src={Yoga1}
              alt=''
              className='w-full h-full object-cover group-hover:scale-105 duration-500'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>

            {/* Badge */}
            <div className='absolute top-6 left-6'>
              <span className='bg-white text-black text-sm px-4 py-2 rounded-full'>
                Yoga Flow
              </span>
            </div>

            {/* Content */}
            <div className='absolute bottom-6 left-6 right-6 flex items-end justify-between'>
              <div>
                <h2 className='text-white text-3xl font-semibold leading-tight'>
                  Moments of Healing & Growth
                </h2>
              </div>

              <button className='w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl hover:rotate-45 duration-300'>
                ↗
              </button>
            </div>
          </div>

          {/* CENTER CARD */}
          <div className='flex flex-col gap-6'>
            {/* Heading */}
            <div>
              <p className='uppercase tracking-[4px] text-sm text-[#9b8579]'>
                Yoga Classes
              </p>

              <h1 className='text-5xl leading-[1.1] font-semibold text-[#1f1f1f] mt-4'>
                Find Your <br /> Inner Peace
              </h1>
            </div>

            {/* Small Image Card */}
            <div className='relative rounded-[32px] overflow-hidden h-[320px] group'>
              <img
                src={Yoga2}
                alt=''
                className='w-full h-full object-cover group-hover:scale-105 duration-500'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>

              <div className='absolute top-6 left-6'>
                <span className='bg-white text-black text-sm px-4 py-2 rounded-full'>
                  Meditation
                </span>
              </div>

              <div className='absolute bottom-6 left-6 right-6 flex items-end justify-between'>
                <h2 className='text-white text-3xl font-medium'>
                  Explore Our <br /> Wellness Community
                </h2>

                <button className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:rotate-45 duration-300'>
                  ↗
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className='relative rounded-[32px] overflow-hidden h-[520px] group'>
            <img
              src={Yoga3}
              alt=''
              className='w-full h-full object-cover group-hover:scale-105 duration-500'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

            {/* Top Content */}
            <div className='absolute top-6 left-6 right-6 flex justify-between items-start'>
              <div>
                <h3 className='text-white text-3xl font-semibold'>120+</h3>
                <p className='text-white/80'>Online Sessions</p>
              </div>

              <button className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:rotate-45 duration-300'>
                ↗
              </button>
            </div>

            {/* Bottom Content */}
            <div className='absolute bottom-6 left-6 right-6'>
              <h2 className='text-white text-3xl leading-tight font-medium mb-6'>
                Transform your body <br /> and soul naturally
              </h2>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
