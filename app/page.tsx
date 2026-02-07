"use client";

import { useRef } from "react";
import Temp from "./components/temp/temp";
import Animation from "./components/textParallexAnimations/Animation";
import Parallax from "./components/Animations/Parallex";
import TextOverlay from "./components/Animations/TextOverlay";
export default function Home() {
  return (
    <section>
      {/* <div> */}
      {/* <Temp /> */}
      {/* <div>
        <Animation />
        <div className="h-screen bg-black">

        </div>
      </div> */}

      <div>
        <Parallax />
        <div className="h-screen bg-black" />
        <TextOverlay />
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

// <main
//   ref={heroRef}
//   onMouseMove={handleMouseMove}
//   className="relative flex h-screen w-screen items-center justify-center bg-black"
// >
//   {/* Grid */}
//   <div className="pointer-events-none absolute inset-0 grid-bg" />

//   {/* Text */}
//   <h1 className="relative z-10 text-white uppercase text-[clamp(4rem,12vw,10rem)] font-semibold tracking-tight">
//     owled
//   </h1>

// </main>
// <div>
//   <Temp />
//   <div>
//     <Temp />
//   </div>
// </div>
