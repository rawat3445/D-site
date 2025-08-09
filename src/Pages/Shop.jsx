import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Shop() {
  const ref = useRef();

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <section ref={ref} className="px-8 py-16 bg-[#F8F5F0] min-h-screen">
      <h1 className="text-4xl font-bold text-[#8B5E3C] mb-6">Shop</h1>
      <p className="text-[#5B4636] max-w-2xl mb-8">
        Browse our handpicked furniture, décor items, and accessories that elevate any space.
      </p>
      <img  alt="Shop Items" className="rounded-lg shadow-lg max-w-4xl" />
    </section>
  );
}
