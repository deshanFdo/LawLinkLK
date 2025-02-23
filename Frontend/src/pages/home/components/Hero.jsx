import { ArrowRight } from "lucide-react"
import { ASSETS } from "../../../utils/constants"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.HOME.BACKGROUNDS.HERO})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-16 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect with Top Legal Professionals in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Find the right lawyer for your legal needs or expand your client base. LawLinkLK brings legal professionals
            and clients together on one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary group">
              Join as Client
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="btn-secondary group">
              Join as Lawyer
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

