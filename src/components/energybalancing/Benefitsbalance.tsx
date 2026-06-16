import {
  FaUserGraduate,
  FaLeaf,
  FaPeopleGroup,
  FaPlay,
} from 'react-icons/fa6'

import YogaImg from '../../assets/home/premium-images/image-5.jpg'

const Benefitsbalance = () => {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: 'Expert Instructors',
      desc: 'Certified yoga teachers helping you achieve balance, strength and mindfulness.',
      bg: 'bg-purple-100',
    },
    {
      icon: <FaLeaf />,
      title: 'Transformative Practice',
      desc: 'Discover powerful techniques that improve flexibility and inner peace.',
      bg: 'bg-lime-100',
    },
    {
      icon: <FaPeopleGroup />,
      title: 'Welcoming Community',
      desc: 'Join a supportive environment where everyone grows together.',
      bg: 'bg-emerald-100',
    },
  ]

  return (
    <section className="py-24 bg-[#f8f8f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[4px] text-sm text-emerald-600">
              About Our Yoga Studio
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
              Your Journey To
              <br />
              A Better Self
            </h2>

            <div className="mt-12 space-y-8">
              {features.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${item.bg}`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {index !== features.length - 1 && (
                    <div className="border-b border-gray-200 mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[40px]">
              <img
                src={YogaImg}
                alt="Yoga Practice"
                className="w-full h-[650px] object-cover"
              />
            </div>

            {/* Floating Glass Card */}
            <div className="absolute bottom-8 right-8 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-[240px]">
              <p className="text-white text-lg font-medium">
                Watch Our
                <br />
                Yoga Journey
              </p>

              <div className="flex justify-between items-center mt-5">
                <div className="w-16 h-[2px] bg-white/60"></div>

                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition">
                  <FaPlay />
                </button>
              </div>
            </div>

            {/* Decorative Shape */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-200/30 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Benefitsbalance