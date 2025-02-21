export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/90 to-[#004999]/90">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Connect with Legal Professionals <br />
            <span className="text-blue-200">Instantly & Efficiently</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100">
            Your bridge to expert legal assistance. Connect with qualified lawyers, schedule consultations, and get the
            legal support you need - all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button className="px-8 py-4 bg-white text-[#0066cc] rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Join as Client
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300">
              Join as Lawyer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

