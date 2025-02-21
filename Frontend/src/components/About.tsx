import { Users, Scale, Target, Shield } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="About LawLinkLK"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bridging the Gap Between Legal Expertise and Justice
            </h2>
            <p className="text-lg text-gray-600">
              LawLinkLK is revolutionizing how people connect with legal professionals. Our platform makes it simple and
              efficient to find the right lawyer for your needs, while providing lawyers with tools to grow their
              practice.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066cc]">5,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066cc]">1,000+</div>
                <div className="text-gray-600">Verified Lawyers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create a world where quality legal assistance is accessible to everyone, breaking down barriers between
              legal professionals and those who need their expertise.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide an innovative platform that connects clients with qualified legal professionals, making legal
              services more accessible, transparent, and efficient.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0066cc]" />
            </div>
            <h4 className="text-xl font-semibold">Accessibility</h4>
            <p className="text-gray-600">Making legal services available to everyone</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Scale className="w-6 h-6 text-[#0066cc]" />
            </div>
            <h4 className="text-xl font-semibold">Integrity</h4>
            <p className="text-gray-600">Maintaining highest ethical standards</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-[#0066cc]" />
            </div>
            <h4 className="text-xl font-semibold">Excellence</h4>
            <p className="text-gray-600">Delivering quality service always</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#0066cc]" />
            </div>
            <h4 className="text-xl font-semibold">Trust</h4>
            <p className="text-gray-600">Building reliable relationships</p>
          </div>
        </div>
      </div>
    </section>
  )
}

