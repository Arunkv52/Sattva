import { ArrowUpRight } from 'lucide-react'
import Navbar from '../Navbar'

const Herosection = () => {
  return (
    <>
      <Navbar />
      <section className='relative min-h-screen overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000')"
          }}
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/40' />

        {/* Content */}
        <div className='relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center'>
          <div className='max-w-2xl'>
            <h1 className='text-white text-4xl md:text-5xl font-semibold leading-tight'>
              Restore Harmony. Renew Your Energy. <br /> Reconnect With
              Yourself.
            </h1>

            <p className='mt-6 text-white/80 text-lg max-w-lg'>
              Whether you're experiencing stress, anxiety, fatigue, emotional
              blockages, or simply seeking inner peace, our Energy Balancing
              sessions provide a supportive space for healing and renewal.
            </p>

            <button className='mt-8 inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition'>
              Start For Free
              <span className='w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center'>
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        
      </section>
    </>
  )
}

export default Herosection
