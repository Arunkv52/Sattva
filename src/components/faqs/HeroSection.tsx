import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is Energy Balancing?',
    answer:
      'Energy Balancing is a gentle healing practice that supports harmony within the body and mind by encouraging a healthy flow of energy and restoring inner balance.'
  },

  {
    question: 'What happens during a Reiki Healing session?',
    answer:
      'Reiki sessions involve guided relaxation and energy work designed to help reduce stress, support emotional wellbeing, and encourage deep relaxation.'
  },

  {
    question: 'How does Sound Therapy work?',
    answer:
      'Sound Therapy uses calming frequencies and vibrations to help quiet the mind, release tension, and create a deeply restorative experience.'
  },

  {
    question: 'What is Emotional Release therapy?',
    answer:
      'This session helps create awareness around emotional tension and provides a supportive environment to encourage relaxation and emotional renewal.'
  },

  {
    question: 'What is Intuition Boost designed for?',
    answer:
      'Intuition Boost sessions focus on mindfulness and inner awareness practices that help you reconnect with yourself and strengthen personal clarity.'
  },

  {
    question: 'What does Energy Block Clearing involve?',
    answer:
      'Energy Block Clearing sessions aim to release areas of emotional and energetic heaviness and support a renewed sense of flow and wellbeing.'
  },

  {
    question: 'How should I prepare for my first session?',
    answer:
      'Wear comfortable clothing, arrive a few minutes early, and come with an open and relaxed mindset to enjoy your healing experience.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index
    )
  }

  return (
    <section className="bg-[#f5f5f3] md:py-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="relative flex justify-center lg:justify-start md:sticky top-30">

            {/* Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start opacity-10">
              <svg
                width="320"
                height="320"
                viewBox="0 0 200 200"
                fill="currentColor"
                className="text-[#b0ab78]"
              >
                <path d="M100 40C85 70 60 85 35 90C55 110 75 115 100 105C125 115 145 110 165 90C140 85 115 70 100 40Z" />
                <path d="M100 60C80 95 50 120 25 125C50 145 75 150 100 135C125 150 150 145 175 125C150 120 120 95 100 60Z" />
              </svg>
            </div>

            <div className="relative z-10 text-center lg:text-left">

              <p className="text-6xl md:text-5xl font-light text-[#8B8750] leading-none">
                Frequently Asked
              </p>

              <p className="mt-4 text-2xl md:text-lg text-[#8B8750] font-light">
                Healing Questions.
                <span className="italic">
                  {' '}Find clarity.
                </span>
              </p>

            </div>
          </div>

          {/* RIGHT */}
          <div className="md:py-0 py-20">

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
                      ? 'max-h-60 pb-8'
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