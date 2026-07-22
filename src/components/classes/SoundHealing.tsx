import AngelImg from '../../assets/classes/sound-healing/1.jpg'
import ConclutionImg from '../../assets/classes/Angel-healing/distant-healing-message-banner-background.jpg'
import HealImg from '../../assets/classes/sound-healing/2.jpg'
import BenefitsImg from '../../assets/classes/sound-healing/5.jpg'
import FaqImg from '../../assets/classes/sound-healing/6.jpg'

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

export default function SoundHealing () {
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

            <h1 className='font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-5xl'>
              Top 10 Ways Sound Healing Can Transform Your Well-Being:
              <span className='block italic text-[#B8863E]'>
                Unlock the Power of Vibrations at Sattva Holistics
              </span>
            </h1>

            <p className='mt-8 max-w-xl text-[17px] leading-relaxed text-[#3A3325]'>
              Sound healing, a practice that uses vibrations and frequencies to
              promote health and balance, is becoming increasingly popular for
              those seeking natural ways to enhance their well-being. Whether
              you’re looking to reduce stress, ease pain, or achieve spiritual
              growth, sound healing offers profound benefits. Sattva Holistics,
              a leading center for sound healing training and mind-body
              relaxation in Coimbatore, provides a space where individuals can
              explore these benefits and transform their lives
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

      {/* ————————————————————— HOW IT WORKS ————————————————————— */}
      <section id='learn' className={`${sectionContainer} ${sectionSpace}`}>
        <div className='grid gap-16 md:grid-cols-[0.85fr_1.15fr]'>
          <div>
            <div className='flex gap-6 border-b border-[#17140F]/10 pb-10'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                01
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Stress Reduction and Relaxation
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  One of the most immediate and profound benefits of sound
                  healing is stress reduction. The use of specific sound
                  frequencies, such as those from Tibetan singing bowls, gongs,
                  or tuning forks, can help activate the body's relaxation
                  response, lowering cortisol levels and reducing feelings of
                  anxiety. At Sattva Holistics, sound healing training
                  incorporates various techniques to achieve deep relaxation,
                  allowing individuals to unwind and release stress.
                </p>
              </div>
            </div>
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
                02
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Pain Relief and Healing
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Sound healing has been shown to alleviate both acute and
                  chronic pain by stimulating the body's natural healing
                  processes. By applying sound frequencies to specific areas of
                  the body, sound healing can increase circulation, reduce
                  inflammation, and ease muscle tension. Through Sattva
                  Holistics's sound healing programs and training, individuals
                  can learn techniques to target pain relief, promoting faster
                  recovery and improved mobility
                </p>
              </div>
            </div>

            <div className='flex gap-6 border-b border-[#17140F]/10 pb-10'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                03
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Improved Sleep Quality
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Sound healing plays a key role in improving sleep quality. The
                  soothing vibrations help calm the nervous system, making it
                  easier for individuals to fall into a deep, restorative sleep.
                  Regular sound healing sessions can help regulate the
                  production of melatonin, a hormone responsible for promoting
                  restful sleep. At Sattva Holistics, sound healing is
                  integrated into mindfulness practices that support better
                  sleep patterns and relaxation.
                </p>
              </div>
            </div>

            <div className='flex gap-6'>
              <span className='font-serif text-3xl italic text-[#B8863E]'>
                04
              </span>
              <div>
                <h3 className='font-serif text-xl text-[#17140F]'>
                  Emotional Healing and Release
                </h3>
                <p className='mt-2 text-[15px] leading-relaxed text-[#4A4331]'>
                  Emotional healing is one of the most powerful aspects of sound
                  healing. Vibrations and frequencies used in sound therapy can
                  help release trapped emotions and blockages, leading to
                  emotional balance and clarity. Whether you're working through
                  grief, anxiety, or past trauma, sound healing can facilitate
                  emotional release and healing. Sattva Holistics offers sound
                  healing training to help individuals process and release
                  emotional pain, fostering a sense of peace and equilibrium.
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
              <img
                src={BenefitsImg}
                alt='A calm space for reflection'
                className='mt-0'
              />
            </div>

            <div className='space-y-7'>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Detoxification and Improved Circulation
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Sound healing promotes the body’s natural detoxification
                  process by stimulating blood circulation and lymphatic
                  drainage. This supports the removal of toxins, improves
                  nutrient delivery to cells, and enhances overall vitality.
                  Regular sound healing sessions at Sattva Holistics can assist
                  in boosting circulation, revitalizing the body, and supporting
                  long-term health through gentle detoxification.
                </p>
              </div>
              <div className='border-l border-[#E8B454]/40 pl-6'>
                <h3 className='font-serif text-lg text-[#F6F1E7]'>
                  Holistic Well-Being and Balance
                </h3>
                <p className='mt-1 text-[15px] leading-relaxed text-[#B9AE93]'>
                  Ultimately, sound healing provides a holistic approach to
                  well-being by addressing the body, mind, and spirit. It helps
                  individuals achieve balance in their physical health,
                  emotional stability, and spiritual alignment. By integrating
                  sound healing into their lives, individuals can experience a
                  harmonious state of being, which positively impacts their
                  relationships, work, and personal growth. Sattva Holistics’s
                  comprehensive approach to sound healing promotes total
                  well-being, allowing individuals to live more balanced,
                  fulfilled lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— WHY CHOOSE US ————————————————————— */}
      <section className={`${sectionContainer} ${sectionSpace}`}>
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Chakra Balancing and Energy Healing
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                Sound healing is particularly effective in balancing the body’s
                chakras—energy centers that govern various physical, emotional,
                and spiritual aspects of life. Each chakra responds to different
                frequencies, and sound healing helps to clear blockages in these
                energy centers, restoring balance and alignment. At Sattva
                Holistics, sound healing practitioners are trained to use
                various instruments to cleanse, activate, and align the chakras,
                enhancing overall health and well-being
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Mental Clarity and Focus
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                Sound healing enhances mental clarity by quieting the mind and
                reducing distractions. The vibrations created during sound
                therapy help individuals enter a meditative state, improving
                focus and concentration. Whether you're working on a project,
                studying, or simply need mental clarity, sound healing can
                sharpen your cognitive abilities. Sattva Holistics’s training
                programs focus on cultivating mental discipline and clarity
                through sound, allowing individuals to harness their inner power
                for enhanced performance.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Spiritual Growth and Awareness
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                Sound healing is deeply connected to spiritual practices. The
                vibrations help individuals achieve a higher state of
                consciousness, facilitating a deeper connection with their inner
                self and the universe. Sound healing promotes spiritual
                awakening by raising an individual’s vibrational frequency,
                allowing them to access higher levels of awareness. At Satva
                Nest, spiritual growth is fostered through sound therapy and
                meditation, helping individuals develop a greater sense of
                purpose, connection, and enlightenment.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-[22px] border border-[#17140F]/10 bg-white/60'>
            <div className='p-7'>
              <h3 className='font-serif text-lg text-[#17140F]'>
                Increased Creativity and Intuition
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-[#4A4331]'>
                When the mind is relaxed and free from distractions, creativity
                and intuition naturally flourish. Sound healing encourages a
                flow state where individuals can tap into their creative
                potential and intuitive wisdom. The calming vibrations help
                clear mental fog, enhance cognitive function, and inspire new
                ideas. Sattva Holistics’s sound healing sessions help
                individuals reconnect with their creativity and intuition,
                whether for personal development or artistic expression.
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
                  How does sound healing work?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Sound healing works by using vibrations and frequencies to
                restore balance, clear blockages, and promote relaxation within
                the body's energy systems. At Sattva Holistics, we teach how
                these therapeutic sounds can enhance physical and spiritual
                well-being.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  Can sound healing help with chronic pain?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Yes, sound healing can help with chronic pain by improving
                circulation, reducing muscle tension, and stimulating the body's
                natural healing processes, promoting relief and comfort. At
                Sattva Holistics, we guide you in using sound frequencies to
                manage pain effectively.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  What are the benefits of sound healing for mental health?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Sound healing benefits mental health by reducing stress,
                anxiety, and emotional tension, while promoting relaxation,
                clarity, and a sense of inner peace. At Sattva Holistics, we
                teach how sound frequencies can enhance emotional balance and
                mindfulness.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  Is sound healing effective for sleep problems?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Yes, sound healing is effective for sleep problems by calming
                the nervous system, reducing restlessness, and promoting deep,
                restful sleep. At Sattva Holistics, we teach how specific sound
                frequencies can improve your sleep quality.
              </p>
            </details>

            <details className='group py-6'>
              <summary className='flex cursor-pointer items-center justify-between gap-6'>
                <span className='font-serif text-lg text-[#F6F1E7]'>
                  Can I learn sound healing in Coimbatore?
                </span>
                <span className='faq-icon shrink-0 text-2xl font-light text-[#E8B454] transition-transform duration-300'>
                  +
                </span>
              </summary>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-[#B9AE93]'>
                Yes, Sattva Holistics offers sound healing training in
                Coimbatore, providing both theoretical and practical knowledge
                to help individuals use sound therapy in their lives.
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
            Sound healing is a transformative practice that can improve your
            physical health, emotional well-being, and spiritual growth. Sattva
            Holistics in Coimbatore, you can explore the powerful benefits of
            sound healing through professional training and therapy. From stress
            relief to enhanced creativity and emotional healing, sound healing
            offers a natural, holistic approach to well-being.
          </p>
          <p className='font-serif text-2xl italic leading-snug text-[#F6F1E7] md:text-2xl'>
            By incorporating sound healing into your life, you can experience a
            profound shift in your health, happiness, and overall sense of
            harmony. Discover the power of sound at Sattva Holistics and unlock
            the potential for lasting transformation.
          </p>

          <a href='#enroll' className={`${goldButton} mt-10`}>
            Book a Session
          </a>
        </div>
      </section>
    </div>
  )
}
