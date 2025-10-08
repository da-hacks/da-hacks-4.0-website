const CardContainer = ({
  children,
  className,
  showEasterEgg,
}: {
  children: React.ReactNode;
  className?: string;
  showEasterEgg?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-between ${showEasterEgg ? "animate-disco" : "bg-sky-300"} max-w-6xl w-full rounded-2xl overflow-hidden mx-4 sm:mx-6 p-4 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
