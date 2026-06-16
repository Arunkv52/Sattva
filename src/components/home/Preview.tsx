import { ArrowRight } from 'lucide-react'
import Preview1 from '@/assets/home/classes.jpg'
import Preview2 from '@/assets/home/gallery.jpg'

const Preview = () => {
  const cards = [
    {
      title: 'Awaken Your Inner Energy',
      button: 'Class Preview',
      image:Preview1,
    },
    {
      title: 'Moments of Healing & Growth',
      button: 'Gallery Preview',
      image:Preview2,
    },
  ]

  return (
    <section className='w-full bg-[#f4f1ec] py-20'>
      <div className='mx-auto grid  grid-cols-1 gap-2 px-3 lg:grid-cols-2'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='group relative h-[500px] overflow-hidden rounded-[30px]'
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/30' />

            {/* Content */}
            <div className='absolute inset-0 flex flex-col justify-between p-4 md:p-10'>
              {/* Heading */}
              <h2 className='max-w-[420px] whitespace-pre-line text-4xl font-bold leading-tight text-white md:text-4xl'>
                {card.title}
              </h2>

              {/* Button */}
              <button className='flex w-fit items-center gap-4 rounded-full bg-white/30 px-6 py-4 text-lg font-medium text-white backdrop-blur-md transition-all duration-300'>
                {card.button}

                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10'>
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Preview