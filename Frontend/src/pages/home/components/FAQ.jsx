"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does LawLinkLK work?",
      answer:
        "LawLinkLK connects clients with legal professionals in Sri Lanka. Clients can search for lawyers based on their needs, while lawyers can create profiles and connect with potential clients. Our platform facilitates secure communication and appointment scheduling.",
    },
    {
      question: "How are lawyers verified on the platform?",
      answer:
        "All lawyers on LawLinkLK go through a thorough verification process. We check their credentials, bar council registration, and professional background to ensure they are qualified to practice law in Sri Lanka.",
    },
    {
      question: "What are the fees for using LawLinkLK?",
      answer:
        "Basic registration is free for both clients and lawyers. Lawyers can choose premium features for enhanced visibility and additional tools. Clients only pay for the legal services they receive directly from the lawyers.",
    },
    {
      question: "Is my information secure on LawLinkLK?",
      answer:
        "Yes, we take security seriously. All communications are encrypted, and we follow strict data protection protocols to ensure your personal and legal information remains confidential and secure.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using LawLinkLK for both clients and legal professionals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#0066cc]" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

