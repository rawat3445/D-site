import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function IntroScreen({ onComplete }) {
    const overlayRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const letters = textRef.current.querySelectorAll("span");

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
        });

        // Animate text
        tl.fromTo(
            letters,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 }
        )
            .to(textRef.current, {
                scale: 1.05,
                duration: 0.4,
                yoyo: true,
                repeat: 1,
            })
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                pointerEvents: "none",
                onComplete: onComplete,
            });
    }, [onComplete]);

    const sentence = "Design Comfort Perfection With DECORE";
    const words = sentence.split(" ");

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundImage: "url('/src/assets/Intro.png')", // your generated image
                backgroundRepeat: "no-repeat", // controls zoom
                backgroundSize: "cover", // can use 'contain' if you want full image shown
                backgroundPosition: "center",
                fontFamily: "'Playfair Display', serif",
            }}
        >
            {/* Main Text */}
            <h1
                ref={textRef}
                className="text-4xl md:text-5xl font-semibold tracking-wide text-gray-800 text-center px-4"
                style={{
                    maxWidth: "70%",
                    color: "#5B4636", // warm brown to match furniture lines
                    textShadow: "2px 2px 6px rgba(255,255,255,0.8)", // makes text readable without a box
                    padding: "10px 20px",
                    borderRadius: "10px",
                }}
            >
                {words.map((word, i) => (
                    <span
                        key={i}
                        className={`inline-block mr-2 ${word === "DECORE" ? "text-red-600 font-bold" : ""
                            }`}
                    >
                        {word}
                    </span>
                ))}
            </h1>
        </div>
    );
}
