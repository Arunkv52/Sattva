import AngelImg1 from '../../assets/classes/Angel-healing/wings-fly.jpg'

type RingMarkProps = {
  size?: number
  className?: string
  animate?: boolean
}

const RingMark: React.FC<RingMarkProps> = ({
  size = 96,
  className = '',
  animate = false
}) => (
  <svg
    viewBox='0 0 100 100'
    width={size}
    height={size}
    aria-hidden='true'
    className={className}
  >
    <circle cx='50' cy='50' r='4.5' fill='#E8B454' />
    {[16, 28, 40].map((r, i) => (
      <circle
        key={r}
        cx='50'
        cy='50'
        r={r}
        fill='none'
        stroke={i === 2 ? '#D9876F' : '#E8B454'}
        strokeWidth='1'
        opacity={0.55 - i * 0.13}
        className={
          animate
            ? 'motion-safe:animate-[ringPulse_4.5s_ease-out_infinite]'
            : ''
        }
        style={animate ? { animationDelay: `${i * 0.9}s` } : undefined}
      />
    ))}
  </svg>
)

/* Small gold rule + label used ahead of every section title — the page's
   recurring "signature" mark, standing in for a wax seal / letterhead crest. */
const Eyebrow: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({
  children,
  dark = false
}) => (
  <div className='mb-5 flex items-center gap-0'>
    <span className=' bg-[#E8B454]' />
    <p
      className={`text-base font-medium uppercase  ${
        dark ? 'text-[#E8B454]' : 'text-[#8A6B2E]'
      }`}
    >
      {children}
    </p>
  </div>
)

const SectionTitle: React.FC<{
  children: React.ReactNode
  className?: string
  light?: boolean
}> = ({ children, className = '', light = false }) => (
  <h2
    className={`font-serif text-3xl leading-[1.12] tracking-tight md:text-[2.75rem] ${
      light ? 'text-[#F6F1E7]' : 'text-[#17140F]'
    } ${className}`}
  >
    {children}
  </h2>
)

/* Every photograph on the page runs through this frame so the imagery reads
   as one considered set rather than stock photos dropped in ad hoc: a soft
   sepia/grayscale grade, a slim gold hairline, and a bottom-up shadow. */

const pageBg = 'bg-[#F6F1E7] text-[#17140F]'
const emeraldBg = 'bg-[#083326]'
const sectionContainer = 'mx-auto max-w-6xl px-6 md:px-10'
const sectionSpace = 'py-20 md:py-28'
const goldButton =
  'inline-flex items-center gap-2 rounded-full bg-[#E8B454] px-8 py-3.5 text-sm font-medium tracking-wide text-[#1C1206] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_rgba(232,180,84,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8B454]'

