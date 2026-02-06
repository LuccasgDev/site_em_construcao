"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calculateTimeLeft(): TimeLeft {
  const targetDate = new Date("2025-04-01T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { label: "Dias", value: timeLeft.dias },
    { label: "Horas", value: timeLeft.horas },
    { label: "Min", value: timeLeft.minutos },
    { label: "Seg", value: timeLeft.segundos },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {blocks.map((block, index) => (
        <div key={block.label} className="flex items-center gap-3 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-card border border-border flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground tabular-nums">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-x-0 top-1/2 h-px bg-border/50" />
            </div>
            <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {block.label}
            </span>
          </div>
          {index < blocks.length - 1 && (
            <span className="text-xl md:text-2xl text-primary font-bold mb-5">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
