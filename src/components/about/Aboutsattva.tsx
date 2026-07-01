import { motion } from 'framer-motion'

export default function Aboutsattva () {
  return (
    <section className='relative bg-[#f5f5f3] overflow-hidden py-24 md:py-56'>
      {/* Background Shape */}
      <div className='absolute left-16 top-30 opacity-20 pointer-events-none'>
        <svg width='400' height='340' viewBox='0 0 400 340' fill='none'>
          <path
            d='M207 0C228 25 267 20 282 49C296 77 281 112 299 136C317 160 355 164 367 193C380 225 357 257 328 273C298 290 260 289 233 307C204 325 187 359 156 338C125 317 132 271 108 250C84 228 29 237 11 203C-7 168 29 130 53 101C77 72 91 40 123 30C154 20 185 28 207 0Z'
            fill='#D8D1DF'
          />
        </svg>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-20 items-start '>
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <h2 className='text-[#7E7A34] font-light leading-none '>
              <span className='block text-5xl md:text-6xl lg:text-7xl'>
                Welcome to{' '}
                <span className='italic font-serif'>Sattva Holistics.</span>
              </span>
            </h2>

            <p className='mt-8 text-[#7E7A34] text-3xl md:text-2xl font-light text-right max-w-md'>
              A space to <span className='italic font-serif'>connect</span>
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <div className='space-y-5 text-[#7E7A34] text-lg md:text-base leading-relaxed font-light'>
              <p>
                At Sattva Holistics, we believe true wellness begins from
                within. Our space is created to help you slow down, breathe
                deeply, and reconnect with your body, mind, and inner self.
              </p>

              <p>
                Through yoga, mindful movement, and holistic healing practices,
                we support individuals in building balance, improving wellbeing,
                and creating meaningful daily rituals.
              </p>

              <p>
                Come to move. Come to restore. Come to heal. Whether you are
                beginning your wellness journey or continuing your practice,
                Sattva Holistics welcomes you exactly as you are.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
