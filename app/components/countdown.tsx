"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
  startDate: string;
  className?: string;
}

type CountdownStatus = "before" | "during" | "after";

function useCountdown(startDate: string, targetDate: string) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState<CountdownStatus>("before");

  useEffect(() => {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(targetDate).getTime();

    function updateCountdown() {
      const now = Date.now();

      let diff: number;
      if (now < startTime) {
        setStatus("before");
        diff = startTime - now;
      } else if (now >= startTime && now < endTime) {
        setStatus("during");
        diff = endTime - now;
      } else {
        setStatus("after");
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [startDate, targetDate]);

  return { ...time, status };
}

function formatNumber(num: number) {
  return num.toString().padStart(2, "0");
}

function getStatusMessage(status: CountdownStatus, days: number, hours: number) {
  switch (status) {
    case "before":
      return `HACKING STARTS IN ${days > 0 ? `${days} DAYS, ` : ""}${hours} HOURS...`;
    case "during":
      return `HACKING ENDS IN ${days > 0 ? `${days} DAYS, ` : ""}${hours} HOURS...`;
    case "after":
      return "HACKATHON HAS ENDED!";
    default:
      return `HACKING STARTS IN ${days > 0 ? `${days} DAYS, ` : ""}${hours} HOURS...`;
  }
}

export default function Countdown({ targetDate, startDate, className = "" }: CountdownProps) {
  const [loading, setLoading] = useState(true);
  const { days, hours, minutes, seconds, status } = useCountdown(startDate, targetDate);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-4 md:p-8 text-center animate-pulse`}>
        <div className="flex justify-center items-center space-x-3 md:space-x-8">
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">days</div>
          </div>
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">hours</div>
          </div>
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">minutes</div>
          </div>
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">seconds</div>
          </div>
        </div>
        <div className="mt-6 text-xl md:text-3xl">hacking starting in</div>
      </div>
    );
  }

  return (
    <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-4 md:p-8 text-center`}>
      <div className="flex justify-center items-center space-x-3 md:space-x-8">
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(days)}</div>
          <div className="text-base md:text-2xl">days</div>
        </div>
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(hours)}</div>
          <div className="text-base md:text-2xl">hours</div>
        </div>
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(minutes)}</div>
          <div className="text-base md:text-2xl">minutes</div>
        </div>
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(seconds)}</div>
          <div className="text-base md:text-2xl">seconds</div>
        </div>
      </div>
      <div className="mt-6 text-xl md:text-3xl">{getStatusMessage(status, days, hours)}</div>
    </div>
  );
}