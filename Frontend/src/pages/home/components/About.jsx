import { Target, Scale } from "lucide-react"
import { ASSETS } from "../../../utils/constants"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#0066cc] opacity-10 rounded-xl group-hover:opacity-20 transition-opacity" />
            <img
              src={ASSETS.HOME.IMAGES.ABOUT || "/placeholder.svg"}
              alt="About LawLinkLK"
              className="rounded-xl w-full shadow-lg relative object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bridging the Gap Between Legal Professionals and Clients
              </h2>
              <p className="text-gray-600 leading-relaxed">
                LawLinkLK is revolutionizing how legal services are accessed in Sri Lanka. We're creating a transparent,
                efficient, and trustworthy platform where clients can find the right legal expertise and lawyers can
                grow their practice.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-[#0066cc] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To make legal services accessible to everyone in Sri Lanka through technology and innovation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
                <Scale className="w-12 h-12 text-[#0066cc] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create a trusted platform that simplifies the process of connecting clients with the right legal
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

