"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function ParallaxTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const overlay = overlayRef.current;
      if (!section || !overlay) return;

      /* ---------------------------------------
         1️⃣ MOVE TEXT CONTAINER ON Y AXIS
      --------------------------------------- */
      gsap.fromTo(
        overlay,
        { y: 120 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      /* ---------------------------------------
         2️⃣ SUBTLE WORD DRIFT (OPTIONAL)
      --------------------------------------- */
      const split = new SplitText(overlay, {
        type: "words",
      });

      gsap.fromTo(
        split.words,
        { y: 20 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <section ref={sectionRef} className="parallax-section ">
      {/* Parallax Text Overlay */}
      <div ref={overlayRef} className="text-overlay h-1/4 bg-black overflow-hidden absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <div className="overlay-line">
          TESTIMONIALS TESTIMONIALS TESTIMONIALS
        </div>
        <div className="overlay-line offset">
          TESTIMONIALS TESTIMONIALS TESTIMONIAL
        </div>
        <div className="overlay-line">
          TESTIMONIALS TESTIMONIALS TESTIMONIALS
        </div>
                <div className="overlay-line">
          TESTIMONIALS TESTIMONIALS TESTIMONIALS
        </div>
                        <div className="overlay-line">
          TESTIMONIALS TESTIMONIALS TESTIMONIALS
        </div>
                        <div className="overlay-line">
          TESTIMONIALS TESTIMONIALS TESTIMONIALS
        </div>
      </div>

      {/* Content Area with Gradient */}
      <div className="gradient-overlay"></div>

      <style jsx>{`
        .parallax-section {
          position: relative;
          min-height: 100vh;
          background: #1a1a1a;
          overflow: hidden;
        }

        .text-overlay {
          position: absolute;
          top: 15%;
          left: 0;
          right: 0;
          z-index: 1;
          pointer-events: none;
          white-space: nowrap;
        }

        .overlay-line {
          font-family: "Impact", "Arial Black", sans-serif;
          font-size: clamp(1rem, 6vw, 30rem);
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
          text-stroke: 2px rgba(255, 255, 255, 0.15);
          margin: -1rem 0;
          user-select: none;
        }

        .overlay-line.offset {
          padding-left: 5%;
        }

      `}</style>
    </section>
  );
}
