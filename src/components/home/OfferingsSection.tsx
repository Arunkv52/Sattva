import Abt2 from '../../assets/home/soul-bg.jpg'
import Abt1 from '../../assets/home/energy-heal.jpg'
import Abt3 from '../../assets/home/reiki-hl.jpg'
import { Link } from 'react-router'


const offerings = [
  {
    title: 'Energy Balancing',
    image: Abt1
  },
  {
    title: 'Emotional Release',
    image: Abt2
  },
  {
    title: 'Reiki Healing',
    image: Abt3
  }
]

const OfferingsSection = () => {
  return (
    <section className='px-5 md:px-5 py-16 '>
      {/* Top Content */}
      <div className=' max-w-3xl grid lg:grid-cols-2 gap-10 mb-14'>
        <div>
          <h2 className='text-4xl md:text-5xl font-light text-[#7a7346]'>
            Our Offerings
          </h2>

          <p className='mt-4 text-xl text-[#7a7346]'>
            Move. Heal.
            <span className='italic ml-2'>Grow.</span>
          </p>
        </div>

        <div className='max-w-lg'>
          <p className='text-[#7a7346] text-lg leading-8'>
            Discover practices created to support your body, mind, and everyday
            wellbeing. Whether you're beginning your wellness journey or
            deepening your practice, our sessions meet you where you are.
          </p>

          <div className='mt-8 flex gap-10'>
            <Link to={'/classes'}>
              <button
                className='
              text-sm
              border-b
              border-[#7a7346]
              hover:opacity-70
              cursor-pointer'
              >
                See All Classes
              </button>
            </Link>

           
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        className='
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5'
      >
        {offerings.map(item => (
          <div key={item.title}>
            <div
              className='
              overflow-hidden
              aspect-[4/5]
              bg-gray-200'
            >
              <img
                src={item.image}
                alt={item.title}
                className='
                w-full
                h-full
                object-cover
                hover:scale-105
                duration-700'
              />
            </div>

            <div
              className='
              mt-5
              flex
              items-center
              justify-between'
            >
              <div className='flex items-center gap-3'>
                <span
                  className='
                  w-2
                  h-2
                  rounded-full
                  border
                  border-[#7a7346]'
                />

                <span className='text-[#7a7346]'>{item.title}</span>
              </div>

              {item.title === 'Reformer Pilates' && (
                <button
                  className='
                  text-sm
                  italic
                  text-[#7a7346]'
                >
                  View Classes →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OfferingsSection
