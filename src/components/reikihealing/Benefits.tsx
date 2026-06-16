const Benefits = () => {
  return (
    <section className=' py-20 md:px-30 px-5'>
      <div className='mx-auto'>
        <div className='md:grid md:grid-cols-3 grid grid-cols-1 gap-6'>
          {/* Heading */}
          <div className='space-y-2'>
            <span className='text-[#7f8c8d] text-sm tracking-wide'>
              Reiki Training Program
            </span>

            <h2 className='text-[#003b49] md:text-4xl text-3xl leading-[1.05] font-semibold'>
              Begin Your Journey <br /> into Energy Healing
            </h2>
          </div>

          {/* Mission */}
          <div className='bg-[#efefec] rounded-2xl p-8 flex flex-col justify-center'>
            <h3 className='text-[#003b49] text-3xl mb-8 font-medium'>
              Our Vision
            </h3>

            <p className='text-[#29414a] text-base leading-5'>
              To make Reiki healing accessible to everyone by providing
              authentic training that promotes personal growth, wellness, and
              spiritual awareness.
            </p>
          </div>

          {/* Purpose */}
          <div className='bg-[#efefec] rounded-2xl p-8 flex flex-col justify-center'>
            <h3 className='text-[#003b49] text-3xl mb-8 font-medium'>
              Our Purpose
            </h3>

            <p className='text-[#29414a] text-base leading-5'>
              To guide students through a transformative journey of energy
              healing, enabling them to support themselves, their families, and
              their communities.
            </p>
          </div>

          {/* Bottom Large Card */}
          <div className='lg:col-span-2 bg-[#efefec] rounded-2xl md:p-12 p-8'>
            <h3 className='text-[#003b49] text-3xl leading-tight mb-10 font-medium'>
              Empower Your Healing Journey Through Reiki
            </h3>

            <ul className='space-y-2 text-[#29414a] md:text-sm text-base leading-5'>
              <li>Build a strong foundation through sacred
              attunements that connect you to universal life force energy. Learn
              chakra awareness, aura understanding, and self-healing practices.</li>
              <li>Expand your abilities with powerful Reiki
              symbols, distant healing techniques, and methods for supporting
              emotional and mental well-being.</li>
              <li> Deepen your
              spiritual growth with advanced healing practices including Reiki
              Box, Reiki Ball, Color Breathing, Rainbow Cleansing, Crystal
              Grids, and energy enhancement techniques.</li>
              <li>              Attune to master-level healing vibrations and sacred mantras that
              elevate consciousness, strengthen intuition, and enhance your
              capacity to heal and guide others.</li>
            </ul>

            <p className='mt-10 text-[#29414a] text-base leading-5'>
               Together, these progressive
              levels provide a complete path from beginner to Reiki Master,
              helping you cultivate balance, inner peace, and a deeper
              connection with yourself and the world around you.
            </p>
          </div>

          {/* Image */}
          <div className='relative rounded-2xl overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200'
              alt='Healing'
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
