import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef();

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <section ref={ref} className="px-8 py-16 bg-[#FAF7F2] min-h-screen">
      <h1 className="text-4xl font-bold text-[#8B5E3C] mb-6">Contact Us</h1>
      <p className="text-[#5B4636] max-w-2xl mb-8">
        Have questions or want to collaborate? Get in touch and let’s bring your vision to life.
      </p>
      <img  alt="Contact" className="rounded-lg shadow-lg max-w-4xl mb-10" />
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-[#C19A6B] rounded-md p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-[#C19A6B] rounded-md p-3"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-[#C19A6B] rounded-md p-3 h-32"
        />
        <button className="bg-[#8B5E3C] text-white px-6 py-3 rounded-lg shadow hover:bg-[#A67855] transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
