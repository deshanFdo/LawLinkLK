"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import { ASSETS } from "../../../utils/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Features", to: "features" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={isScrolled ? ASSETS.HOME.LOGOS.DARK : ASSETS.HOME.LOGOS.LIGHT}
              alt="LawLinkLK Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-[#0066cc] cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Register</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-[#0066cc] transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-gray-600 hover:text-[#0066cc] cursor-pointer transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="space-y-2 pt-2">
                <button className="w-full btn-secondary">Login</button>
                <button className="w-full btn-primary">Register</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

