/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/ui/Container";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  id?: string;
  idText?: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    idText: "Q1: How do I reset my password?",
    question: "Q1: How do I reset my password?",
    answer:
      `Go to the login page, click "Forgot Password", and follow the reset link sent to your email.`,
  },
  {
    id: "2",
    idText: "Q2: Where can I see my upcoming payments?",
    question: "Q2: Where can I see my upcoming payments?",
    answer:
      "Navigate to the Payments section in your dashboard. You'll see schedules, past transactions, and pending payments.",
  },
  {
    id: "3",
    idText: "Q3: My documents were rejected. What should I do?",
    question: "Q3: My documents were rejected. What should I do?",
    answer:
      "Check the notification details for reasons (e.g., blurry ID, missing info). Re-upload corrected documents.",
  },
  {
    id: "4",
    idText: "Q3: My documents were rejected. What should I do?",
    question: "Q3: My documents were rejected. What should I do?",
    answer:
      "Check the notification details for reasons (e.g., blurry ID, missing info). Re-upload corrected documents.",

  },
  {
    id: "7",
    idText: "Q4: Can I change my payment method?",
    question: "Q4: Can I change my payment method?",
    answer:
      "Yes. Go to Payments > Settings and update your bank account or wallet details.",

  },
  {
    id: "8",
    idText: "Q5: Who do I contact for urgent payment issues?",
    question: "Q5: Who do I contact for urgent payment issues?",
    answer:
      "Use the Contact Support button below or email support@payzone.com for faster assistance.",
  },
  {
    id: "9",
    idText: "Q6: Who do I contact for urgent payment issues?",
    question: "Q6: Who do I contact for urgent payment issues?",
    answer:
      "Use the Contact Support button below or email support@payzone.com for faster assistance.",
  },
  {
    id: "10",
    idText: "Q7: Who do I contact for urgent payment issues?",
    question: "Q7: Who do I contact for urgent payment issues?",
    answer:
      "Use the Contact Support button below or email support@payzone.com for faster assistance.",
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex.includes(index)
        ? openIndex.filter((i) => i !== index)
        : [...openIndex, index]
    );
  };

  return (
    <Container>
      <div
        style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
        className="w-full space-y-5 min-h-[70vh] backdrop-blur-3xl p-8 border border-white"
      >
        <p className="text-xl font-medium text-[#000]">FAQ</p>

        <div className="space-y-4 ">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full rounded-xl bg-white px-6 py-5 text-left  hover:bg-opacity-90"
                aria-expanded={openIndex.includes(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="pr-4 text-base lg:font-semibold text-dark ">
                    {faq.idText}
                  </h3>
                  <svg
                    className={` transition-transform duration-300 ${openIndex.includes(index) ? "rotate-180" : ""
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M0.750001 6.74995C0.750001 6.74995 5.16893 0.750013 6.75005 0.749999C8.33116 0.749986 12.75 6.75 12.75 6.75"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={`grid transition-all   duration-300 ease-in-out ${openIndex.includes(index)
                    ? "grid-rows-[1fr] pt-4"
                    : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-[#141b34b3] ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FAQ;
