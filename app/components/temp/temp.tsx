"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

import "./temp.css";

export default function Temp() {
  useEffect(() => {
    // ✅ Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // ✅ Create smoother FIRST
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
    });

    // ✅ Heading animation
    gsap.set(".heading", {
      yPercent: -150,
      opacity: 1,
    });

    // ✅ Split text stagger
    const split = new SplitText("#split-stagger", {
      type: "words,chars",
    });

    split.chars.forEach((char, i) => {
      smoother.effects(char, {
        speed: 1,
        lag: (i + 1) * 0.1,
      });
    });

    // ✅ Cleanup (VERY important for SPA)
    return () => {
      split.revert();
      smoother.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <div id="wrapper">
      <section id="content">
        {/* Heading */}
        <div className="heading" aria-hidden="true">
          <p>smooooth</p>
          <div className="text-container">
            <p>scrolling</p>
            <p data-speed="0.95">scrolling</p>
            <p data-speed="0.9">scrolling</p>
            <p data-speed="0.85">scrolling</p>
            <p data-speed="0.8">scrolling</p>
            <p data-speed="0.75">scrolling</p>
            <p data-speed="0.7">scrolling</p>
          </div>
        </div>

        {/* Image Grid */}
        <section className="image-grid container">
          <div className="image_cont" data-speed="1">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1556856425-366d6618905d"
              alt=""
            />
          </div>

          <div className="image_cont" data-speed="1.7">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c"
              alt=""
            />
          </div>

          <div className="image_cont" data-speed="1.5">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1609166214994-502d326bafee"
              alt=""
            />
          </div>
        </section>

        {/* Title */}
        <section className="title container flow--lg">
          <h1>
            <span className="eyebrow">with </span>GSAP scrollsmoother
          </h1>
          <p>
            Seamlessly integrated with GSAP and ScrollTrigger. Leveraging native
            scrolling.
          </p>
        </section>

        {/* Bars */}
        <section className="bars container">
          <div className="bars-text">
            <div className="flow content">
              <h2>Speed Control</h2>
              <p>
                Animate elements along at different speeds, slow them down or
                make them whizz past.
              </p>
            </div>
          </div>

          <div className="bars-cont">
            {[0.8, 0.9, 1, 1.1, 1.2].map((speed) => (
              <div className="bar" data-speed={speed} key={speed}>
                <p>{speed}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Parallax slab */}
        <section className="v-center">
          <div className="parallax-slab">
            <img
              data-speed="auto"
              src="https://assets.codepen.io/756881/smoothscroller-1.jpg"
              alt=""
            />
          </div>
        </section>

        {/* Stagger */}
        <section className="staggered container">
          <div className="staggered_text">
            <div className="flow content">
              <h2>Add some lag (the good kind!)</h2>
              <p>
                loosen the connection to the scroll to give a feeling of follow
                through.
              </p>
            </div>
          </div>

          <div className="staggered_demo">
            <h3 id="split-stagger">stagger...</h3>
          </div>
        </section>

        {/* Parallax images */}
        <section className="parallax-images container">
          <div className="parallax-text">
            <div className="flow content">
              <h2>Easy parallax image effects</h2>
              <p>
                Pop images into overflow-hidden containers and GSAP does the
                rest.
              </p>
            </div>
          </div>

          <div className="image_cont">
            <img
              data-speed="auto"
              src="https://assets.codepen.io/756881/neon3.jpg"
              alt=""
            />
          </div>

          <div className="image_cont">
            <img
              data-speed="auto"
              src="https://assets.codepen.io/756881/neon2.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="spacer" />
      </section>
    </div>
  );
}
