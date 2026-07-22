import AngelImg from '../../assets/classes/Angel-healing/hero-img.jpg'
import AngelImg1 from '../../assets/classes/Angel-healing/wings-fly.jpg'
import ConclutionImg from '../../assets/classes/Angel-healing/distant-healing-message-banner-background.jpg'
import HealImg from '../../assets/classes/Angel-healing/healing-work.jpg'
import BenefitsImg from '../../assets/classes/Angel-healing/benefits.jpg'
import FaqImg from '../../assets/classes/Angel-healing/faq.jpg'




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
      className={`text-[11px] font-medium uppercase tracking-[0.32em] ${
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
const ImageFrame: React.FC<{
  src: string
  alt: string
  ratio?: string
  className?: string
}> = ({ src, alt, ratio = 'aspect-[4/5]', className = '' }) => (
  <div
    className={`group relative overflow-hidden rounded-[26px] border border-[#E8B454]/25 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] ${ratio} ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className='h-full w-full object-cover grayscale-[12%] sepia-[10%] contrast-[1.05] transition duration-700 ease-out group-hover:scale-[1.04]'
    />
    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent' />
    <div className='pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-[#E8B454]/15' />
  </div>
)

const pageBg = 'bg-[#F6F1E7] text-[#17140F]'
const inkBg = 'bg-[#1c939e]'
const emeraldBg = 'bg-[#083326]'
const sectionContainer = 'mx-auto max-w-6xl px-6 md:px-10'
const sectionSpace = 'py-20 md:py-28'
const goldButton =
  'inline-flex items-center gap-2 rounded-full bg-[#E8B454] px-8 py-3.5 text-sm font-medium tracking-wide text-[#1C1206] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_rgba(232,180,84,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8B454]'

export default function AngelHealing () {
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
          className={`${sectionContainer} grid gap-14 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-28 md:pt-24`}
        >
          <div className='relative rise'>
            <div className='pointer-events-none absolute -left-16 -top-40 opacity-70 md:-left-20'>
              <RingMark size={200} animate />
            </div>

            <Eyebrow>Angel Healing Services · Coimbatore</Eyebrow>

            <h1 className='font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-[3.75rem]'>
              Healing with
              <span className='block italic text-[#B8863E]'>Angels</span>
            </h1>

            <p className='mt-3 max-w-md text-[13px] uppercase tracking-[0.24em] text-[#8A6B2E]'>
              Connecting to divine energy for emotional and spiritual wellness
            </p>

            <p className='mt-8 max-w-xl text-[17px] leading-relaxed text-[#3A3325]'>
              At Sattva Holistics, we offer the finest Angel Healing services in
              Coimbatore, helping you connect with divine energy for emotional
              and spiritual wellness. Whether you're seeking to release past
              trauma, gain spiritual clarity, or achieve inner peace, Angel
              Healing can provide profound transformation and healing.
            </p>

            <div className='mt-10 flex flex-wrap items-center gap-5'>
              <a href='#enroll' className={goldButton}>
                Book a Session
              </a>
            </div>
          </div>

          <img
            src={AngelImg}
            alt='Candlelit healing space at Sattva Holistics'
            ratio='aspect-[4/5]'
            className='rise'
          />
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
            ratio='aspect-[4/5]'
            className='md:order-2'
          />

          <div className='md:order-1'>
            <Eyebrow dark>What Is Angel Healing?</Eyebrow>
            <SectionTitle light>A gentle path to your higher self</SectionTitle>

            <p className='mt-6 text-[16px] leading-relaxed text-[#D8CFBB]'>
              Angel Healing connects you to the energies of angels — divine
              beings believed to support and guide us. This healing modality
              uses their loving energy to clear emotional blockages, alleviate
              stress, and restore balance in your life.
            </p>
            <p className='mt-4 text-[16px] leading-relaxed text-[#D8CFBB]'>
              At Sattva Holistics, we specialise in Angel Healing and Angel Card
              Healing. Our goal is to help you connect with your higher self and
              the angels, offering emotional support, spiritual guidance, and
              physical healing through nurturing energy work.
            </p>
          </div>
        </div>
      </section>

      {/* ————————————————————— HOW IT WORKS ————————————————————— */}
      <section id='learn' className={`${sectionContainer} ${sectionSpace}`}>
        <div className='grid gap-16 md:grid-cols-[0.85fr_1.15fr]'>
          <div>
            <Eyebrow>The Process</Eyebrow>
            <SectionTitle>How Angel Healing works?</SectionTitle>
            <p className='mt-6 text-[15px] leading-relaxed text-[#4A4331]'>
              Angel Healing works by tapping into the divine energy of angels.
              In a session, an experienced practitioner channels this energy to
              help you clear blockages, release negative emotions, and align
              your energy with the divine. Here's how a session typically
              unfolds.
            </p>

            <img
              src={HealImg}
              alt='Soft light during a healing session'
              ratio='aspect-[6/5]'
              className='mt-10'
            />
          </div>

          <div className='space-y-10'>
            <div className='flex gap-6 border-b border-[#17140F]/10 pb-10'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                01
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Channeling Angelic Energy
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Our practitioners channel healing energy from angels to clear
                  energetic blockages from your body and aura.
                </p>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-10'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                02
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Emotional Healing
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Session work focuses on releasing grief, anxiety, and other
                  emotional burdens that may be holding you back.
                </p>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-10'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                03
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Spiritual Growth
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  The energy aligns your spirit with your true purpose,
                  deepening your connection with your higher self and divine
                  wisdom.
                </p>
              </div>
            </div>

            <div className='flex gap-6'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                04
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Restoring Balance
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Angel Healing promotes balance across every part of life —
                  emotional, mental, and physical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— BENEFITS ————————————————————— */}
      <section className={inkBg}>
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
                ratio='aspect-[9/10]'
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
      </section>

      {/* ————————————————————— WHY CHOOSE US ————————————————————— */}
      <section className={`${sectionContainer} ${sectionSpace}`}>
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
      </section>

      {/* ————————————————————— FAQ ————————————————————— */}
      <section className={emeraldBg}>
        <div
          className={`${sectionContainer} ${sectionSpace} grid gap-14 md:grid-cols-[0.8fr_1.2fr]`}
        >
          <div>
            <Eyebrow dark>Frequently Asked</Eyebrow>
            <SectionTitle light>Good to know before you begin</SectionTitle>

            <img
              src={FaqImg}
              alt='A quiet corner for reflection before a session'
              ratio='aspect-[8/9]'
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
      </section>

      {/* ————————————————————— CLOSING ————————————————————— */}
      <section className='relative overflow-hidden'>
        <img
          src={ConclutionImg}
          alt='Golden hour light, closing the page'
          className='absolute inset-0 h-full w-full object-cover grayscale-[20%] sepia-[15%]'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#12100C]/50 via-[#12100C]/80 to-[#12100C]/95' />

        <div className='relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36'>
          <p className='text-[#E8B454] text-center py-2'>Conclusion</p>

          <p className='font-serif text-2xl italic leading-snug text-[#F6F1E7] md:text-2xl'>
            At Sattva Holistics, we are passionate about guiding you on your healing
            journey through Top Angel Card Healing Services in Coimbatore and
            Angel Therapy Services. Whether you're seeking emotional release,
            spiritual clarity, or physical healing, Angel Healing provides a
            holistic and transformative experience.
          </p>
          <p className='font-serif text-2xl italic leading-snug text-[#F6F1E7] md:text-2xl'>
            Our practitioners are here to help you connect with your divine
            energy, guiding you toward peace, balance, and spiritual growth.
            Contact us today to book your personalized Angel Healing session and
            begin your path to emotional and spiritual wellness. Let us help you
            unlock the divine guidance and healing that awaits you.
          </p>

          <a href='#enroll' className={`${goldButton} mt-10`}>
            Book a Session
          </a>
        </div>
      </section>
    </div>
  )
}
