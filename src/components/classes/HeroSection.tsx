const classes = [
  {
    title: 'Ab Lab Reformer',
    level: 'All Levels',
    duration: '30 Mins',
    desc: 'Build strength, improve posture and develop deep core stability through guided movement.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a',
  },
  {
    title: 'Ballet Barre',
    level: 'All Levels',
    duration: '50 Mins',
    desc: 'Improve flexibility, coordination and body awareness with elegant movement sessions.',
    image:
      'https://images.unsplash.com/photo-1506629905607-d9c297d8d5d4',
  },
  {
    title: 'Morning Flow',
    level: 'Beginner',
    duration: '45 Mins',
    desc: 'A peaceful yoga session to energize your mornings and improve focus.',
    image:
      'https://images.unsplash.com/photo-1545389336-cf090694435e',
  },
  {
    title: 'Yin Restore',
    level: 'Intermediate',
    duration: '60 Mins',
    desc: 'Slow down and reconnect with breath through deep stretching.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
]

export default function Herosection() {
  return (
    <section className="bg-[#f4f3ef] py-50">
      <div className=" mx-auto md:px-30 px-5">

        <div className="grid lg:grid-cols-[420px_1fr] gap-16">

          {/* LEFT */}
          <div className="md:sticky top-40 h-fit">

            <h2 className="text-5xl text-[#7c8140] mb-10">
              Our Classes
            </h2>

            <p className="text-2xl text-[#7c8140] mb-10">
              Come in. Let go.
              <span className="italic"> Connect.</span>
            </p>

            <p className="text-[#7c8140] leading-relaxed text-lg">
              Situated across beautiful studio rooms, we offer
              an exciting range of yoga and wellness classes
              designed for every experience level.
            </p>

            <div className="flex gap-8 mt-10 text-[#7c8140]">
              <button className="underline">
                All
              </button>
              <button>Pilates</button>
              <button>Yoga / Mat</button>
            </div>

            <button className="mt-10 text-[#7c8140]">
              Learn more +
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid md:grid-cols-2 gap-10 ">

            {classes.map((item, i) => (
              <div key={i}>

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                <h3 className="text-[#7c8140] text-3xl mt-6">
                  {item.title}
                </h3>

                <div className="flex gap-8 mt-4 text-[#7c8140]">
                  <span>{item.level}</span>
                  <span>{item.duration}</span>
                </div>

                <p className="mt-6 text-[#7c8140] leading-8">
                  {item.desc}
                </p>

                <button className="mt-5 underline text-[#7c8140]">
                  See Timetable
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}