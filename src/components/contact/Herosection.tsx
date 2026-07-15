import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-[#f6f6f4] py-32 md:py-40 overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#d8d4e0]/50 to-[#c9a463]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-15%] h-[380px] w-[380px] rounded-full bg-[#8a8750]/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Brand statement + contact details */}
          <div className="relative">
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#8a8750]">
              <span className="h-px w-8 bg-[#c9a463]" />
              Visit The Studio
            </span>

            <h2 className="mt-6 font-serif text-5xl md:text-6xl font-light text-[#5f5c38] leading-[1.05]">
              Contact Us
            </h2>

            <p className="mt-8 text-2xl md:text-3xl text-[#8a8750] font-light leading-snug">
              We'd{' '}
              <span className="italic font-serif text-[#5f5c38]">love</span>{' '}
              to welcome you in person.
            </p>

            {/* Contact details */}
            <div className="mt-14 space-y-8">
              <div className="flex items-start gap-4">
                <Mail size={18} strokeWidth={1.5} className="mt-1 text-[#c9a463] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8a8750]/70">Email</p>
                  <a
                    href="mailto:admin@sattvaholistics.com"
                    className="text-lg text-[#5f5c38] hover:text-[#c9a463] transition-colors"
                  >
                    admin@sattvaholistics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} strokeWidth={1.5} className="mt-1 text-[#c9a463] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8a8750]/70">Phone</p>
                  <a
                    href="tel:+919994053595"
                    className="text-lg text-[#5f5c38] hover:text-[#c9a463] transition-colors"
                  >
                    +91 99940 53595
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="mt-1 text-[#c9a463] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8a8750]/70">Address</p>
                  <p className="text-lg text-[#5f5c38]">
                    102/17 Main Road, Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 flex items-center gap-8 border-t border-[#8a8750]/20 pt-8">
            <a
                href="#"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-[#5f5c38] hover:text-[#c9a463] transition-colors"
              >

                Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-[#5f5c38] hover:text-[#c9a463] transition-colors"
              >
                
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-[#5f5c38] hover:text-[#c9a463] transition-colors"
              >

                Youtube
              </a>
              
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[#8a8750]/20 shadow-[0_50px_100px_-30px_rgba(90,88,50,0.35)]">
              <iframe
                title="Sattva Holistics location"
                src="https://www.google.com/maps?q=102/17+Main+Road,+Coimbatore,+Tamil+Nadu&output=embed"
                className="w-full h-[440px] md:h-[560px] grayscale-[10%] sepia-[8%] contrast-[1.05] saturate-[0.9]"
                style={{ border: 0 }}
                loading="lazy"
              />

              {/* Subtle warm veil so the map matches the palette instead of looking bolted on */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#33321f]/15 via-transparent to-transparent" />
            </div>

            {/* Floating address / directions card */}
            <div className="relative -mt-10 mx-6 md:absolute md:mx-0 md:left-8 md:bottom-8 md:mt-0 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl px-7 py-6 max-w-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8a8750]">
                Sattva Holistics
              </p>
              <p className="mt-2 text-[#5f5c38] leading-relaxed">
                102/17 Main Road, Coimbatore, Tamil Nadu
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=102/17+Main+Road,+Coimbatore,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8a8750] hover:text-[#c9a463] transition-colors"
              >
                Get Directions
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}