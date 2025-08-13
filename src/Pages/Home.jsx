import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero"

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const [quizResult, setQuizResult] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [uploadPreview, setUploadPreview] = useState(null);
    const marqueeRef = useRef(null);

    // Partner logos
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

    // Handle file upload
    const handleUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setUploadPreview(url);
    };

    // Suggestion form logic
    const handleSuggest = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const style = form.get("style")?.toLowerCase() || "";
        const needs = form.getAll("needs");
        const budget = form.get("budget") || "mid";

        const out = [];
        if (style.includes("minimal") || style.includes("scandi")) {
            out.push("Neutral palette (warm whites, light oak), hidden storage, slimline furniture.");
        }
        if (style.includes("lux") || style.includes("luxury") || style.includes("quiet")) {
            out.push("Muted tones with rich textures (bouclé, velvet), brass accents, oversized art.");
        }
        if (style.includes("boho") || style.includes("eclectic")) {
            out.push("Layered rugs, rattan + linen, collected art wall, plants for height & flow.");
        }
        if (style.includes("industrial")) {
            out.push("Matte black metal, smoked glass, concrete/stone textures, cognac leather.");
        }
        if (!out.length) {
            out.push("Start with a moodboard: pick 1 base color, 1 texture, 1 accent material, and repeat.");
        }
        if (needs.includes("lighting")) out.push("Add 3-point lighting: ceiling, task, ambient. 2700–3000K bulbs.");
        if (needs.includes("storage")) out.push("Use vertical storage + ottomans. Keep 30% blank space for calm.");
        if (budget === "low") out.push("Prioritize paint, lighting, and textiles for highest ROI before furniture.");

        setSuggestions(out.slice(0, 6));
    };

    // Quiz logic
    const handleQuiz = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const q1 = form.get("q1");
        const q2 = form.get("q2");
        const q3 = form.get("q3");

        const score =
            (q1 === "clean" ? 2 : q1 === "cozy" ? 1 : 0) +
            (q2 === "neutrals" ? 2 : q2 === "earth" ? 1 : 0) +
            (q3 === "hidden" ? 2 : q3 === "open" ? 1 : 0);

        if (score >= 5) setQuizResult("Minimal Luxury");
        else if (score >= 3) setQuizResult("Warm Modern");
        else setQuizResult("Playful Eclectic");
    };


    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;

        // create looping tween using xPercent and wrap - works well with duplicated content
        const tween = gsap.to(el, {
            xPercent: -50,            // move left by half the track (since we duplicated logos)
            duration:20,        // adjust speed here
            ease: "linear",
            repeat: -1,
            modifiers: {
                // wrap xPercent between -50 and 0 so it never snaps back
                xPercent: gsap.utils.wrap(-50, 0)
            }
        });

        // ensure it is running immediately
        tween.timeScale(1);

        // keep previous scroll pos to detect direction
        let lastScroll = window.scrollY;
        const onScroll = () => {
            const newScroll = window.scrollY;
            // 1 => forward, -1 => reverse. You can use other speeds.
            const dir = newScroll > lastScroll ? 1 : -1;
            tween.timeScale(dir);
            lastScroll = newScroll;
            clearTimeout(timeout);
            timeout = setTimeout(() => tween.timeScale(1), 200);
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            tween.kill();
        };
    }, []);

    return (
        <div className="relative bg-gradient-to-r from-pink-50 via-white to-yellow-50">
            <Hero />

            {/* Collections */}
            <section className="px-6 md:px-12 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Our Collections</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    Curated sets that make styling easy — mix, match, and make it yours.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Calm Neutrals", copy: "Soft tones, natural textures, and clean lines for a serene home.", src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80" },
                        { title: "Modern Organic", copy: "Curves, stone, and warm woods that feel grounded and elegant.", src: "https://images.unsplash.com/photo-1634045924031-98026a4557c4?w=1000&auto=format&fit=crop&q=60" },
                        { title: "Quiet Luxury", copy: "Understated, tactile, and elevated — luxury without loud.", src: "https://images.unsplash.com/photo-1631509824910-82791a0e43d1?w=1000&auto=format&fit=crop&q=60" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border-t-4 border-green-400">
                            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.copy}</p>
                                <div className="mt-4 flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Includes: Sofa • Rug • Lighting</span>
                                    <button className="px-3 py-1 rounded bg-gray-900 text-white hover:bg-gray-800">View set</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interior Ideas */}
            <section className="px-6 md:px-12 py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Interior Ideas</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    Real, doable ideas — from color drenching to sanctuary nooks — that upgrade any space.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Color Drenching", desc: "Paint walls, trim, and ceiling one tone for an immersive, cozy effect.", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
                        { title: "Sanctuary Corner", desc: "A dedicated calm zone with a lounge chair, dimmable lamp, and soft throw.", src: "https://images.unsplash.com/photo-1683236719529-345e669e1ba7?w=1000&auto=format&fit=crop&q=60" },
                        { title: "Natural Stone Moment", desc: "Small stone plinth or side table adds weight and texture instantly.", src: "https://images.unsplash.com/photo-1629822097366-0ed4b086f080?w=1000&auto=format&fit=crop&q=60" },
                    ].map((card, i) => (
                        <article key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border-t-4 border-pink-300">
                            <img src={card.src} alt={card.title} className="w-full h-64 object-cover" />
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                                <p className="text-gray-600 mt-2">{card.desc}</p>
                                <ul className="text-gray-500 text-sm mt-3 list-disc pl-5 space-y-1">
                                    <li>Budget: Low to Mid</li>
                                    <li>Time: Weekend project</li>
                                    <li>Impact: High visual payoff</li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Upload & Suggest */}
            <section className="px-6 md:px-12 py-16">
                <div className="max-w-5xl mx-auto bg-pink-50 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Upload Your Design & Get Ideas</h2>
                    <form onSubmit={handleSuggest} className="mt-8 grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Room Photo</label>
                            <input type="file" accept="image/*" onChange={handleUpload} className="w-full text-sm border p-2 rounded" />
                            {uploadPreview && <img src={uploadPreview} alt="Preview" className="mt-4 w-full h-48 object-cover rounded" />}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Describe your style</label>
                            <textarea name="style" rows="6" placeholder="e.g., minimal luxury with warm tones" className="w-full border rounded-lg p-3" />
                            <fieldset className="mt-4">
                                <legend className="text-sm font-semibold text-gray-700">What do you need?</legend>
                                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                                    <label className="flex items-center gap-2"><input type="checkbox" name="needs" value="lighting" /> Lighting plan</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" name="needs" value="storage" /> Storage ideas</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" name="needs" value="color" /> Color palette</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" name="needs" value="layout" /> Layout tips</label>
                                </div>
                            </fieldset>
                            <div className="mt-4">
                                <span className="block text-sm font-semibold text-gray-700 mb-1">Budget focus</span>
                                <label className="mr-4 text-sm"><input type="radio" name="budget" value="low" defaultChecked /> Low</label>
                                <label className="mr-4 text-sm"><input type="radio" name="budget" value="mid" /> Mid</label>
                                <label className="text-sm"><input type="radio" name="budget" value="high" /> High</label>
                            </div>
                            <button type="submit" className="mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">Get Suggestions</button>
                        </div>
                    </form>

                    {suggestions.length > 0 && (
                        <div className="mt-8 bg-gray-50 border rounded-lg p-5">
                            <h3 className="text-xl font-semibold text-gray-800">Quick Suggestions</h3>
                            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
                                {suggestions.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* Shop */}
            <section className="px-6 md:px-12 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Shop Now</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "https://plus.unsplash.com/premium_photo-1739350940126-a3fcee922e32?w=600&auto=format&fit=crop&q=60",
                        "https://plus.unsplash.com/premium_photo-1663013472911-9015c45a47ce?w=1000&auto=format&fit=crop&q=60",
                        "https://images.unsplash.com/photo-1650116196251-94984f151ddf?w=1000&auto=format&fit=crop&q=60",
                    ].map((src, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-300">
                            <img src={src} alt={`Shop ${i + 1}`} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Product {i + 1}</h3>
                                <p className="text-gray-600 mt-2">Premium materials. Thoughtful design.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-16 bg-gray-100">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">Find Your Style (Quick Quiz)</h2>
                    <form onSubmit={handleQuiz} className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
                        <fieldset className="border-2 border-red-400 rounded-xl p-5 hover:shadow-lg transition-all">
                            <legend className="font-bold text-gray-700">What matters most?</legend>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q1" value="clean" required /> Clean lines</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q1" value="cozy" /> Cozy textures</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q1" value="bold" /> Bold statements</label>
                        </fieldset>
                        <fieldset className="border-2 border-red-300 rounded-xl p-5 hover:shadow-lg transition-all">
                            <legend className="font-semibold text-gray-700">Colors you love?</legend>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q2" value="neutrals" required /> Neutrals</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q2" value="earth" /> Earthy browns/greens</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q2" value="pop" /> Pops of color</label>
                        </fieldset>
                        <fieldset className="border-2 border-red-100 rounded-xl p-5 hover:shadow-lg transition-all">
                            <legend className="font-semibold text-gray-700">Storage style?</legend>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q3" value="hidden" required /> Hidden, seamless</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q3" value="open" /> Open shelving</label>
                            <label className="flex items-center gap-2 mt-2"><input type="radio" name="q3" value="mix" /> Mixed</label>
                        </fieldset>
                        <div className="md:col-span-3 text-center mt-4">
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">See Result</button>
                        </div>
                    </form>
                    {quizResult && <p className="mt-6 text-center text-xl font-semibold text-gray-800">Your Style: {quizResult}</p>}
                </div>
            </section>

            {/* Partners Marquee */}
            <section className="py-12 bg-white border-y-4 border-red-500 shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Our Trusted Partners</h2>
                    <p className="text-gray-500 mt-2">Collaborating with industry leaders to bring your dream spaces to life.</p>
                </div>

                {/* marquee wrapper: keep overflow-hidden so the inner track can translate */}
                <div className="relative overflow-hidden">
                    {/* track: contains two copies to make a continuous loop */}
                    <div
                        ref={marqueeRef}
                        className="flex gap-8 whitespace-nowrap will-change-transform"
                        aria-hidden="true"
                    >
                        {[...logos, ...logos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center p-4 border border-red-300 rounded-xl bg-gray-50"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-24 w-auto min-w-[160px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>





        </div>
    );
}

export default Home;
