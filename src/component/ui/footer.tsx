import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-16 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/images/logo.svg"
              alt="Geotrap Logo"
              width={150}
              height={50}
              className="w-32 sm:w-36"
            />
          </Link>
          <p className="text-gray-300 text-base max-w-sm">
            Lead the change. Shape the future. Be the champion.
          </p>
        </div>

        {/* Kontak & Email */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="flex items-center text-gray-300 text-sm">
            <FaPhoneAlt className="mr-2" /> +62-821-1623-2591 (Syahfariz)
          </p>
          <p className="flex items-center text-gray-300 text-sm">
            <FaPhoneAlt className="mr-2" /> +62-877-7526-7979 (Garneta)
          </p>
          <p className="flex items-center text-gray-300 text-sm">
            <FaEnvelope className="mr-2" /> geotrap2025@gmail.com
          </p>
        </div>

        {/* Media Sosial & Logo Sponsor */}
        <div className="flex flex-col justify-between h-full">
          {/* Sosmed */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/geotrap_2025"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@geotrap.pedra"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>

          {/* Logo Sponsor */}
          <div className="flex justify-end items-center gap-4 mt-8 lg:mt-0">
            <Image
              src="/assets/images/logopedra.png"
              alt="Sponsor 1"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/images/logseg.png"
              alt="Sponsor 2"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/images/logohagi.png"
              alt="Sponsor 3"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2025 Geotrap. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
