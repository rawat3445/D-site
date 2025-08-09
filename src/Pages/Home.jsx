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
        </div>
    );
}

export default Home;
