"use client";

import { useRef } from "react";
import Temp from "./components/temp/temp";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroRef.current.style.setProperty("--x", `${x}px`);
    heroRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <main
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-screen items-center justify-center bg-black"
    >
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* Text
      <h1 className="relative z-10 text-white uppercase text-[clamp(4rem,12vw,10rem)] font-semibold tracking-tight">
        owled
      </h1> */}

      <Temp />
    </main>
  );
}
