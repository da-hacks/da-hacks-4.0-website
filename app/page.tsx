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
import Organizers from "./components/organizers";
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
      Apply as Hacker
    </a>
  );
}

function MentorApplyButton() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSevOX7VQvEFsGbDV9aRQSkKj4S7bk_Yqj3HdAc84PTgqO_nbA/viewform"
      className="inline-block px-6 py-3 text-sm sm:text-base border-2 border-white text-white outline-none backdrop-blur-xl hover:bg-white hover:text-black transition-colors shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply as Mentor
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
          <Countdown
            targetDate={hackathonEndTime}
            startDate={hackathonStartTime}
            className="w-full"
          />

          <div className="py-2 sm:py-4 text-base sm:text-2xl text-gray-800 text-shadow">
            Nov 21&ndash;22, 2025
          </div>

          <div className="text-gray-700 text-sm sm:text-lg mb-3 text-shadow">
            Join Cupertino&rsquo;s biggest collegiate hackathon!
          </div>

          <div className="pt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ApplyButton />
              <MentorApplyButton />
            </div>

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

function Video({ showEasterEgg }: { showEasterEgg: boolean }) {
  return (
    <CardContainer showEasterEgg={showEasterEgg}>
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

function FAQ({
  setShowEasterEgg,
  showEasterEgg,
}: {
  setShowEasterEgg: (show: React.SetStateAction<boolean>) => void;
  showEasterEgg: boolean;
}) {
  const handleClickEasterEgg = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowEasterEgg((prev: boolean) => !prev);
  };

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
    {
      question: "What is the best part of hacking?",
      answer: (
        <>
          The friends we make along the way! Oh and also,{" "}
          <a
            href="#"
            className="text-blue-800 underline"
            onClick={(e) => handleClickEasterEgg(e)}
          >
            doing this
          </a>
          .
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
    <CardContainer showEasterEgg={showEasterEgg}>
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

function CTA() {
  return (
    <div className="rounded-2xl py-15">
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

export const resourceLinks = [
  {
    title: "Devpost",
    links: [
      { name: "DAHACKS V4.0", href: "https://dahacks4.devpost.com" }
    ]
  },
  {
    title: "Previous Websites",
    links: [
      { name: "DAHACKS V2.5", href: "https://da-hacks2-5.vercel.app/" },
      { name: "DAHACKS V3.0 Interest", href: "https://da-hacks-spring2024.vercel.app/" },
      { name: "DAHACKS V3.0", href: "https://da-hacks-github-io.vercel.app/" },
      { name: "DAHACKS V3.5", href: "https://hackathon-horizon-website.vercel.app/" }
    ]
  },
  {
    title: "News & Press",
    links: [
      { name: "LA Voz - Calculator Design", href: "https://lavozdeanza.com/features/2023/11/03/electricity-calculator-design-shocks-de-anza-hackathon/" },
      { name: "LA Voz - Spring Hackathon", href: "https://lavozdeanza.com/features/2024/06/07/de-anza-hackathon-returns-for-spring-and-comes-with-a-twist/" },
      { name: "LA Voz - Student Hackers", href: "https://lavozdeanza.com/video/2024/10/31/student-hackers-compete-at-da-hacks-3-0-hack-a-thon-for-over-7500-in-prizes/" }
    ]
  },
];

const Footer = () => {
  return (
    <footer
      className="py-15 bg-sky-300 w-full"
    >
      <div className="px-4 sm:px-6 lg:px-20">
        {/* Resource Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resourceLinks.map((group, index) => {
            return (
              <div key={index} className="mb-6">
                <h3 className={`text-xl font-cyber font-semibold mb-4 text-gray-800`}>
                  {group.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-700 hover:text-gray-900 text-sm transition-colors truncate`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-12 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hackathon Info */}
          <div className="text-center md:text-left">
            <h3 className={`${superMario.className} text-5xl font-bold mb-4 text-gray-800`}>
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
            </h3>
            <p className="mb-4 text-gray-800">
              Nov 21 - 22, 2025
              <br />
              Campus Center - Conference Room A & B
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/deanzahacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E153E7] hover:text-[#F08CC1] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://discord.gg/46fcBdqTB8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4272F0] hover:text-[#988AFF] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h3>
            <a
              href="mailto:logistics@deanzahacks.com"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              logistics@deanzahacks.com
            </a>
            <div className="mt-10">
              <a
                href="https://luma.com/4ugdc5mt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-sm sm:text-base border-2 border-white text-white outline-none backdrop-blur-xl hover:bg-white hover:text-black transition-colors shadow-lg"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} DAHacks. All rights
            reserved.{" "}
            <a
              href="https://github.com/da-hacks/legal/blob/main/privacy.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4272F0] hover:text-[#988AFF] transition-colors"
            >
              Privacy Policy
            </a>{" "}
            &bull;{" "}
            <a
              href="https://github.com/da-hacks/legal/blob/main/code_of_conduct.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4272F0] hover:text-[#988AFF] transition-colors"
            >
              Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${pressStart2P.className} ${showEasterEgg ? "bg-black" : "bg-[#3DB0E7]"} w-full h-full flex flex-col relative`}
    >
      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={
          !showEasterEgg
            ? {
                transform: `translateY(${scrollY * 0.3}px)`,
                willChange: "transform",
              }
            : {}
        }
      >
        {showEasterEgg ? (
          <>
            {/* audio only */}
            <iframe
              className="hidden"
              src="https://www.youtube.com/embed/9NcPvmk4vfo?autoplay=1"
              title="Rickroll"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <Image
              src="/8bitrick.gif"
              alt="Rickroll"
              fill
              className="object-cover opacity-0 animate-fade-in"
              priority
              unoptimized
            />
            {/* need to add unoptimized because it's a gif */}
          </>
        ) : (
          <Image
            src="https://raw.githubusercontent.com/da-hacks/da-hacks-4.0-website/refs/heads/main/public/pixelthingy.png"
            alt="Parallax background"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="z-10 flex flex-col items-center gap-y-10">
        <Intro />
        <Video showEasterEgg={showEasterEgg} />
        <Supporters />
        <FAQ
          setShowEasterEgg={setShowEasterEgg}
          showEasterEgg={showEasterEgg}
        />
        <Organizers />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
