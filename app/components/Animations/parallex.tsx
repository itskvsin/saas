import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Animation = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".image", {
            yPercent: 50,
            scrollTrigger: {
                trigger: ".imagecover",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })

        gsap.to(".centerText", {
            yPercent: 30,
            scrollTrigger: {
                trigger: ".imagecover",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
    })


    return (
        <section className="h-screen w-full">
            <div className="imageCover relative  bg-center  bg-no-repeat bg-cover overflow-hidden flex items-center justify-center h-screen w-full" style={{ backgroundImage: "url('/images/img.jpg')" }}>
                <div className="image w-full h-[50vh]  bg-center  bg-no-repeat bg-cover overflow-hidden backdrop-blur-[10000px]" style={{ backgroundImage: "url('/images/img.jpg')" }} />
                <div className="centerText absolute inset-0 z-10 translate-y-1/2 text-center text-[150px] font-bold text-transparent" style={{WebkitTextStroke: "4px white" }}>Welcome To Codex</div>
            </div>
        </section>
    )
}


export default Animation;