"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "./styles.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="navbar-logo">
            <img src="/images/logo.png" alt="LawLinkLK" className="h-10" />
          </a>

          <div className="navbar-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>

            <div className="navbar-buttons">
              <button className="btn-login">Login</button>
              <button className="btn-register">Register</button>
            </div>
          </div>

          <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <a href="#about" className="mobile-link">
            About
          </a>
          <a href="#features" className="mobile-link">
            Features
          </a>
          <a href="#faq" className="mobile-link">
            FAQ
          </a>
          <a href="#contact" className="mobile-link">
            Contact
          </a>
          <div className="mobile-buttons">
            <button className="btn-login-mobile">Login</button>
            <button className="btn-register-mobile">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

