"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#0066cc]">LawLinkLK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#0066cc]">
                About
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#0066cc]">
                Features
              </a>
              <a href="#faq" className="text-gray-700 hover:text-[#0066cc]">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#0066cc]">
                Contact
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-[#0066cc] hover:text-[#0052a3]">Login</button>
            <button className="px-4 py-2 bg-[#0066cc] text-white rounded-md hover:bg-[#0052a3] transition duration-300">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0066cc] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#0066cc]">
              About
            </a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-[#0066cc]">
              Features
            </a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-[#0066cc]">
              FAQ
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#0066cc]">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-3 py-2 text-[#0066cc] hover:text-[#0052a3]">Login</button>
              <button className="w-full px-3 py-2 bg-[#0066cc] text-white rounded-md hover:bg-[#0052a3] transition duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

