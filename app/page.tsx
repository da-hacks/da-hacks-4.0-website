"use client";

import { ChevronDown } from "lucide-react";
import { Press_Start_2P } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Script from "next/script";

import { useState } from "react";

const superMario = localFont({ src: "../public/supermario.ttf" });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

function CardContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col justify-between bg-sky-300 max-w-6xl w-full rounded-2xl overflow-hidden mx-4 sm:mx-6 p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

function ApplyButton() {
  return (
    <a
      href="https://luma.com/4ugdc5mt"
      className="inline-block px-6 py-3 text-sm sm:text-base border-2 border-white text-white outline-none backdrop-blur-xl hover:bg-white hover:text-black transition-colors shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply Here
    </a>
  );
}

function Intro() {
  return (
    <div className="w-full bg-[url('/pixelthingy.png')] bg-cover bg-center">
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-35 pb-6 sm:pb-10 flex flex-col items-center justify-between">
        {/* Text + button */}
        <div className="text-center">
          <h1
            className={`${superMario.className} text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 tracking-tight outlined-text text-shadow-lg`}
          >
            <span className="text-[#F08CC1]">D</span>
            <span className="text-[#E153E7]">A</span>
            <span className="text-[#4272F0]">H</span>
            <span className="text-[#F08CC1]">a</span>
            <span className="text-[#E153E7]">c</span>
            <span className="text-[#4272F0]">k</span>
            <span className="text-[#F08CC1]">s</span>
            {" "}
            <span className="text-[#4272F0]">4</span>
            <span className="text-[#988AFF]">.</span>
            <span className="text-[#D05CB6]">0</span>
          </h1>

          <div className="py-2 sm:py-4 text-base sm:text-2xl text-gray-800 text-shadow">
            Nov 21&ndash;22, 2025
          </div>

          <div className="text-gray-700 text-sm sm:text-lg mb-3 text-shadow">
            Join Cupertino&rsquo;s biggest collegiate hackathon!
          </div>

          <div className="pt-8">
            <ApplyButton />
          </div>
        </div>

        {/* Grass */}
        <div>
          <Image
            src="/touchgrass.png"
            alt="Grass (you should probably touch it)"
            className="w-full"
            width={6760}
            height={3309}
            priority
          />
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <CardContainer>
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/4TsUuQgJFy0?si=denEmUd6HFMdvoAu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </CardContainer>
  );
}

function FAQ() {
  const questions = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is an event where people come together to create something new and innovative.",
    },
    {
      question: "What is the best part of hacking?",
      answer: "The friends we make along the way. :)",
    },
    {
      question: "Why should I attend future DAHacks events?",
      answer: "For the learning, the community, and the amazing projects!",
    },
  ];

  // State to track the index of the currently open question. 'null' means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // This function is called when a user clicks on a question header.
  const handleToggle = (index: number) => {
    // If the clicked question is already open, close it by setting state to null.
    // Otherwise, open it by setting state to its index.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <CardContainer>
      <div className="text-center text-3xl py-6 text-gray-900">FAQ</div>

      {questions.map((q, i) => (
        <div key={i} className="border-b border-blue-400 last:border-b-0">
          {/* This button acts as the clickable header for the question */}
          <button
            onClick={() => handleToggle(i)}
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none cursor-pointer text-gray-800"
          >
            <span className="md:text-lg">{q.question}</span>
            {/* The arrow icon will rotate smoothly based on the open/closed state */}
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <ChevronDown />
            </span>
          </button>

          {/* This div contains the answer. It expands and collapses smoothly. */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-5 pt-0 text-gray-700 text-sm">{q.answer}</div>
          </div>
        </div>
      ))}
    </CardContainer>
  );
}

function Footer() {
  return (
    <div className="mb-15 rounded-2xl p-7">
      <h1 className="text-center text-2xl md:text-4xl tracking-tight pb-6 text-gray-900">It&rsquo;s time to hack.</h1>
      <div className="text-center"><ApplyButton /></div>
    </div>
  );
}

export default function Page() {
  return (
    <div
      className={`${pressStart2P.className} bg-[#3DB0E7] w-full h-full flex flex-col items-center gap-y-10`}
    >
      <Intro />
      <Video />
      <FAQ />

      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
      />
      <Footer />
    </div>
  );
}
