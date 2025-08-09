import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DECORE</h2>
          <p className="text-gray-400">
            Crafting timeless interiors with elegance and functionality. 
            Bringing your dream spaces to life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/collections" className="hover:text-red-400">Collections</Link></li>
            <li><Link to="/interior" className="hover:text-red-400">Interior Ideas</Link></li>
            <li><Link to="/shop" className="hover:text-red-400">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@decore.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Location: 123 Interior Ave, Design City</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400"><FaInstagram /></a>
            <a href="#" className="hover:text-red-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-400"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DECORE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
