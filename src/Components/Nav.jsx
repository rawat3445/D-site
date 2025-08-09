import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current, {
      y: -10,
      opacity: 0,
      duration: 1.4,
      ease: 'power2.inOut',
    });
  }, []);

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
          <li><Link to="/" className="hover:text-[#C19A6B] transition">Home</Link></li>
          <li><Link to="/collections" className="hover:text-[#C19A6B] transition">Collections</Link></li>
          <li><Link to="/interior" className="hover:text-[#C19A6B] transition">Interior Ideas</Link></li>
          <li><Link to="/shop" className="hover:text-[#C19A6B] transition">Shop</Link></li>
          <li><Link to="/contact" className="hover:text-[#C19A6B] transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
