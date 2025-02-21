import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does LawLinkLK work?",
    answer:
      "LawLinkLK is a platform that connects clients with legal professionals. Clients can search for lawyers based on their needs, schedule consultations, and communicate directly through our secure platform. Lawyers can manage their practice, connect with clients, and grow their business.",
  },
  {
    question: "How do I choose the right lawyer?",
    answer:
      "You can search for lawyers based on their expertise, location, and client reviews. Each lawyer's profile includes their qualifications, experience, and areas of practice. You can also schedule initial consultations to discuss your case before making a decision.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes, we take security seriously. All communications and personal information are encrypted and protected according to industry standards. We comply with all relevant data protection regulations to ensure your privacy.",
  },
  {
    question: "What are the fees for using LawLinkLK?",
    answer:
      "Basic registration is free for both clients and lawyers. Lawyers may choose premium features for enhanced visibility and practice management tools. Consultation fees are set by individual lawyers and are clearly displayed on their profiles.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our platform</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0066cc]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#0066cc]" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

