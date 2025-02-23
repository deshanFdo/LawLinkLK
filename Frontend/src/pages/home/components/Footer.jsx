import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">LawLinkLK</h3>
            <p className="mb-4">
              Connecting legal professionals and clients across Sri Lanka through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: info@lawlinklk.com</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Address: Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p>&copy; {currentYear} LawLinkLK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

