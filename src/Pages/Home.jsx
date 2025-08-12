import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            gsap.fromTo(
                section,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    const setRefs = (el, i) => {
        sectionsRef.current[i] = el;
    };

    const logos = [
        { name: "IKEA", src: "https://images-platform.99static.com//QyCLmB7K2x0hbp0MrvfRvFzwT7A=/291x0:1022x731/fit-in/590x590/projects-files/18/1882/188287/39028f8c-7852-9a27-a1a1-6a64b1cba1ce.png" },
        { name: "Zara Home", src: "https://images-workbench.99static.com/ucaIVjyOycG_AD0CbrWwYZKCRN0=/99designs-contests-attachments/123/123073/attachment_123073218" },
        { name: "Crate & Barrel", src: "https://images-workbench.99static.com/vHoRkmDNO5IBqk2v5EZ1ZYWeznI=/99designs-contests-attachments/141/141666/attachment_141666960" },
        { name: "Urban Ladder", src: "https://images-workbench.99static.com/kvHo0zNfx0lVOGaohgIp-YJbgTs=/http://s3.amazonaws.com/projects-files/55/5551/555191/b99867dc-5f0e-462a-b2b4-f0525065d316.jpg" },
        { name: "West Elm", src: "https://images-workbench.99static.com/pnDSovMDDFNyZDQPkc71VaclGVI=/http://s3.amazonaws.com/projects-files/30/3007/300766/cad56c3b-5d0a-4006-90b2-646ba8d3c6ed.jpg" },
        { name: "Street Home", src: "https://images-workbench.99static.com/m-8AQ6Z6fI7n4SqkPFyBkUg1tok=/http://s3.amazonaws.com/projects-files/17/1728/172898/bef947c8-772a-5329-4760-5e731981d339.png" },
        { name: "GG's Homedecore", src: "https://images-workbench.99static.com/fX7a97XF5XpJ8R0mo_2j46_DAng=/99designs-contests-attachments/132/132934/attachment_132934087" },
        { name: "bluebery", src: "https://images-workbench.99static.com/Vsh5t5jOFW79DjiWBSncXDo_gEQ=/99designs-contests-attachments/121/121229/attachment_121229313" },
        { name: "concept  Home", src: "https://images-workbench.99static.com/LvRPwm8b49qN5J_LjoPgsLlsXR4=/http://s3.amazonaws.com/projects-files/18/1891/189130/67c13683-9e13-f90f-c75a-780d28de0fd6.png" },
        { name: "decorable", src: "https://images-workbench.99static.com/vuWwjtdgEBH-NOHLJDGAgtAy1fI=/99designs-contests-attachments/61/61027/attachment_61027980" },

    ];
    const marqueeRef = useRef(null);
    const directionRef = useRef(1);

    useEffect(() => {
        const marquee = marqueeRef.current;

        const tween = gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            ease: "linear",
            repeat: -1
        });

        let lastScroll = window.scrollY;
        const onScroll = () => {
            const newScroll = window.scrollY;
            tween.timeScale(newScroll > lastScroll ? 1 : -1);
            lastScroll = newScroll;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);



    return (
        <div className="bg-gray-50">
            {/* Hero Section (Untouched) */}
            <Hero />

            {/* Collections Preview */}
            <section ref={(el) => setRefs(el, 0)} className="px-6 md:px-12 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Our Collections
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1634045924031-98026a4557c4?w=1000&auto=format&fit=crop&q=60",
                        "https://images.unsplash.com/photo-1631509824910-82791a0e43d1?w=1000&auto=format&fit=crop&q=60"
                    ].map((src, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={src} alt={`Collection ${i + 1}`} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Collection {i + 1}</h3>
                                <p className="text-gray-600 mt-2">
                                    Explore our unique collection of premium designs.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interior Ideas Preview */}
            <section ref={(el) => setRefs(el, 1)} className="px-6 md:px-12 py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Interior Ideas
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1683236719529-345e669e1ba7?w=1000&auto=format&fit=crop&q=60",
                        "https://images.unsplash.com/photo-1629822097366-0ed4b086f080?w=1000&auto=format&fit=crop&q=60"
                    ].map((src, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={src} alt={`Interior ${i + 1}`} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Idea {i + 1}</h3>
                                <p className="text-gray-600 mt-2">
                                    Get inspired with our interior styling tips.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shop Highlight */}
            <section ref={(el) => setRefs(el, 2)} className="px-6 md:px-12 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Shop Now
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "https://plus.unsplash.com/premium_photo-1739350940126-a3fcee922e32?w=600&auto=format&fit=crop&q=60",
                        "https://plus.unsplash.com/premium_photo-1663013472911-9015c45a47ce?w=1000&auto=format&fit=crop&q=60",
                        "https://images.unsplash.com/photo-1650116196251-94984f151ddf?w=1000&auto=format&fit=crop&q=60"
                    ].map((src, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={src} alt={`Shop ${i + 1}`} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Product {i + 1}</h3>
                                <p className="text-gray-600 mt-2">
                                    High-quality decor items for your space.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Teaser */}
            <section ref={(el) => setRefs(el, 3)} className="px-6 md:px-12 py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Let’s Work Together
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Have a project in mind? We’d love to hear from you.
                </p>
                <a
                    href="/contact"
                    className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
                >
                    Contact Us
                </a>
            </section>

            <section className="py-12 bg-white border-y-4 border-red-500 shadow-lg overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      Our Trusted Partners
    </h2>
    <p className="text-gray-500 mt-2">
      Collaborating with industry leaders to bring your dream spaces to life.
    </p>
  </div>

  {/* Marquee Container */}
  <div ref={marqueeRef} className="flex gap-8">
    {[...logos, ...logos].map((logo, idx) => (
      <div
        key={idx}
        className="flex items-center justify-center p-4 border border-red-300 rounded-xl bg-gray-50 hover:shadow-md transition"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-24 w-40 min-w-[160px] min-h-[96px] object-contain"
        />
      </div>
    ))}
  </div>
</section>






        </div>
    );
}

export default Home;
