import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can learn Reiki?",
    answer:
      "Reiki is suitable for everyone, regardless of age, profession, or prior healing experience.",
  },
  {
    question: "Is Reiki First Degree enough to start healing?",
    answer:
      "Yes. After the First Degree attunement, students can begin practicing self-healing and healing others.",
  },
  {
    question: "Can Reiki be practiced remotely?",
    answer:
      "Yes. Reiki Second Degree introduces distant healing techniques that allow energy to be sent across time and space.",
  },
  {
    question: "What benefits can Reiki provide?",
    answer:
      "Reiki may support relaxation, stress reduction, emotional balance, mental clarity, spiritual growth, and overall well-being.",
  }
];

export default function Faqs() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-black/70">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-black md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-black/60">
            Everything you need to know about our services and process.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-white/10 bg-[#1E1E1E] px-6"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium text-white hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-base leading-relaxed text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}