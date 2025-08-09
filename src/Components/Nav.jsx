import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const container = useRef();
  const navItems = useRef([]);
  const mobileMenu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Step 1: Animate navbar container
    tl.from(container.current, {
      y: -50,
      opacity: 0,
      duration: 1,
    });

    // Step 2: Animate nav items with stagger
    tl.from(
      navItems.current,
      {
        y: -50,
        opacity: 0,
        stagger: 0.15,
      },
      "-=0.4" // start slightly before previous finishes
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.fromTo(
        mobileMenu.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenu.current, { x: "100%", opacity: 0, duration: 0.4 });
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Interior Ideas", path: "/interior" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="h-20 bg-[#F8F5F0] shadow-md sticky top-0 z-50">
      <div
        ref={container}
        className="h-20 flex items-center justify-between px-6 md:px-12"
      >
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-[#8B5E3C]">DECORE</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium text-[#2E2E2E]">
          {["Home", "Collections", "Interior Ideas", "Shop", "Contact"].map(
            (text, index) => (
              <li
                key={text}
                ref={(el) => (navItems.current[index] = el)}
              >
                <Link
                  to={
                    text === "Home"
                      ? "/"
                      : "/" + text.toLowerCase().replace(" ", "")
                  }
                  className="hover:text-[#C19A6B] transition"
                >
                  {text}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
