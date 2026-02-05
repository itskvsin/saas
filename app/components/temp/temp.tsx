"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 120,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    gsap.to(".layer-back", {
      yPercent: 10,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
      },
    });

    gsap.to(".layer-mid", {
      yPercent: 25,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
      },
    });

    gsap.to(".layer-front", {
      yPercent: 40,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/image.jpg')] bg-cover bg-center"
      />
      <div className="layer-back">
        <div className="layer-mid">
          <div className="layer-front absolute inset-0 z-99 bg-[url('https://unsplash.com/photos/car-driving-on-a-wet-road-at-night-fSBYj0VMNd4')] bg-cover bg-center">
          </div>
        </div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-6xl text-white font-bold">Parallax Magic</h1>
      </div>
    </section>
  );
}
