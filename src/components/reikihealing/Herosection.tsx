import { ArrowUpRight } from "lucide-react";
import Navbar from "../Navbar";

const cards = [
  {
    small: "Discover Our Philosophy",
    title: "Begin Your Journey",
  },
  {
    small: "Start Your Reiki Journey",
    title: "Join Practitioner Training",
  },
  {
    small: "Ready to Begin?",
    title: "Explore Healing Sessions",
  },
];

const Herosection = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden reiki-bg">

       

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative md:top-10 -top-20 z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

          <div className="max-w-5xl">

            <h1 className="text-white font-bold leading-[0.9] tracking-tight text-5xl md:text-7xl">
             Heal Yourself. <br /> Heal Others.
            </h1>

          </div>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-6 z-20">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4">

            {cards.map((item, index) => (
              <div
                key={index}
                className="relative backdrop-blur-lg bg-white/20 border border-white/20 rounded-[28px] p-8 group overflow-hidden"
              >
                <p className="text-white/90 text-base mb-3">
                  {item.small}
                </p>

                <h3 className="text-white text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <button
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[28px]
                  bg-[#ffffff]/50 text-white flex items-center justify-center
                  group-hover:scale-110 transition"
                >
                  <ArrowUpRight size={28} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;