import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide web design, development, branding, SEO, and digital marketing solutions tailored to your business goals.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity, but most websites are completed within 2–6 weeks.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide maintenance, updates, and technical support packages for all our clients.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can modernize your current website while improving performance, user experience, and SEO.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or book a consultation. We'll discuss your goals and create a custom plan.",
  },
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