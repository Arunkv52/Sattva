import {
  Heart,
  Sparkles,
  Activity,
  Dumbbell,
} from "lucide-react";

const services = [
  {
    title: "Yoga",
    icon: Heart,
    desc: "Experience mindful movement and breathing practices that create balance and flexibility.",
  },
  {
    title: "Meditation",
    icon: Sparkles,
    desc: "Develop inner calm and focus with guided sessions designed for all levels.",
  },
  {
    title: "Pilates",
    icon: Activity,
    desc: "Build strength, improve posture, and increase body awareness.",
  },
  {
    title: "Guided Programs",
    icon: Dumbbell,
    desc: "Structured wellness journeys to support your growth and transformation.",
  },
];

export default function HealthyPartner() {
  return (
    <section className="bg-[#F7F5F2] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[5px] text-green-700 text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Your Healthy Partner
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our online yoga, meditation, Pilates, and guided wellness
            programs are designed to support your journey toward a
            healthier and balanced lifestyle.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
            See All Classes
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white rounded-3xl p-8 border border-gray-100
                hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-green-50
                  flex items-center justify-center
                  group-hover:bg-green-700 transition"
                >
                  <Icon
                    size={30}
                    className="text-green-700 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

                <button
                  className="mt-8 text-green-700 font-medium
                  group-hover:translate-x-2 transition"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}