import { Sparkles } from 'lucide-react'
import AboutImg from '../../assets/reiki-class/hero-bg.jpg'

const practices = [
  {
    title: 'Reiki Healing',
    image: AboutImg
  }
]

export default function About () {
  return (
    <section className='py-12 md:py-20 lg:py-24 overflow-hidden'>
      <div className='w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Left Content */}
          <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f2c66] via-[#143d82] to-[#0e2e69] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-[350px] md:min-h-[450px]'>
            {/* Decorative Blur */}
            <div className='absolute -top-20 -right-20 w-[220px] h-[220px] rounded-full bg-blue-300/10 blur-3xl' />
            <div className='absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-white/5 blur-3xl' />

            <div className='relative z-10'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6'>
                <Sparkles size={16} />
                Reiki Healing
              </div>

              <h2 className='text-white text-3xl sm:text-4xl lg:text-5xl leading-tight font-light max-w-xl'>
                Discover the Healing
                <span className='block text-[#d4c6ff]'>Power of Reiki</span>
              </h2>
            </div>

            <div className='relative z-10 mt-6'>
              <p className='text-white/80 text-sm sm:text-base leading-6 max-w-lg'>
                Reconnect with your inner energy and unlock your natural healing
                potential through the ancient practice of Reiki. Our structured
                Reiki training guides you from foundational healing techniques
                to advanced master-level practices, helping you achieve balance,
                clarity, and spiritual growth.
              </p>
            </div>
          </div>

          {/* Right Image Card */}
          {practices.map((item, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-2xl min-h-[350px] md:min-h-[450px] group'
            >
              <img
                src={item.image}
                alt={item.title}
                className='absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

              {/* Bottom Content */}
              <div className='absolute bottom-6 md:bottom-10 left-6 md:left-8 right-6 md:right-8'>
                <h3 className='text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-4 md:mb-8'>
                  {item.title}
                </h3>

                <button className='backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-5 md:px-7 py-3 md:py-4 text-sm md:text-base text-white hover:bg-white hover:text-black transition'>
                  Join Reiki Classes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
