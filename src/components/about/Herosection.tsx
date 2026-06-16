import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AbtVideo from '../../assets/video/yoga.mp4'

const columns = [
  {
    heading: 'Make.',
    revealRange: [0.1, 0.25] as [number, number],
  },
  {
    heading: 'Every Day.',
    revealRange: [0.2, 0.35] as [number, number],
  },
  {
    heading: 'Better.',
    revealRange: [0.3, 0.45] as [number, number],
  },
]

// Separate component so each column gets its own useTransform
const Column = ({
  heading,
  revealRange,
  scrollYProgress,
}: (typeof columns)[0] & { scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) => {
  const clipProgress = useTransform(scrollYProgress, revealRange, [100, 0])
  const opacity = useTransform(scrollYProgress, revealRange, [0, 1])

  return (
    <div>
      <h1 className='text-gray-600 font-bold md:text-7xl text-4xl relative right-8'>{heading}</h1>
      <motion.div
        style={{
          clipPath: useTransform(clipProgress, (v) => `inset(${v}% 0 0 0)`),
          opacity,
        }}
      >
        <p className='text-black/80 mt-2 md:max-w-xs max-w-full'></p>
      </motion.div>
    </div>
  )
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 300])
  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 1])

  return (
    <section ref={containerRef} className='relative md:h-[300vh] h-[200vh]'>
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden px-20'>
        {/* Video */}
        <motion.div
          style={{ scale }}
          className='absolute inset-0 overflow-hidden'
        >
          <video autoPlay muted loop playsInline className='w-full h-full object-cover'>
            <source src={AbtVideo} type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/30' />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className='relative z-10 w-full'
        >
          <div className='flex justify-between items-start gap-5'>
            {columns.map((col) => (
              <Column key={col.heading} {...col} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection