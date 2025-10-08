import { supporters } from "../data/supporters";
import CardContainer from "./card-container";
import Image from "next/image";
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-16 sm:h-20 w-full max-w-[160px] rounded-md bg-sky-400 ring-1 ring-black/10">
    <span className="text-sm text-center font-mono tracking-wide text-gray-700">
      {name}
    </span>
  </div>
);

const Supporters = () => {
  return (
    <CardContainer>
      <div className="text-center mb-10">
        <h2 className="text-xl tracking-widest uppercase text-gray-900 mb-4">
          OUR SUPPORTERS
        </h2>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto font-mono">
          De Anza Hacks 4.0 is made possible by these amazing organizations
        </p>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-10 items-center justify-center">
        {supporters.map((supporter, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-16 sm:h-20 w-full max-w-[160px] rounded-md bg-sky-400 ring-1 ring-black/10"
          >
            {supporter.logo ? (
              <Image
                src={supporter.logo}
                alt={supporter.name}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain p-2"
                width={160}
                height={160}
              />
            ) : (
              <PlaceholderLogo name={supporter.name} />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-base font-semibold mb-6 text-gray-900">
          Interested in supporting?
        </h3>
        <a
          href={`mailto:logistics@deanzahacks.com?subject=Supporter Inquiry`}
          className="inline-block px-6 py-3 text-sm sm:text-base border-2 border-white text-white outline-none backdrop-blur-xl hover:bg-white hover:text-black transition-colors shadow-lg"
        >
          BECOME A SUPPORTER
        </a>
      </div>
    </CardContainer>
  );
};

export default Supporters;
