import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

