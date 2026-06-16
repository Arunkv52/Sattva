import { ArrowRight } from "lucide-react";

export default function Joinclasses() {
  return (
    <section className="px-6 py-10 bg-white">
      <div
        className="relative overflow-hidden rounded-3xl h-[700px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">
          {/* Top Content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium text-white/90">
              More Power Efficiency
            </p>

            <h1 className="md:text-5xl font-bold leading-tight text-white text-4xl">
              Where Sustainability
              <br />
              Meets Meditation.
            </h1>

            <button className="mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
              Start Doing Today

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* Bottom Floating Cards */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-end">
           

            {/* Right Card */}
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Experience the future of meditation
                  </h3>

                  <p className="text-sm text-white/70">
                    Renew Home is working with leading brands making
                    sustainable wellness accessible for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute -bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}