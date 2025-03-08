import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-16 flex flex-col items-center w-full">
      <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 text-center sm:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/" className="flex items-center mb-2">
            <Image 
              src="/assets/images/logo.svg" 
              alt="logo" 
              width={128} 
              height={38} 
              className="w-24 sm:w-32" // Sesuaikan ukuran logo
            />
          </Link>
          <p className="text-gray-300 text-lg max-w-xs">
            Bergabunglah dengan berbagai kompetisi menarik yang kami adakan setiap tahunnya.
          </p>
        </div>

        {/* Contact Info & Social Media */}
        <div className="flex flex-col items-center sm:items-end gap-4">
          {/* Contact Person */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <p className="flex items-center text-gray-300 text-md">
              <FaPhoneAlt className="inline-block mr-2" /> +123 456 789
            </p>
            <p className="flex items-center text-gray-300 text-md">
              <FaEnvelope className="inline-block mr-2" /> info@geotrap.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <Link href="https://www.instagram.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <FaInstagram size={18} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Line Divider */}
      <div className="border-t border-gray-600 my-4 mx-auto max-w-4xl" />

      {/* Copyright Section */}
      <div className="text-center text-gray-300 text-sm">
        <p>2025 Geotrap. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;