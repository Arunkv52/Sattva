import React from "react";

type RingMarkProps = {
  size?: number;
  className?: string;
  animate?: boolean;
};

const RingMark: React.FC<RingMarkProps> = ({
  size = 96,
  className = "",
  animate = false,
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    aria-hidden="true"
    className={className}
  >
    <circle cx="50" cy="50" r="4.5" fill="#E8B454" />
    {[16, 28, 40].map((r, i) => (
      <circle
        key={r}
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={i === 2 ? "#D9876F" : "#E8B454"}
        strokeWidth="1"
        opacity={0.55 - i * 0.13}
        className={animate ? "motion-safe:animate-[ringPulse_4.5s_ease-out_infinite]" : ""}
        style={animate ? { animationDelay: `${i * 0.9}s` } : undefined}
      />
    ))}
  </svg>
);

const RingBullet: React.FC = () => (
  <span className="relative mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center">
    <span className="absolute h-4 w-4 rounded-full border border-[#E8B454]/45" />
    <span className="h-1.5 w-1.5 rounded-full bg-[#E8B454]" />
  </span>
);

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#E8B454]">
    {children}
  </p>
);

const ListItem: React.FC<{ text: string; muted?: boolean }> = ({ text, muted = false }) => (
  <div className="flex items-start gap-3">
    <RingBullet />
    <span className={`text-[15px] leading-relaxed md:text-base ${muted ? "text-[#B9A8C9]" : "text-[#000000]"}`}>
      {text}
    </span>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <h2 className={`font-serif text-3xl leading-tight md:text-4xl ${className}`}>
    {children}
  </h2>
);

const learn = [
  "Introduction to Usui Reiki and its principles",
  "Understanding universal life energy",
  "Reiki history and philosophy",
  "Chakra awareness and energy balancing",
  "Self-healing techniques",
  "Reiki healing for family and friends",
  "Hand positions for healing sessions",
  "Meditation and grounding practices",
  "Aura cleansing and energy protection",
  "Developing intuition through Reiki practice",
];

const benefits = [
  "Encourages deep relaxation",
  "Helps reduce stress and emotional tension",
  "Supports mental clarity and inner peace",
  "Promotes balanced energy flow",
  "Enhances self-awareness and mindfulness",
  "Strengthens spiritual growth",
  "Improves overall well-being",
  "Builds confidence in energy healing",
];

const who = [
  "Beginners with no prior experience",
  "Wellness and holistic practitioners",
  "Yoga and meditation enthusiasts",
  "Therapists and healers",
  "Anyone interested in personal growth and self-healing",
];

const why = [
  "Beginner-friendly learning environment",
  "Step-by-step practical guidance",
  "Personalized mentoring",
  "Hands-on healing practice",
  "Small batch sessions",
  "Certificate of Completion",
  "Lifetime learning support",
  "Online and Offline training options",
];

const pageBg = "bg-[#ebebeb] text-[#000000]";
const sectionContainer = "mx-auto max-w-6xl px-6 md:px-10";
const sectionSpace = "py-20 md:py-28";
const borderSoft = "border-t border-white/10";
const cardClass =
  "rounded-2xl border border-white/10 bg-[#000] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8B454]/45";
const chipClass =
  "rounded-full border border-black/20 px-5 py-3 text-sm text-[#F5ECDF] transition duration-300 hover:-translate-y-0.5 hover:border-[#E8B454]/45 md:text-[15px]";

