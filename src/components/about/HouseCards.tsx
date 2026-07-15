import { motion } from 'framer-motion'
import Image1 from '../../assets/about/vision.jpg'
import Image2 from '../../assets/about/girl.jpg'
import Image3 from '../../assets/about/peaceful.jpg'

interface CardProps {
  image: string
  title: string
  subtitle: string
  description: string
}

const cards: CardProps[] = [
  {
    image: Image1,
    title: 'Reiki Healing',
    subtitle: '',
    description: 'Reconnect with your inner healing energy through the ancient practice of Reiki. Learn to restore physical, emotional, and spiritual balance with gentle, hands-on energy techniques.'
  },
  {
    image: Image2,
    title: 'Arc Angels',
    subtitle: '',
    description: 'Experience the loving guidance and divine protection of the Archangels. Learn powerful meditation and energy practices to invite clarity, healing, courage, and inner peace into your life.'
  },
  {
    image: Image3,
    title: 'Shamanic Healing',
    subtitle: '',
    description: 'Explore ancient shamanic traditions that help release energetic blockages and reconnect with your true self. Discover sacred healing techniques that promote transformation, balance, and spiritual growth.'
  }
]

export default function HouseCards() {
  return (
    <section className="bg-[#f5f5f3] py-20">
      <div className="mx-auto md:px-10 px-5">
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[650px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.subtitle}
                className="
                  absolute inset-0
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  group-hover:bg-black/50
                  transition-all duration-500
                "
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-10 text-white z-10">
                <div
                  className="
                    transition-all duration-500
                    group-hover:-translate-y-6
                  "
                >
                  <h3 className="text-4xl font-light leading-none">
                    {card.title}
                  </h3>

                  <h4 className="text-5xl italic font-serif leading-none mt-2">
                    {card.subtitle}
                  </h4>
                </div>

                {/* Description */}
                <div
                  className="
                    max-h-0 overflow-hidden
                    opacity-0
                    transition-all duration-700
                    group-hover:max-h-32
                    group-hover:opacity-100
                    mt-0 group-hover:mt-5
                  "
                >
                  <p className="text-base leading-relaxed max-w-xs">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}