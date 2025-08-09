import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import heroImage from "../assets/Hero.banner.jpg"; // must exist

function Hero() {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

 useGSAP(() => {
  gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, imageRef.current], {
    opacity: 1,
    y: 0,
    x: 0
  });

  const tl = gsap.timeline();

  tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
    .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
    .from(buttonRef.current, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
    .from(imageRef.current, { x: 100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");
}, []);


  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50">
      <div className="max-w-lg space-y-4 relative">
        <h1 ref={titleRef} className="text-5xl font-bold text-gray-900">
          Welcome to <span className="text-red-500">DECORE</span>
        </h1>
        <p ref={subtitleRef} className="text-lg text-gray-600">
          Crafting beautiful experiences with modern design and technology.
        </p>
        <button
          ref={buttonRef}
          className="relative z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Get Started
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Decor Example"
          className="rounded-lg shadow-lg w-[500px] md:w-[600px] lg:w-[700px]"
        />
      </div>
    </section>
  );
}

export default Hero;
