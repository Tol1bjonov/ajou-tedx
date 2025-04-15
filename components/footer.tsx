import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">TEDx Ajou Tashkent</h3>
            <p className="text-sm text-gray-400">This independent TEDx event is operated under license from TED.</p>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link href="https://www.instagram.com/tedxajou_u_tashkent?igsh=MThqN2ltZGFpZ24ybw==" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" target="__blank"/>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-400 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-tedRed mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                   Republic of Uzbekistan , Tashkent city,
                  <br />
                  Yashnabad district, Asalobod street, 113
                  <br />
                  and 113A, 100204.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-tedRed mr-2 flex-shrink-0" />
                <span className="text-gray-400"> +998 71 207-65-25,
                    <br /> +998 71 207-65-27.</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-tedRed mr-2 flex-shrink-0" />
                <span className="text-gray-400">scientificsecretary@ajou.uz</span>
              </li>
            </ul>
          </div>

          {/* Newsletter - Optional */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates about our event and speakers.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-tedRed hover:bg-tedRed/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} TEDx Ajou Tashkent. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-4 md:mt-0">
            TEDx, x = independently organized TED event. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  )
}
