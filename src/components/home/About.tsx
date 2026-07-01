const About = () => {
  return (
    <section className='relative overflow-hidden  min-h-screen flex items-center'>
      {/* Decorative Curves */}
      <svg
        className='absolute inset-0 w-full h-full pointer-events-none'
        viewBox='0 0 1920 1080'
        preserveAspectRatio='none'
      >
        <path
          d='M20 60 C300 -100 900 100 1300 0'
          fill='none'
          stroke='#f0b9a8'
          strokeWidth='1'
        />

        <path
          d='M1320 0 C1380 220 1350 360 1200 560'
          fill='none'
          stroke='#f0b9a8'
          strokeWidth='1'
        />
      </svg>

      <div className='container mx-auto px-6 md:px-5 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Heading */}
          <div>
            <h2
              className='
                text-[#2f2525]
                font-serif
                uppercase
                leading-[0.9]
                text-5xl
                md:text-7xl
                tracking-tight
              '
            >
              Heal Naturally.
              <br />
              Live Mindfully.
            </h2>
          </div>

          {/* Right Content */}
          <div className='grid md:grid-cols-2 gap-10 lg:gap-16 lg:pt-64'>
            <p className='text-[#403838] text-lg leading-relaxed'>
              Our therapy sessions combine holistic techniques that support
              relaxation, emotional balance, recovery, and overall wellbeing.
            </p>

            <p className='text-[#403838] text-lg leading-relaxed'>
              Whether you seek stress relief, deeper relaxation, or mindful
              healing, our approach supports your unique journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
