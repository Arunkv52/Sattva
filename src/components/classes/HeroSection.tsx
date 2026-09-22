import { useState } from 'react'

import {
  Sheet,
  SheetContent,
  // SheetHeader,
  // SheetTitle
} from '@/components/ui/sheet'




// New images add
import usuireikiimg from '../../assets/new-classes/usui-reiki/image-1.jpg'
import crystalimg from '../../assets/new-classes/crystal/image-1.jpg'
import moneyreikiimg from '../../assets/new-classes/money-reiki/image-1.jpg'
import sacredimg from '../../assets/new-classes/sacred-money/image-1.jpg'
import bachimg from '../../assets/new-classes/bach-flower/image-1.jpg'
import sigilimg from '../../assets/new-classes/sigil-course/image-1.jpg'
import switchimg from '../../assets/new-classes/switchword-course/image-1.jpg'
import angelimg from '../../assets/new-classes/angel-therapy/image-1.jpg'
import quiyinimg from '../../assets/new-classes/quinyin-healing/image-1.jpg'
import shamanicimg from '../../assets/new-classes/shamanic-healing/image-1.jpg'
import soundhealingimg from '../../assets/new-classes/sound-healing/sound-healing-1.jpg'
import lamaferaimg from '../../assets/new-classes/ancient-therapy/image-1.jpg'











import  ReikiHealing  from './ReikiHealing'
import AngelHealing from './AngelHealing'
import SoundHealing from './SoundHealing'
import CrystalTherapy from './CrystalTherapy'
import MoneyReiki from './MoneyReiki'
import SacredGreen from './SacredGreen'
import Bachflower from './Bachflower'
import SigilCourse from './SigilCourse'
import SwitchwordCourse from './SwitchwordCourse'
import LamaFera from './LamaFera'
import QuanyinHealing from './QuanyinHealing'
import ShamanicHealing from './ShamanicHealing'




interface Course {
  id: number
  title: string
  level: string
  duration: string
  desc: string
  image: string
  component?: any
}

const classes: Course[] = [
  {
    id: 1,
    title: 'Usui Reiki',
    level: 'Certified Course',
    duration: '',
    desc: 'Learn the traditional Japanese healing technique that channels universal life energy for self-healing, emotional balance, and spiritual growth.',
    image: usuireikiimg,
    component: ReikiHealing 

  },

  {
    id: 2,
    title: 'Crystal Therapy',
    level: 'Healing Course',
    duration: '',
    desc: 'Join our Crystal Therapy Course and discover how crystal energy can transform your life while empowering you to help others on their healing journey.',
    image: crystalimg,
    component: CrystalTherapy
  },

  {
    id: 3,
    title: 'Money Reiki',
    level: 'Prosperity Healing',
    duration: '',
    desc: 'Our Money Reiki Course empowers you to develop a healthier relationship with money while creating a foundation for long-term abundance and success.',
    image: moneyreikiimg,
    component: MoneyReiki

  },

  {
    id: 4,
    title: 'Sacred Green Money Reiki',
    level: 'Advanced Healing',
    duration: '',
    desc: 'A specialized healing system that aligns your energy with abundance, success, and financial growth.',
    image: sacredimg,
    component: SacredGreen
  },

  {
    id: 5,
    title: 'Bach Flower Therapy',
    level: 'Natural Healing',
    duration: '',
    desc: 'Learn how flower remedies help restore emotional balance, reduce stress, and support overall mental wellbeing.',
    image: bachimg,
    component: Bachflower
  },

  {
    id: 6,
    title: 'Sigil Course',
    level: 'Manifestation Practice',
    duration: '',
    desc: 'Transform your intentions into powerful symbols, unlock your inner potential, and create a life guided by purpose, clarity, and possibility',
    image: sigilimg,
    component: SigilCourse
  },

  {
    id: 7,
    title: 'Switchword Course',
    level: 'Mind Power',
    duration: '',
    desc: 'Unlock the power of words, transform your mindset, and create a life filled with confidence, positivity, and limitless possibilities.',
    image: switchimg,
    component: SwitchwordCourse
  },

  {
    id: 8,
    title: 'Angel Therapy',
    level: 'Spiritual Healing',
    duration: '',
    desc: 'Connect with angelic guidance through healing techniques that promote peace, protection, and spiritual awareness.',
    image: angelimg,
    component: AngelHealing
  },

  {
    id: 9,
    title: 'Lama Fera',
    level: 'Energy Healing',
    duration: '',
    desc: 'Experience the transformative power of Lama Fera, release energetic blockages, and awaken a deeper sense of peace, positivity, and spiritual connection.',
    image: lamaferaimg,
    component: LamaFera
  },

  {
    id: 10,
    title: 'Quanyin Healing',
    level: 'Divine Healing',
    duration: '',
    desc: 'Open your heart to the energy of compassion, embrace forgiveness, and experience the healing power of love, peace, and spiritual awakening.',
    image: quiyinimg,
    component: QuanyinHealing
  },

  {
    id: 11,
    title: 'Shamanic Healing',
    level: 'Ancient Wisdom',
    duration: '',
    desc: 'Reconnect with your inner wisdom, embrace positive change, and experience a journey of healing, balance, and spiritual awakening through Shamanic Healing.',
    image: shamanicimg,
    component : ShamanicHealing
  },

  {
    id: 12,
    title: 'Sound Healing',
    level: 'Vibrational Therapy',
    duration: '',
    desc: 'Experience healing through soothing sound frequencies that calm the mind, relax the body, and balance your energy.',
    image: soundhealingimg,
    component: SoundHealing
  }
]

