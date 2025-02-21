import "./styles.css"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-background"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Connect with Legal Professionals in Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Your trusted platform for finding and connecting with qualified lawyers. Get expert legal assistance when
            you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Join as Client
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Join as Lawyer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

