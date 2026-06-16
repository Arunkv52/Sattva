import EventImage from '../../assets/home/teach.webp'

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f3] py-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-lg md:sticky top-30">
            <h2 className="text-5xl md:text-5xl font-light text-[#8A8751]">
              Events
            </h2>

            <p className="mt-10 text-3xl text-[#8A8751] font-light">
              A space to{' '}
              <span className="italic font-serif">
                connect.
              </span>
            </p>

            <p className="mt-10 text-xl md:text-lg leading-relaxed text-[#8A8751]">
              At Sattva Holistics we believe in going above and beyond,
              and our events are just one way that we do so.
              Hosting regular events that deepen your practice
              and your connection. Take a deep dive, learn more,
              connect profoundly.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Event Card */}
            <div className="relative overflow-hidden">
              <img
                src={EventImage}
                alt="House of Connection"
                className="w-full h-[300px] md:h-[480px] object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-10 left-10">
                <h3 className="text-white text-4xl md:text-6xl font-light leading-none">
                  House of
                </h3>

                <span className="block text-white text-4xl md:text-6xl italic font-serif mt-2">
                  Connection
                </span>
              </div>

              {/* Top Right Icon */}
              <div className="absolute top-8 right-8">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-[#8A8751] text-xl">✦</span>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div>
              <p className="text-3xl md:text-3xl leading-tight text-[#8A8751] font-light">
                Upcoming events below, see{' '}
                <a
                  href="#"
                  className="underline underline-offset-8"
                >
                  HERE
                </a>{' '}
                for our full calendar of events
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}