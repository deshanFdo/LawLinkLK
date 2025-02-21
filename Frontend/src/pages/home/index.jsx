import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import "./styles/home.css"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

