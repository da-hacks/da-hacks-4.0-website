import { NextRequest } from "next/server";
import { hackathonEndTime, hackathonStartTime } from "@/app/data/date";

type CountdownStatus = "before" | "during" | "after";

function calculateCountdown(startDate: string, targetDate: string) {
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(targetDate).getTime();
  const now = Date.now();

  let status: CountdownStatus;
  let diff: number;

  if (now < startTime) {
    status = "before";
    diff = startTime - now;
  } else if (now >= startTime && now < endTime) {
    status = "during";
    diff = endTime - now;
  } else {
    status = "after";
    return { days: 0, hours: 0, minutes: 0, seconds: 0, status };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, status };
}

function formatNumber(num: number): string {
  return num.toString().padStart(2, "0");
}

function getStatusMessage(status: CountdownStatus, days: number, hours: number): string {
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = parseInt(searchParams.get("width") || "800");
  const height = parseInt(searchParams.get("height") || "300");

  const { days, hours, minutes, seconds, status } = calculateCountdown(
    hackathonStartTime,
    hackathonEndTime
  );

  const statusMessage = getStatusMessage(status, days, hours);

  // Generate SVG with embedded styles similar to the component
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap');
      .countdown-text {
        font-family: 'Press Start 2P', monospace;
        fill: white;
      }
      .countdown-label {
        font-family: 'Press Start 2P', monospace;
        fill: white;
      }
      .status-text {
        font-family: 'Press Start 2P', monospace;
        fill: white;
      }
    </style>
  </defs>
  
  <!-- Background with rounded corners -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="40" ry="40" fill="rgba(99, 102, 241, 0.8)"/>
  
  <!-- Countdown Display -->
  <g transform="translate(${width / 2}, ${height / 2 - 40})">
    <!-- Days -->
    <g transform="translate(-300, 0)">
      <text x="0" y="0" class="countdown-text" font-size="48" text-anchor="middle">${formatNumber(days)}</text>
      <text x="0" y="35" class="countdown-label" font-size="14" text-anchor="middle">days</text>
    </g>
    
    <!-- Colon -->
    <text x="-200" y="0" class="countdown-text" font-size="48" text-anchor="middle">:</text>
    
    <!-- Hours -->
    <g transform="translate(-100, 0)">
      <text x="0" y="0" class="countdown-text" font-size="48" text-anchor="middle">${formatNumber(hours)}</text>
      <text x="0" y="35" class="countdown-label" font-size="14" text-anchor="middle">hours</text>
    </g>
    
    <!-- Colon -->
    <text x="0" y="0" class="countdown-text" font-size="48" text-anchor="middle">:</text>
    
    <!-- Minutes -->
    <g transform="translate(100, 0)">
      <text x="0" y="0" class="countdown-text" font-size="48" text-anchor="middle">${formatNumber(minutes)}</text>
      <text x="0" y="35" class="countdown-label" font-size="14" text-anchor="middle">minutes</text>
    </g>
    
    <!-- Colon -->
    <text x="200" y="0" class="countdown-text" font-size="48" text-anchor="middle">:</text>
    
    <!-- Seconds -->
    <g transform="translate(300, 0)">
      <text x="0" y="0" class="countdown-text" font-size="48" text-anchor="middle">${formatNumber(seconds)}</text>
      <text x="0" y="35" class="countdown-label" font-size="14" text-anchor="middle">seconds</text>
    </g>
  </g>
  
  <!-- Status Message -->
  <text x="${width / 2}" y="${height - 40}" class="status-text" font-size="16" text-anchor="middle">${statusMessage}</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}