export default function SattvaReiki() {
  return (
    <div className={`${pageBg} min-h-screen w-full antialiased`}>
      <style>{`
  

        @keyframes ringPulse {
          0% { transform: scale(0.85); opacity: 0.65; }
          70% { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rise {
          animation: rise 0.8s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .rise {
            animation: none;
          }
        }
      `}</style>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-16">
        <div className="pointer-events-none absolute -right-24 top-0 opacity-90 md:-right-10 md:top-[-40px]">
          <RingMark size={420} animate className="opacity-30" />
        </div>

        <div className="relative max-w-2xl rise">
          <SectionEyebrow>Traditional Japanese Energy Healing</SectionEyebrow>

          <h1 className="font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-[3.6rem]">
            Usui Reiki
            <span className="mt-2 block italic text-[#E8B454]">
              the power of universal life energy
            </span>
          </h1>

          <p className="mt-7 text-base leading-relaxed text-black md:text-base">
            A traditional Japanese energy healing practice that promotes physical,
            emotional, mental, and spiritual well-being. This course introduces you
            to the principles of Reiki and teaches you how to channel universal life
            energy for self-healing and to support the healing of others.
          </p>

          <p className="mt-4 text-base leading-relaxed text-black md:text-base">
            Whether you're beginning your healing journey or deepening an existing
            practice, Usui Reiki offers practical techniques for inner peace,
            balance, and positive energy in everyday life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#enroll"
              className="rounded-full bg-[#E8B454] px-7 py-3.5 text-sm font-medium text-[#2F2140] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(232,180,84,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8B454]"
            >
              Consultation
            </a>

            
          </div>
        </div>
      </section>

      <section className={`${borderSoft} bg-[#1C939E]`}>
        <div className={`${sectionContainer} ${sectionSpace}`}>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <SectionEyebrow>Course Overview</SectionEyebrow>
              <SectionTitle>Practical training, held with care</SectionTitle>
            </div>

            <p className="text-base leading-relaxed text-white md:text-base">
              Our Usui Reiki training combines traditional teachings with guided
              practical sessions, helping you build confidence in using Reiki safely
              and effectively. You'll gain hands-on experience in energy healing,
              meditation, and chakra balancing, learning to weave Reiki into daily
              life rather than leaving it on a cushion.
            </p>
          </div>
        </div>
      </section>

      <section id="learn" className={`${sectionContainer} ${sectionSpace} text-black`}>
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Curriculum</SectionEyebrow>
            <SectionTitle>What you'll learn</SectionTitle>
          </div>

          <RingMark size={54} className="hidden opacity-70 md:block" />
        </div>

        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {learn.map((item) => (
            <ListItem key={item} text={item} />
          ))}
        </div>
      </section>

      <section className={`${borderSoft} bg-[#1C939E]`}>
        <div className={`${sectionContainer} ${sectionSpace}`}>
          <SectionEyebrow>Benefits of Usui Reiki</SectionEyebrow>
          <SectionTitle className="mb-14">What practice makes room for</SectionTitle>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {benefits.map((item) => (
              <ListItem key={item} text={item}  />
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionContainer} ${sectionSpace} `}>
        <SectionEyebrow>Who Can Join?</SectionEyebrow>
        <SectionTitle className="mb-12">This course is suitable for</SectionTitle>

        <div className="flex flex-wrap gap-3 ">
          {who.map((item) => (
            <span key={item} className={`${chipClass} text-black`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={`${borderSoft} bg-[#f1f1f1]`}>
        <div className={`${sectionContainer} ${sectionSpace}`}>
          <SectionEyebrow>Why Learn With Sattva Holistics?</SectionEyebrow>
          <SectionTitle className="mb-14">Training built around the student</SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div key={item} className={cardClass}>
                <RingMark size={28} className="mb-5 opacity-80" />
                <p className="text-[15px] leading-snug text-[#F5ECDF]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -left-16 bottom-[-60px] opacity-70">
          <RingMark size={260} />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <SectionEyebrow>Course Outcome</SectionEyebrow>
          <p className="font-serif text-2xl italic leading-snug text-black md:text-[2rem]">
            By the end of this course, you'll have the knowledge and confidence to
            practice Reiki for yourself and others — creating greater balance,
            relaxation, and well-being as your journey of personal and spiritual
            growth continues.
          </p>
        </div>
      </section>
    </div>
  );
}