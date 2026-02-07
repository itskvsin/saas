"use client";

import { useRef } from "react";
import Temp from "./components/temp/temp";
import Animation from "./components/textParallexAnimations/Animation";

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
    <section>
      <div>
        <Animation />
      </div>
      <div>
        <Temp />
      </div>
      <div className="bg-black h-screen w-screen">
        {/* <Temp /> */}
      </div>
    </section>
  );
}
//  <main
//         ref={heroRef}
//         onMouseMove={handleMouseMove}
//         className="relative flex h-screen w-screen items-center justify-center bg-black"
//       >
//         <div className="pointer-events-none absolute inset-0 grid-bg" />

//         <h1 className="relative z-10 text-white uppercase text-[clamp(4rem,12vw,10rem)] font-semibold tracking-tight">
//           owled
//         </h1>
//       </main>
