/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/ui/Container";
import { useState } from "react";

interface FAQItem {
  title: string;
  description: any;
  id?: string;
  idText?: string;
}

const faqData: FAQItem[] = [
  {
    title: "Information We Collect",
    description: (
      <>
        We collect information when you use our platform, such as:
        <br />
        <ul className="list-disc list-outside pl-7">
          <li>
            Account Information – Name, email, password, role (Coach or
            Athlete), profile details (sport, position, profile picture).
          </li>
          <li>
            {" "}
            Program Data – Training programs, tasks, uploaded files, videos, and
            progress tracking.
          </li>
          <li>
            Communication Data – Messages between coaches and athletes,
            announcements, feedback.
          </li>
          <li>
            Payment Information – If you purchase or sell programs, payments are
            processed securely through Stripe (we do not store your card
            details).
          </li>
          <li>
            Usage Data – Device type, browser, and activity logs to improve the
            platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    description: (
      <>
        We use your information to:
        <br />
        <ul className="list-disc list-outside pl-7">
          <li>Provide and improve PlayerZone services.</li>
          <li>Connect coaches and athletes through programs and tasks.</li>
          <li>Process payments securely.</li>
          <li>
            Send important updates (task reminders, feedback, announcements).
          </li>
          <li>Ensure security and prevent fraud.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Sharing Your Information",
    description: (
      <>
        We do not sell your personal data. We may share your information only
        with:
        <br />
        <ul className="list-disc list-outside pl-7">
          <li> Coaches & Athletes you interact with.</li>
          <li>
            Service Providers like payment processors (Stripe) and hosting
            providers.
          </li>
          <li>Legal Authorities if required by law. </li>
        </ul>
      </>
    ),
  },
  {
    title: "Your Choices",
    description: (
      <>
        <ul className="list-disc list-outside pl-7">
          <li> You can update your profile anytime.</li>
          <li>You can manage notifications in Notification Settings.</li>
          <li>
            You may request account deletion by contacting our support team.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Security",
    description: (
      <>
        We use industry-standard security measures to protect your data.
        However, no system is 100% secure. Please use a strong password and keep
        it confidential
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    description: (
      <>
        PlayerZone is not intended for children under 13. If we learn a child
        has registered, we will delete the account immediately.
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    description: (
      <>
        We may update this Privacy Policy from time to time. If we make
        significant changes, we will notify you by email or through the
        platform.
      </>
    ),
  },
  {
    title: "Contact Us",
    description: (
      <>
        If you have any questions or concerns about your privacy, please contact
        us:
        <br />
        <br /> 📧 privacy@playerzone.com
        <br />
        📍 Long Beach, California, USA
      </>
    ),
  },
  // {
  //   question: "Who is VTH for?",
  //   answer:
  //     "VTH is for anyone who prioritises their health, or just wants real insight into what’s going on with their blood biomarkers. You don’t need to be an elite athlete, just interested in understanding more about what your blood is saying about your health.",
  // },
  // {
  //   question: "What makes VTH different?",
  //   answer:
  //     "We’ve taken the complexity out of blood testing. No confusing panels, no guesswork. Just a streamlined, high-impact test every 6 months, with AI-driven insights and a dashboard that speaks your language.",
  // },
  // {
  //   question: "Can I use VTH outside of Australia?",
  //   answer:
  //     "Not yet. Right now, VTH is only available to users within Australia. This ensures we can offer fast, secure testing through our national pathology partner and comply with local medical regulations.",
  // },
  // {
  //   question: "What is a biomarker?",
  //   answer: (
  //     <>
  //       <span>
  //         A biomarker is a measurable indicator of what’s happening inside your
  //         body. Think of it like a health signal, something we can track in your
  //         blood to understand how your body is functioning.
  //       </span>
  //       <br />
  //       Common biomarkers include things like cholesterol, Vitamin D, hormones,
  //       or blood sugar. By measuring and monitoring them over time, you can spot
  //       patterns, catch potential issues early, and make smarter decisions about
  //       your health.
  //     </>
  //   ),
  // },

  // {
  //   question: "Can women and men use the same test?",
  //   answer:
  //     "Yes. We’ve designed one test that works for all. It includes universally relevant biomarkers (like HbA1c, Vitamin D, Cholesterol, Cortisol, etc.) while still capturing hormonal markers that matter, including Free Testosterone and TSH.",
  // },
  // {
  //   question: "Where do I go to get my blood taken?",
  //   answer:
  //     "We partner with Sonic Healthcare, so you’ll have access to a wide network of collection centres across Australia. Once you purchase your test, you’ll receive an e-form via text message and simple instructions to get your bloods taken.",
  // },
  // {
  //   question: "How often should I get tested?",
  //   answer: (
  //     <>
  //       We recommend testing every 6 months. It strikes the right balance
  //       between giving your body time to adapt to lifestyle changes and checking
  //       in regularly enough to track meaningful trends. <br /> One test gives
  //       you a snapshot, but consistent, recurring tests help you spot patterns,
  //       measure progress, and make more informed decisions about your training,
  //       nutrition, and recovery. <br /> Think of it like checking your progress
  //       in the gym. The more data points you have, the clearer the picture.
  //     </>
  //   ),
  // },
  // {
  //   question: "How should I prepare for my blood test?",
  //   answer: (
  //     <>
  //       Preparation is simple. We recommend the following for the most accurate
  //       results:
  //       <br />
  //       <br />
  //       <ul className="list-disc list-outside pl-7">
  //         <li>
  //           {" "}
  //           Fast for a minimum of 8 hours and maximum of 12 hours before. Water
  //           only. No food or coffee.
  //         </li>
  //         <li> Stay hydrated the day before and the morning of your test</li>
  //         <li>Avoid intense exercise 24 hours prior</li>
  //         <li>
  //           Aim for a good night’s sleep Try to keep your routine consistent (no
  //           major changes to diet, supplements, or alcohol) in the days leading
  //           up{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           Best practice is to try to get tested at the same time of the day
  //           every time to keep things consistent across the tests
  //         </li>
  //       </ul>
  //       <br /> Once you pay online, you will receive clear instructions from our
  //       pathology partner via text with a digital bar code to take to your
  //       chosen collection centre.
  //     </>
  //   ),
  // },
  // {
  //   question: "How do I access my results?",
  //   answer:
  //     "You’ll get access to your personalised VTH dashboard — where your results are visualised clearly, compared against optimal ranges, and explained in plain English. You’ll also see trends over time with each test and can talk to our AI assistant about your results.",
  // },
];

function PrivacyPolicy() {
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
        <p className="text-xl font-medium text-[#000]">Privacy Policy</p>

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
                  {faq.title}
                </h3>
                <svg
                  className={` transition-transform duration-300 ${
                    openIndex.includes(index) ? "rotate-180" : ""
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
                className={`grid transition-all   duration-300 ease-in-out ${
                  openIndex.includes(index)
                    ? "grid-rows-[1fr] pt-4"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-[#141b34b3] ">
                    {faq.description}
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

export default PrivacyPolicy;
