"use client";

import { useEffect, useState } from "react";

export function ChessGrid() {
  const [activeSquares, setActiveSquares] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 1;
      const squares: number[] = [];
      for (let i = 0; i < count; i++) {
        squares.push(Math.floor(Math.random() * 64));
      }
      setActiveSquares(squares);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
      <div className="grid grid-cols-8 w-full h-full">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isDark = (row + col) % 2 === 1;
          const isActive = activeSquares.includes(i);
          return (
            <div
              key={i}
              className={`transition-all duration-1000 ${
                isDark ? "bg-foreground" : "bg-transparent"
              } ${isActive ? "!bg-primary !opacity-40" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
}
