import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Collections() {
  const ref = useRef();

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <section ref={ref} className="px-8 py-16 bg-[#FDFBF7] min-h-screen">
      <h1 className="text-4xl font-bold text-[#8B5E3C] mb-6">Our Collections</h1>
      <p className="text-[#5B4636] max-w-2xl mb-8">
        Discover curated interior designs that blend modern luxury with timeless charm.
      </p>
      <img  alt="Luxury Collection" className="rounded-lg shadow-lg max-w-4xl" />
    </section>
  );
}
