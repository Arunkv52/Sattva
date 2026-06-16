
const About = () => {
  return (
    <section className="relative overflow-hidden  min-h-screen flex items-center">
      {/* Decorative Curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <path
          d="M20 60 C300 -100 900 100 1300 0"
          fill="none"
          stroke="#f0b9a8"
          strokeWidth="1"
        />

        <path
          d="M1320 0 C1380 220 1350 360 1200 560"
          fill="none"
          stroke="#f0b9a8"
          strokeWidth="1"
        />
      </svg>

      <div className="container mx-auto px-6 md:px-5 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Heading */}
          <div>
            <h2
              className="
                text-[#2f2525]
                font-serif
                uppercase
                leading-[0.9]
                text-5xl
                md:text-7xl
                tracking-tight
              "
            >
              Cesta
              <br />
              K Prirodzenej
              <br />
              Kráse
            </h2>
          </div>

          {/* Right Content */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 lg:pt-64">
            <p className="text-[#403838] text-lg leading-relaxed">
              Tvárové terapie prinášajú viditeľné vyhladenie vrások,
              rozjasnený pohľad, plnšie pery a výraznejšie líčka.
              Tieto techniky podporujú zdravý krvný obeh, uvoľňujú
              napätie a obnovujú pružnosť svalov a fascií.
              Zároveň navodzujú pocit hlbokej relaxácie a napojenia
              na vlastné telo.
            </p>

            <p className="text-[#403838] text-lg leading-relaxed">
              Eva Žuffa v terapiách kombinuje rôzne techniky
              prispôsobené potrebám pleti klientiek a klientov.
              Individuálne tvárové terapie prebiehajú v štúdiu tváre
              v Žiline alebo v sieti certifikovaných salónov v iných
              mestách.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About