export default function CrystalTherapy () {
  return (
    <div className={`${pageBg} min-h-screen w-full antialiased`}>
      <style>{`
        @keyframes ringPulse {
          0% { transform: scale(0.85); opacity: 0.65; }
          70% { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rise {
          animation: rise 0.9s ease both;
        }

        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
        details[open] .faq-icon {
          transform: rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .rise {
            animation: none;
          }
        }
      `}</style>

      {/* ————————————————————— HERO ————————————————————— */}
      <section className='relative overflow-hidden'>
        <div
          className={`${sectionContainer} grid gap-14 pb-20 pt-16 md:grid-cols-1 md:items-center md:pb-28 md:pt-24`}
        >
          <div className='relative rise'>
            <div className='pointer-events-none absolute -left-16 -top-40 opacity-70 md:-left-20'>
              <RingMark size={200} animate />
            </div>

            <Eyebrow>Crystal Therapy · Coimbatore</Eyebrow>

            <h1 className='font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-5xl'>
              Harness the Healing Power of Crystals for <span className='block italic text-[#B8863E]'> Balance and Wellness
              </span>
            </h1>

            

            <p className='mt-8  text-base leading-relaxed text-[#3A3325]'>
              At Satva Holistics, our Crystal Therapy Course is designed to help
              you explore the powerful energy of crystals and their ability to
              support emotional, mental, physical, and spiritual well-being.
              Crystals have been used for centuries as tools for healing,
              protection, and energy balancing.
            </p>
            <p className='mt-8  text-base leading-relaxed text-[#3A3325]'>
              This comprehensive training teaches you how different crystals
              work with the body's energy centers, helping to remove blockages,
              restore harmony, and promote inner peace. Whether you are
              beginning your healing journey or looking to expand your holistic
              practice, Crystal Therapy provides valuable techniques for
              personal transformation and professional growth.
            </p>

            <div className='mt-10 flex flex-wrap items-center gap-5'>
              <a href='#enroll' className={goldButton}>
                Book a Session
              </a>
            </div>
          </div>

          
        </div>
      </section>

      {/* ————————————————— WHAT IS ANGEL HEALING ————————————————— */}
      <section className={emeraldBg}>
        <div
          className={`${sectionContainer} ${sectionSpace} grid gap-14 md:grid-cols-2 md:items-center`}
        >
          <img
            src={AngelImg1}
            alt='Practitioner channeling healing energy'
            className='md:order-2'
          />

          <div className='md:order-1'>
            <Eyebrow dark>What is Crystal Therapy?</Eyebrow>

            <p className='mt-6 text-[16px] leading-relaxed text-[#D8CFBB]'>
              Crystal Therapy is a holistic healing practice that uses natural
              crystals and gemstones to support emotional, mental, physical, and
              spiritual well-being. The therapy is based on the belief that
              crystals carry unique energy vibrations that can help balance the
              body's energy field, promote positivity, and encourage overall
              harmony.
            </p>
          </div>
        </div>
      </section>

      {/* ————————————————————— HOW IT WORKS ————————————————————— */}
      <section id='learn' className={`${sectionContainer} ${sectionSpace}`}>
        <div className='grid gap-16 md:grid-cols-[0.85fr_1.15fr]'>
          <div>
            <Eyebrow>The Process</Eyebrow>
            <SectionTitle>How Does Crystal Therapy Work?</SectionTitle>
            <p className='mt-6 text-[15px] leading-relaxed text-[#4A4331]'>
              Crystal Therapy involves placing crystals on or around the body,
              carrying them as personal healing tools, meditating with them, or
              using them during energy healing sessions. Practitioners work with
              the body's energy centers, often called chakras, to help restore
              balance and remove energetic blockages.
            </p>
          </div>

          <div className='space-y-5'>
            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                01
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Encourages emotional balance and inner peace
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                02
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Helps reduce stress and anxiety
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                03
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Enhances concentration and mental clarity
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                04
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Supports chakra balancing and energy alignment
                </h3>
              </div>
            </div>
            

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                05
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Promotes positivity and self-confidence
                </h3>
              </div>
            </div>
            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                06
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Encourages spiritual growth and self-awareness
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— BENEFITS ————————————————————— */}
      {/* <section className={inkBg}>
        <div className={`${sectionContainer} ${sectionSpace}`}>
          <div className='grid gap-14 md:grid-cols-2 md:items-start'>
            <div>
              <Eyebrow dark>Benefits</Eyebrow>
              <SectionTitle light>
                What Are the Benefits of Angel Healing?
              </SectionTitle>
              <p className='mt-6 max-w-md text-[15px] leading-relaxed text-[#B9AE93]'>
                Angel Healing improves your overall well-being and helps you
                navigate life's challenges with more clarity and confidence.
              </p>

              <img
                src={BenefitsImg}
                alt='A calm space for reflection'
                className='mt-10'
              />
            </div>

            <div className='space-y-7'>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Emotional Healing
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Release negative emotions, trauma, and grief to create space
                  for peace.
                </p>
              </div>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Clarity and Insight
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Receive divine guidance that helps you make better decisions
                  and understand your purpose.
                </p>
              </div>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Stress Relief
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Feel deeply relaxed as angelic energy eases anxiety and mental
                  tension.
                </p>
              </div>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Physical Healing
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Relieved stress and improved energy flow support physical
                  well-being.
                </p>
              </div>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Spiritual Connection
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Strengthen your bond with your higher self and your spiritual
                  guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ————————————————————— WHY CHOOSE US ————————————————————— */}
      {/* <section className={`${sectionContainer} ${sectionSpace}`}>
        <div className='mb-14 max-w-2xl'>
          <Eyebrow>Why Sattva Holistics</Eyebrow>
          <SectionTitle>
            Why Choose Sattva Holistics for Angel Healing Services in
            Coimbatore?
          </SectionTitle>
          <p className='mt-6 text-[15px] leading-relaxed text-[#4A4331]'>
            Sattva Holistics is one of the top Angel Therapy providers in
            Coimbatore, offering personalised Angel Healing and Angel Card
            Healing services. Here's why our clients trust us.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Experienced Practitioners
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                Our therapists are highly trained in Angel Healing and Angel
                Card readings, ensuring the highest level of care.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Personalised Sessions
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                Every session is tailored to your unique emotional and spiritual
                needs, so you get the results that are right for you.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                A Healing Environment
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                A peaceful, calming, nurturing space where you can relax,
                connect with the divine, and experience true healing.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Confidential & Supportive
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                We prioritise your privacy and provide a supportive space to
                heal emotionally and spiritually, without judgment.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ————————————————————— FAQ ————————————————————— */}
      {/* <section className={emeraldBg}>
        <div
          className={`${sectionContainer} ${sectionSpace} grid gap-14 md:grid-cols-[0.8fr_1.2fr]`}
        >
          <div>
            <Eyebrow dark>Frequently Asked</Eyebrow>
            <SectionTitle light>Good to know before you begin</SectionTitle>

            <img
              src={FaqImg}
              alt='A quiet corner for reflection before a session'
              className='mt-10'
            />
          </div>

          <div className='divide-y divide-[#F6F1E7]/12'>
            <details className='group py-6' open>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  What is the difference between Angel Healing and regular
                  therapy?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Angel Healing connects you with angelic energies for emotional,
                spiritual, and physical healing, working intuitively and
                energetically rather than through talk-based analysis.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  How long does an Angel Healing session last?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Sessions usually run 45 minutes to an hour, giving enough time
                to connect with the angelic realm across emotional, mental, and
                spiritual levels.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  Is Angel Healing suitable for everyone?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Yes — it's a gentle, non-invasive practice suited to people of
                all ages, backgrounds, and spiritual beliefs.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  How do I know if Angel Healing is right for me?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                If you're navigating emotional stress, spiritual confusion, or
                physical discomfort — or simply want stronger guidance from your
                higher self — a session is a good place to start.
              </p>
            </details>
          </div>
        </div>
      </section> */}

      {/* ————————————————————— CLOSING ————————————————————— */}
      <section className='relative overflow-hidden bg-[#f5f4f0]'>
       
        <div className='absolute inset-0 bg-linear-to-b from-[#12100C]/50 via-[#12100C]/80 to-[#12100C]/95' />

        <div className='relative mx-auto max-w-6xl px-10 py-28 md:py-20'>
          <p className='text-[#E8B454] py-2'>Conclusion</p>

          <p className='font-serif text-2xl leading-snug text-[#F6F1E7] md:text-2xl'>
            Crystal Therapy is a powerful energy healing practice that utilizes the natural vibrations of crystals and gemstones to restore balance, harmony, and well-being. For centuries, crystals have been valued for their ability to enhance positive energy, clear negativity, and support emotional and spiritual growth.
          </p>
          

          <a href='#enroll' className={`${goldButton} mt-10`}>
            Book a Session
          </a>
        </div>
      </section>
    </div>
  )
}
