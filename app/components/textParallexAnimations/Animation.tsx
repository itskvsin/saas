import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Animation = () => {

    const imageRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        gsap.to("#image", {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: "#hero-image",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
    }, [])

  return (
    <section className='space-y-10'>
        <div id='hero-image' className='h-screen relative w-full decoration-violet-50 overflow-hidden'>
            <div id='image' className=' h-[40vh] w-full absolute inset-0 bg-center m-auto' style={{backgroundImage: 'url("/images/demo.jpg")'}}/>
        </div>
    </section>
  )
}

export default Animation