import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How do I book into a class?',
    answer:
      'You can book your class online through our website or contact us directly for assistance.'
  },
  {
    question: 'What do I bring to a Yoga class?',
    answer:
      'Bring comfortable clothing, a water bottle, and a yoga mat if you have one.'
  },
  {
    question: 'What do I bring to a Reformer Pilates class?',
    answer:
      'Wear fitted activewear and bring a water bottle. Equipment is provided.'
  },
  {
    question: 'What do I need to know about your sauna?',
    answer:
      'Our sauna sessions are available by appointment and designed for relaxation and recovery.'
  },
  {
    question: 'What facilities are available?',
    answer:
      'We offer yoga spaces, meditation areas, changing rooms, and wellness facilities.'
  },
  {
    question: 'What do I need to know ahead of my first visit?',
    answer:
      'Please arrive 10–15 minutes early and bring any required booking confirmation.'
  },
  {
    question: 'Where is the studio located?',
    answer:
      'Our studio is conveniently located in the city center with easy parking access.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f5f5f3] py-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div className="relative flex justify-center lg:justify-start md:sticky top-30">
            {/* Background Lotus */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start opacity-10">
              <svg
                width="320"
                height="320"
                viewBox="0 0 200 200"
                fill="currentColor"
                className="text-purple-200"
              >
                <path d="M100 40C85 70 60 85 35 90C55 110 75 115 100 105C125 115 145 110 165 90C140 85 115 70 100 40Z" />
                <path d="M100 60C80 95 50 120 25 125C50 145 75 150 100 135C125 150 150 145 175 125C150 120 120 95 100 60Z" />
              </svg>
            </div>

            <div className="relative z-10 text-center lg:text-left">
              <p className="text-[70px] md:text-5xl font-light text-[#8B8750] leading-none">
                FAQ
              </p>

              <p className="mt-4 text-3xl md:text-lg text-[#8B8750] font-light">
                Sattva Holistics. Come in.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#b0ab78]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-8 flex items-center justify-between text-left"
                >
                  <span className="text-xl md:text-2xl text-[#8B8750] font-light pr-6">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <Minus
                      size={24}
                      className="text-[#8B8750] shrink-0"
                    />
                  ) : (
                    <Plus
                      size={24}
                      className="text-[#8B8750] shrink-0"
                    />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-40 pb-8'
                      : 'max-h-0'
                  }`}
                >
                  <p className="text-black leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-[#b0ab78]" />
          </div>
        </div>
      </div>
    </section>
  )
}