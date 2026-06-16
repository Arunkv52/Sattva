import { ArrowRight } from 'lucide-react'
import MediImg from '../../assets/upcoming/new-8.jpg'

export default function Previousclassevents () {
  return (
    <section className='bg-[#f5f3ee]'>
      <div className='relative overflow-hidden rounded-[32px] h-[700px]'>
        {/* Background */}
        <img
          src={MediImg}
          alt='Yoga by the ocean'
          className='absolute inset-0 h-full w-full object-cover'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/15' />

        {/* Content */}
        <div className='relative z-10 flex h-full flex-col justify-between p-8 md:p-12'>
          {/* Top Badge */}
          <div className='flex justify-end'></div>

          {/* Bottom Content */}
          <div>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
              {/* Left */}
              <div>
                <h1 className='flex flex-wrap items-center gap-3 text-4xl font-light uppercase tracking-tight text-white md:text-5xl'>
                  <span>REFLECT </span>

                  <span className='text-white/60'>/</span>

                  <span
                    className='font-serif italic normal-case'
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    HEAL
                  </span>

                  <span className='text-white/60'>/</span>

                  <span>GROW</span>
                </h1>

                <p className='mt-6 max-w-sm md:text-sm text-base leading-relaxed text-white/80'>
                  Explore our past healing circles, wellness workshops, and
                  transformational sessions that have empowered individuals to
                  find balance, clarity, and inner peace.
                </p>
              </div>

              {/* CTA */}
              <button className='group flex items-center gap-3 self-start rounded-full bg-white/15 px-6 py-4 text-white backdrop-blur-md transition hover:bg-white/25'>
                Start Your Journey
                <span className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-black'>
                  <ArrowRight
                    size={16}
                    className='transition group-hover:translate-x-0.5'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent' />
      </div>
    </section>
  )
}
