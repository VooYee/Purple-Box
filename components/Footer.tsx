// Library Import
import Image from 'next/image';

// Icons Import
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Asset Imports
import PartnerLogo1 from '@/public/Purple-Box-Logo.png';
import PartnerLogo2 from '@/public/Purple-Box-Logo.png';

const Footer = () => {
  return (
    <footer className="wrapper bg-gradient-to-b from-[#1a0730] to-[#3c1361] text-white py-16 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <div className="w-full flex flex-col md:flex-row justify-between gap-y-8">
          {/* Quick Links */}
          <div className="w-full">
            <h6 className="font-bold text-lg mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-purple-400">Home</a></li>
              <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
              <li><a href="/services" className="hover:text-purple-400">Services</a></li>
              <li><a href="/pricing" className="hover:text-purple-400">Pricing</a></li>
              <li><a href="/cart" className="hover:text-purple-400">Cart</a></li>
              <li><a href="/contact" className="hover:text-purple-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full">
            <h6 className="font-bold text-lg mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="https://twitter.com/PurpleBox" aria-label="Twitter" className="hover:text-purple-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/PurpleBox" aria-label="Instagram" className="hover:text-purple-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/company/PurpleBox" aria-label="LinkedIn" className="hover:text-purple-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full space-y-2">
            <h6 className="font-bold text-lg mb-4">Contact Us</h6>
            <p className="text-purple-200">contact@purplebox.com</p>
            <p className="text-purple-200">+123 456 7890</p>
            <p className="text-purple-200">123 Purple St., Suite 101, Metropolis</p>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full">
            <h6 className="font-bold text-lg mb-4">Stay Updated</h6>
            <p className="text-purple-200 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 bg-[#2e0844] text-white border border-purple-700 rounded-md focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Partner Logos */}
          <div className="flex space-x-4">
            <Image src={PartnerLogo1} alt="Partner Logo 1" width={50} height={50} />
            <Image src={PartnerLogo2} alt="Partner Logo 2" width={50} height={50} />
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-purple-400">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-purple-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
