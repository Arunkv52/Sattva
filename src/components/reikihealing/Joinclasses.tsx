import { ArrowRight } from 'lucide-react'

export default function Joinclasses () {
  return (
    <section className='md:px-20 px-0 py-10 bg-white'>
      <div
        className='relative overflow-hidden rounded-3xl h-[700px] bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/35' />

        {/* Content */}
        <div className='relative z-10 flex h-full flex-col justify-between p-8 md:p-14'>
          {/* Top Content */}
          <div className='max-w-xl'>
            <p className='mb-4 text-sm font-medium text-white/90'>
              Transform Your Energy, Transform Your Life
            </p>

            <h1 className='md:text-2xl font-bold leading-tight text-white text-2xl'>
              Discover how Reiki can help you cultivate inner peace, emotional
              balance, and holistic well-being. Start your journey today and
              experience the profound benefits of energy healing.
            </h1>

            <button className='mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105'>
              Join a Reiki Class
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-black text-white'>
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* Bottom Floating Cards */}
          <div className='flex flex-col gap-5 md:flex-row md:items-end md:justify-end'>
            {/* Right Card */}
            <div className='w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl'>
              <div className='flex items-center gap-4'>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-white'>
                    Experience Master-Level Healing
                  </h3>

                  <p className='text-sm text-white/70'>
                    Learn authentic Reiki practices through structured training,
                    guided attunements, and hands-on healing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className='absolute -bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-white/10 blur-3xl' />
      </div>
    </section>
  )
}
