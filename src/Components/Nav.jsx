import gsap from "gsap";
import SanctumDesignLogo from "../Pages/SanctumDesignLogo";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const container = useRef();
  const navItems = useRef([]);
  const mobileMenu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(container.current, { y: -50, opacity: 0, duration: 1 });
    tl.from(navItems.current, { y: -50, opacity: 0, stagger: 0.15 }, "-=0.4");
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
    <nav className="h-20 bg-[#F8F5F0] shadow-md sticky top-0 z-50 overflow-x-hidden">
      <div
        ref={container}
        className="h-20 flex items-center justify-between px-6 md:px-12"
      >
        {/* Logo */}
        <h1>
          <SanctumDesignLogo/>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-[#2E2E2E]">
          {links.map((link, index) => (
            <li key={link.name} ref={(el) => (navItems.current[index] = el)}>
              <Link
                to={link.path}
                className="hover:text-[#C19A6B] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenu}
        className="fixed top-0 right-0 w-64 h-full bg-[#F8F5F0] shadow-lg z-40 transform translate-x-full md:hidden p-6"
      >
        <button onClick={toggleMenu} className="mb-6">Close ✖</button>
        <ul className="space-y-6 text-lg">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={toggleMenu}
                className="hover:text-[#C19A6B] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
