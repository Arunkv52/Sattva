import EnergyBalance from '../../assets/classes/Energy-balancing.jpg'
import ReikiHeal from '../../assets/classes/reiki-heal.jpg'
import SoundTheraphy from '../../assets/classes/sound-theraphy.jpg'
import EmotionalRelease from '../../assets/classes/emotional-release.jpg'
import IntutionBoost from '../../assets/classes/intution-boost.jpg'
import EnergyBlock from '../../assets/classes/energy-block.jpg'





const classes = [
  {
    title: 'Energy Balancing',
    level: 'Healing Session',
    duration: '',
    desc: 'Restore harmony and support your natural energy flow through guided balancing techniques that promote calm and overall wellbeing.',
    image: EnergyBalance
  },

  {
    title: 'Reiki Healing',
    level: 'All Levels',
    duration: '',
    desc: 'Experience gentle energy healing designed to encourage relaxation, reduce stress, and support emotional and physical balance.',
    image: ReikiHeal
  },

  {
    title: 'Sound Therapy',
    level: 'Mind & Body',
    duration: '',
    desc: 'Immerse yourself in healing frequencies and calming vibrations that help quiet the mind and create deep relaxation.',
    image: SoundTheraphy
  },

  {
    title: 'Emotional Release',
    level: 'Guided Session',
    duration: '',
    desc: 'A safe and supportive space to release emotional tension, reconnect inward, and restore emotional clarity.',
    image: EmotionalRelease
  },

  {
    title: 'Intuition Boost',
    level: 'Inner Awareness',
    duration: '',
    desc: 'Strengthen self-awareness and reconnect with your inner guidance through mindful and restorative practices.',
    image: IntutionBoost
  },

  {
    title: 'Energy Block Clear',
    level: 'Holistic Healing',
    duration: '',
    desc: 'Identify and release stagnant energy to create greater flow, emotional ease, and renewed vitality.',
    image: EnergyBlock
  }
]

export default function Herosection () {
  return (
    <section className='bg-[#f4f3ef] py-50'>
      <div className=' mx-auto md:px-30 px-5'>
        <div className='grid lg:grid-cols-[420px_1fr] gap-16'>
          {/* LEFT */}
          <div className='md:sticky top-40 h-fit'>
            <h2 className='text-5xl text-[#7c8140] mb-10'>Healing Services</h2>

            <p className='text-2xl text-[#7c8140] mb-10'>
              Restore. Release.
              <span className='italic'> Reconnect.</span>
            </p>

            <p className='text-[#7c8140] leading-relaxed text-lg'>
              Discover holistic healing experiences designed to support
              emotional balance, inner clarity, relaxation, and energy
              alignment.
            </p>

            {/* <div className='flex gap-8 mt-10 text-[#7c8140]'>
              <button className='underline'>All</button>

              <button>Energy Healing</button>

              <button>Therapy</button>
            </div> */}
            <a href="https://calendar.app.google/Qx6jKM7bxUobEgBf8">
            <button className='mt-10 text-[#7c8140] underline cursor-pointer'>Book Your Slots</button>
            </a>
          </div>

          {/* RIGHT */}
          <div className='grid md:grid-cols-2 gap-10 '>
            {classes.map((item, i) => (
              <div key={i}>
                <div className='overflow-hidden'>
                  <img
                    src={item.image}
                    alt=''
                    className='w-full h-[520px] object-cover hover:scale-105 transition duration-700'
                  />
                </div>

                <h3 className='text-[#7c8140] text-3xl mt-6'>{item.title}</h3>

                <div className='flex gap-8 mt-4 text-[#7c8140]'>
                  <span>{item.level}</span>
                  <span>{item.duration}</span>
                </div>

                <p className='mt-6 text-[#7c8140] leading-8'>{item.desc}</p>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
