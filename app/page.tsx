"use client";

import { ChevronDown } from "lucide-react";
import { Geist, Press_Start_2P } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";

import { useEffect, useState } from "react";
import CardContainer from "./components/card-container";
import Supporters from "./components/supporters";
const superMario = localFont({ src: "../public/supermario.ttf" });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const geist = Geist({ weight: "400", subsets: ["latin"] });

import Countdown from "./components/countdown";
import { hackathonEndTime, hackathonStartTime } from "./data/date";

export const dynamic = "force-dynamic";

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

function DiscordButton() {
  return (
    <a
      href="https://discord.gg/46fcBdqTB8"
      className="inline-block px-4 py-2 text-xs sm:text-sm border-2 border-[#5865F2] text-white bg-[#5865F2] outline-none hover:bg-white hover:text-[#5865F2] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Discord
    </a>
  );
}

// function HackersGuideButton() {
//   return (
//     <a
//       href="/hackers-guide"
//       className="inline-block px-4 py-2 text-xs sm:text-sm border-2 border-[#10B981] text-white bg-[#10B981] outline-none hover:bg-white hover:text-[#10B981] transition-colors"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Hackers&rsquo; Guide
//     </a>
//   );
// }

function Intro() {
  return (
    <div className="w-full">
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
            <span className="text-[#F08CC1]">s</span>{" "}
            <span className="text-[#4272F0]">4</span>
            <span className="text-[#988AFF]">.</span>
            <span className="text-[#D05CB6]">0</span>
          </h1>
          <Countdown targetDate={hackathonEndTime} startDate={hackathonStartTime} className="w-full"/>

          <div className="py-2 sm:py-4 text-base sm:text-2xl text-gray-800 text-shadow">
            Nov 21&ndash;22, 2025
          </div>

          <div className="text-gray-700 text-sm sm:text-lg mb-3 text-shadow">
            Join Cupertino&rsquo;s biggest collegiate hackathon!
          </div>

          <div className="pt-8 flex flex-col items-center justify-center gap-4">
            <ApplyButton />
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <DiscordButton />
              {/* <HackersGuideButton /> TODO: Add this back in until we deploy the guide */}
            </div>
          </div>
        </div>

        {/* Grass */}
        <div>
          <Image
            src="https://raw.githubusercontent.com/da-hacks/da-hacks-4.0-website/refs/heads/main/public/touchgrass.png"
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
      answer: (
        <>
          <p className="mb-3">
            A hackathon is an event where people come together over a short
            period of time, to collaborate intensively on software or hardware
            projects.
          </p>
          <p>
            Participants form teams, brainstorm ideas, and build prototypes or
            solutions from scratch. No prior experience is required. Just bring
            your enthusiasm and willingness to learn!
          </p>
        </>
      ),
    },
    {
      question: "When and where?",
      answer: (
        <>
          <p>Nov 21 - 22, 8 AM - 8:30 PM (both days)</p>
          <p className="mb-3">Campus Center - Conference Room A & B</p>
          <p>A schedule will be posted before the event.</p>
        </>
      ),
    },
    /*
    TODO: Add this back in when we deploy the guide
    {
      question: "What should I bring?",
      answer: <>Check out our Hacker's Guide!</>,
    },
    */
    {
      question: "How do I join?",
      answer: (
        <>
          Fill out the{" "}
          <a
            href="https://luma.com/4ugdc5mt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            registration form
          </a>
          !
        </>
      ),
    },
    {
      question: "Are there going to be prizes?",
      answer: (
        <>
          Yes! Top 3 will get prizes, and free merch will be given out to
          attendees.
        </>
      ),
    },
    {
      question: "What if I don't have a team?",
      answer: (
        <>
          You can find a team in our{" "}
          <a
            href="https://discord.gg/46fcBdqTB8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Discord
          </a>
          , or apply individually.
        </>
      ),
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
            <span className="text-sm md:text-lg">{q.question}</span>
            {/* The arrow icon will rotate smoothly based on the open/closed state */}
            <span
              className={`transform transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <ChevronDown />
            </span>
          </button>

          {/* This div contains the answer. It expands and collapses smoothly. */}
          <div
            className={`overflow-hidden transition-all ease-in-out ${
              geist.className
            } ${openIndex === i ? "max-h-screen" : "max-h-0"}`}
          >
            <div className="p-5 pt-0 text-gray-700 md:text-lg">{q.answer}</div>
          </div>
        </div>
      ))}
    </CardContainer>
  );
}

function Footer() {
  return (
    <div className="mb-15 rounded-2xl p-7">
      <h1
        className={`${superMario.className} text-center text-4xl sm:text-7xl tracking-tight pb-9 outlined-text text-shadow-lg`}
      >
        <span className="text-[#F08CC1]">I</span>
        <span className="text-[#E153E7]">t</span>
        <span className="text-[#4272F0]">&rsquo;</span>
        <span className="text-[#F08CC1]">s</span>{" "}
        <span className="text-[#E153E7]">t</span>
        <span className="text-[#4272F0]">i</span>
        <span className="text-[#F08CC1]">m</span>
        <span className="text-[#E153E7]">e</span>{" "}
        <span className="text-[#4272F0]">t</span>
        <span className="text-[#F08CC1]">o</span>{" "}
        <span className="text-[#E153E7]">h</span>
        <span className="text-[#4272F0]">a</span>
        <span className="text-[#F08CC1]">c</span>
        <span className="text-[#E153E7]">k</span>
        <span className="text-[#4272F0]">.</span>
      </h1>
      <div className="text-center">
        <ApplyButton />
      </div>
    </div>
  );
}

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${pressStart2P.className} bg-[#3DB0E7] w-full h-full flex flex-col relative`}
    >
      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full bg-[url('https://raw.githubusercontent.com/da-hacks/da-hacks-4.0-website/refs/heads/main/public/pixelthingy.png')] bg-center bg-cover"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      />

      <div className="z-10 flex flex-col items-center gap-y-10">
        <Intro />
        <Video />
        <Supporters />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
