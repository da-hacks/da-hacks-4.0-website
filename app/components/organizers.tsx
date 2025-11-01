"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  organizersByTeam,
  teamLabels,
  type OrganizerRole,
} from "../data/organizers";
import CardContainer from "./card-container";

type OrganizerCardProps = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const OrganizerCard = ({ name, role, image, linkedin }: OrganizerCardProps) => (
  <Link
    href={linkedin ?? "#"}
    target="_blank"
    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3"
  >
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
      {image ? (
        <Image src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm font-bold text-gray-600">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      )}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-white text-base font-semibold truncate">
        {name}
      </span>
      <span className="text-white/80 text-sm truncate">{role}</span>
    </div>
  </Link>
);

const Organizers = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const teams = Object.keys(organizersByTeam) as OrganizerRole[];

  const handleTabClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      if (selectedTab === index) {
        setSelectedTab(null);
        autoplayRef.current.play();
      } else {
        setSelectedTab(index);
        autoplayRef.current.stop();

        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, selectedTab]
  );

  useEffect(() => {
    if (!emblaApi) return;

    if (selectedTab !== null) {
      emblaApi.reInit({ loop: true, watchDrag: false }, [autoplayRef.current]);
      autoplayRef.current.stop();
    } else {
      emblaApi.reInit({ loop: true, watchDrag: true }, [autoplayRef.current]);
      autoplayRef.current.play();
    }
  }, [emblaApi, selectedTab]);

  return (
    <CardContainer>
      <div className="text-center mb-8">
        <h2 className="text-3xl text-gray-900 mb-2">Organizers</h2>
        <p className="text-sm text-gray-700 font-mono">
          The people making DA Hacks 4.0 happen
        </p>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {teams.map((team) => (
            <div key={team} className="embla__slide">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {teamLabels[team]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl ">
                  {organizersByTeam[team].map((organizer, idx) => (
                    <OrganizerCard
                      key={`${organizer.name}-${idx}`}
                      name={organizer.name}
                      role={organizer.role}
                      image={organizer.image}
                      linkedin={organizer.linkedin}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {teams.map((team, index) => (
          <button
            key={team}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 text-xs sm:text-sm border-2 outline-none transition-colors ${
              selectedTab === index
                ? "bg-white text-black border-white"
                : "border-white text-white backdrop-blur-xl"
            }`}
          >
            {teamLabels[team]}
          </button>
        ))}
      </div>
    </CardContainer>
  );
};

export default Organizers;