export default function Herosection () {
  const [selectedClass, setSelectedClass] = useState<Course | null>(null)

  const ActiveComponent = selectedClass?.component

  return (
    <>
      <section className='bg-[#f4f3ef] py-50'>
        <div className=' px-5 md:px-15'>
          <div className='md:flex flex md:flex-row flex-col justify-start items-start md:gap-20 gap-20'>
            {/* LEFT */}

            <div className='md:sticky top-40 h-fit'>
              <h2 className='text-5xl text-[#7c8140] mb-10'>
                Healing Services
              </h2>

              <p className='text-2xl text-[#7c8140] mb-10'>
                Restore. Release.
                <span className='italic'> Reconnect.</span>
              </p>

              <p className='text-lg leading-relaxed text-[#7c8140]'>
                Discover holistic healing experiences designed to support
                emotional balance, inner clarity, relaxation, and energy
                alignment.
              </p>

              <a
                href='https://calendar.app.google/Qx6jKM7bxUobEgBf8'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='mt-10 underline text-[#7c8140] hover:cursor-pointer'>
                  Consultation
                </button>
              </a>
            </div>

            {/* RIGHT */}

            <div className='grid md:grid-cols-2 gap-10'>
              {classes.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedClass(item)}
                  className='cursor-pointer'
                >
                  <div className='overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-130 object-cover transition duration-700 hover:scale-105'
                    />
                  </div>

                  <h3 className='mt-6 text-3xl text-[#7c8140]'>{item.title}</h3>


                  <p className='mt-5 leading-8 text-[#7c8140]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sheet */}

      <Sheet
        open={selectedClass !== null}
        onOpenChange={open => {
          if (!open) setSelectedClass(null)
        }}
      >
        <SheetContent className='w-full! sm:w-225! lg:w-275! max-w-none! overflow-y-auto'>
          {' '}
          
          <div className='mt-0'>
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <div className='space-y-4'>
                <img
                  src={selectedClass?.image}
                  alt={selectedClass?.title}
                  className='w-full rounded-lg'
                />

                <p className='leading-8 text-gray-600'>{selectedClass?.desc}</p>

                <p className='leading-8 text-gray-500'>
                  Detailed information about this course will be available soon.
                </p>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
