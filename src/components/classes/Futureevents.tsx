import { CalendarDays, Clock3, MapPin, ArrowRight } from 'lucide-react'
import Future1 from '../../assets/upcoming/new-2.jpg'
import Future2 from '../../assets/upcoming/new-3.jpg'
import Future3 from '../../assets/upcoming/new-4.jpg'


const Futureevents = () => {
  const classes = [
    {
      title: 'Sunrise Flow Yoga',
      date: '18 June 2026',
      time: '06:00 AM',
      location: 'Marina Beach Pavilion',
      image: Future1
    },
    {
      title: 'Mindful Evening Meditation',
      date: '21 June 2026',
      time: '06:30 PM',
      location: 'Zen Wellness Studio',
      image: Future2
    },
    {
      title: 'Breath & Balance Retreat',
      date: '24 June 2026',
      time: '07:00 AM',
      location: 'ECR Coastal Resort',
      image: Future3
    }
  ]
  return (
    <>
      <section className='bg-[#f6f1ea] md:py-32 py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          {/* Heading */}
          <div className='mb-20 text-center'>
            <span className='uppercase tracking-[0.3em] text-stone-500'>
              Upcoming Experiences
            </span>

            <h2 className='mt-5 text-5xl font-light text-stone-900 md:text-5xl'>
              Step Into a Space of 
              <span className='font-serif italic'> Healing & Growth</span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base text-stone-600'>
              From Reiki healing and sound therapy to mindfulness and energy balancing, our upcoming classes offer practical tools and transformative experiences for lasting wellbeing.
            </p>
          </div>

          {/* Featured Class */}
          <div className='relative overflow-hidden rounded-[40px]'>
            <img
              src={classes[0].image}
              alt=''
              className='h-[550px] w-full object-cover'
            />

            <div className='absolute inset-0 bg-black/35' />

            <div className='absolute bottom-0 left-0 p-12 text-white'>
              <span className='rounded-full bg-white/20 px-4 py-2 backdrop-blur-md'>
                Featured Session
              </span>

              <h3 className='mt-6 text-5xl font-light'>{classes[0].title}</h3>

              <div className='mt-8 flex flex-wrap gap-6'>
                <div className='flex items-center gap-2'>
                  <CalendarDays size={18} />
                  {classes[0].date}
                </div>

                <div className='flex items-center gap-2'>
                  <Clock3 size={18} />
                  {classes[0].time}
                </div>

                <div className='flex items-center gap-2'>
                  <MapPin size={18} />
                  {classes[0].location}
                </div>
              </div>

              <button className='mt-10 flex items-center gap-3 rounded-full bg-white px-7 py-4 text-black'>
                Reserve Your Spot
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Other Classes */}
          <div className='mt-12 grid gap-8 md:grid-cols-3'>
            {classes.slice(1).map(item => (
              <div
                key={item.title}
                className='group overflow-hidden rounded-[32px] bg-white shadow-lg'
              >
                <img
                  src={item.image}
                  alt=''
                  className='h-72 w-full object-cover transition duration-700 group-hover:scale-105'
                />

                <div className='p-8'>
                  <h3 className='text-2xl font-medium'>{item.title}</h3>

                  <div className='mt-6 space-y-3 text-stone-600'>
                    <div className='flex items-center gap-3'>
                      <CalendarDays size={16} />
                      {item.date}
                    </div>

                    <div className='flex items-center gap-3'>
                      <Clock3 size={16} />
                      {item.time}
                    </div>

                    <div className='flex items-center gap-3'>
                      <MapPin size={16} />
                      {item.location}
                    </div>
                  </div>

                  <button className='mt-8 flex items-center gap-2 font-medium'>
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Futureevents
