

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
      className={`text-2xl font-medium uppercase ${
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

export default function Bachflower () {
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

            

            <h1 className='font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-5xl'>
              Heal Emotions Naturally and
              <span className='block italic text-[#B8863E]'>
                Restore Inner Harmony
              </span>
            </h1>

            <p className='mt-8 max-w-full text-[17px] leading-relaxed text-[#3A3325]'>
              Bach Flower Therapy is a gentle and natural healing system that
              works on emotional well-being. Developed using flower essences,
              this therapy helps release negative emotions, reduce stress, and
              promote emotional balance. At Satva Holistics, our Bach Flower
              Therapy Course teaches you how to use flower remedies to support
              emotional healing and personal growth.
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
          className={`${sectionContainer} ${sectionSpace} grid gap-14 md:grid-cols-1 md:items-center`}
        >
         
          <div className='md:order-1'>
            <Eyebrow dark>What is Sacred Green Money Reiki?</Eyebrow>
            <p className='mt-6 text-[16px] leading-relaxed text-[#D8CFBB]'>
              Bach Flower Therapy is a natural and gentle healing system that
              uses flower essences to support emotional and mental well-being.
              Developed by Dr. Edward Bach, this therapy is based on the belief
              that emotional balance plays an important role in overall health
              and happiness.
            </p>
            <p className='mt-6 text-[16px] leading-relaxed text-[#D8CFBB]'>
              Bach Flower Remedies are created from the essence of specific
              flowers and are used to help address emotions such as fear,
              stress, anxiety, sadness, lack of confidence, uncertainty, and
              emotional overwhelm. Rather than focusing on physical symptoms
              alone, Bach Flower Therapy aims to restore emotional harmony and
              inner balance.
            </p>
          </div>
        </div>
      </section>

      {/* ————————————————————— HOW IT WORKS ————————————————————— */}
      <section id='learn' className={`${sectionContainer} ${sectionSpace}`}>
        <div className='grid gap-16 md:grid-cols-[0.85fr_1.15fr]'>
          <div>
            <p className="py-2">The Process</p>
            <SectionTitle>How Does Bach Flower Therapy Work?</SectionTitle>
            <p className='mt-6 text-[15px] leading-relaxed text-[#4A4331]'>
              Bach Flower Therapy works by identifying and addressing negative
              emotional patterns that may affect a person's well-being.
            </p>

           
          </div>

          <div className='space-y-5'>
            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                01
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Identifying Emotional Imbalances
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                02
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Selecting Appropriate Flower Remedies
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                03
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Restoring Emotional Harmony
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                04
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Supporting Personal Growth
                </h3>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-3'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                05
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Encouraging Mind-Body Balance
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
      <section className='relative overflow-hidden'>
       
        <div className='absolute inset-0 bg-linear-to-b from-[#12100C]/50 via-[#12100C]/80 to-[#12100C]/95' />

        <div className='relative mx-auto max-w-6xl px-10 py-28 md:py-20'>
          <p className='text-[#E8B454] text-left py-2'>Conclusion</p>

          <p className='font-serif text-2xl leading-snug text-[#F6F1E7] md:text-2xl'>
            Bach Flower Therapy is a gentle and natural healing system that
            supports emotional well-being by addressing negative emotions and
            restoring inner harmony. Through carefully selected flower essences,
            this therapy helps individuals release stress, fear, anxiety, and
            emotional imbalances while cultivating confidence, peace, and
            positivity.
          </p>
          <p className='font-serif text-2xl leading-snug text-[#F6F1E7] md:text-2xl'>
            Whether you are seeking emotional healing, personal growth, or
            greater balance in your daily life, Bach Flower Therapy offers a
            simple yet powerful approach to nurturing emotional wellness and
            enhancing overall quality of life.
          </p>

          <a href='#enroll' className={`${goldButton} mt-10`}>
            Book a Session
          </a>
        </div>
      </section>
    </div>
  )
}
