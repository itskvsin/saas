"use client";

/*
====================================================
PARALLAX SHOWCASE FILE (WITH IMAGES)
Tech: Next.js + GSAP + ScrollTrigger

IMAGES USED:
- Background parallax images
- Foreground floating images
- Multi-layer depth effect
====================================================
*/

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         1️⃣ IMAGE BACcyKGROUND PARALLAX
      ========================================= */
      gsap.to(".bg-parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* =========================================
         2️⃣ TEXT PARALLAX
      ========================================= */
      gsap.fromTo(
        ".text-parallax",
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: ".text-parallax",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* =========================================
         3️⃣ IMAGE + TEXT LAYERED PARALLAX
      ========================================= */
      gsap.to(".layer-bg", {
        yPercent: 10,
        scrollTrigger: {
          trigger: ".layered-section",
          scrub: true,
        },
      });

      gsap.to(".layer-mid", {
        yPercent: 25,
        scrollTrigger: {
          trigger: ".layered-section",
          scrub: true,
        },
      });

      gsap.to(".layer-front", {
        yPercent: 40,
        scrollTrigger: {
          trigger: ".layered-section",
          scrub: true,
        },
      });

      /* =========================================
         4️⃣ FADE + IMAGE PARALLAX
      ========================================= */
      gsap.fromTo(
        ".fade-parallax",
        { y: 60, opacity: 0 },
        {
          y: -20,
          opacity: 1,
          scrollTrigger: {
            trigger: ".fade-parallax",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      /* =========================================
         5️⃣ ADVANCED PINNED IMAGE PARALLAX
      ========================================= */
      ScrollTrigger.create({
        trigger: ".pinned-section",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      gsap.fromTo(
        ".pinned-text",
        { y: 120 },
        {
          y: -500,
          ease: "none",
          scrollTrigger: {
            trigger: ".pinned-imagw",
            scrub: true,
          },
        }
      );

      gsap.to(".pinned-image", {
        height: "100vh",
        width: "100vw",
        scrollTrigger: {
          trigger: ".pinned-section",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="space-y-40">

      {/* ==========================================
          SECTION 1: IMAGE BACKGROUND PARALLAX
      ========================================== */}
      <section className="section-image relative h-screen overflow-hidden">
        <div
          className="bg-parallax absolute inset-0 bg-fill bg-center"
          style={{ backgroundImage: "url('/images/demo.jpg')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">
            Image Parallax
          </h1>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: TEXT PARALLAX
      ========================================== */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-parallax text-6xl font-bold">
          Text Moves Differently
        </h1>
      </section>

      {/* ==========================================
          SECTION 3: IMAGE + TEXT LAYERS
      ========================================== */}
      <section className="layered-section relative h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <img
          src="/images/demo.jpg"
          className="layer-bg absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* Mid layer */}
        <img
          src="/images/person.png"
          className="layer-mid absolute bottom-0 left-1/2 -translate-x-1/2 w-80"
          alt=""
        />

        {/* Front content */}
        <h1 className="layer-front relative text-7xl font-bold text-white">
          Layered Depth
        </h1>
      </section>

      {/* ==========================================
          SECTION 4: FADE + IMAGE
      ========================================== */}
      <section className="h-screen flex flex-col items-center justify-center gap-6">
        <img
          src="/images/city.jpg"
          className="w-96 rounded-xl shadow-xl"
          alt=""
        />
        <h2 className="fade-parallax text-5xl font-semibold">
          Smooth Image Entrance
        </h2>
      </section>

      {/* ==========================================
          SECTION 5: PINNED IMAGE STORY
      ========================================== */}
      <section className="pinned-section h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
        <img
          src="/images/demo.jpg"
          className="pinned-image w-96 rounded-xl"
          alt=""
        />
        <h1 className="pinned-text text-6xl font-bold">
          Pinned Storytelling
        </h1>
      </section>

    </main>
  );
}
