const practices = [
  {
    title: "Hatha Yoga",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
  },
 
];

export default function AboutEnergy() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Content Card */}
          <div className="bg-[#0e2e69] rounded-[32px] p-10 flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-white md:text-5xl text-5xl font-light leading-tight">
                Discover
                yoga's
                practices
              </h2>
            </div>

            <p className="text-white/90 md:text-sm text-2xl leading-relaxed w-full">
              Yoga is not just physical exercises, it is a way to
              understanding oneself, harmony of body, mind and soul.
            </p>
          </div>

          {/* Yoga Cards */}
          {practices.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[32px] min-h-[500px] group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Bottom Glass Button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-full px-10 py-4">
                  <span className="text-white text-base font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}