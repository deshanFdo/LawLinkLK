import { Search, Calendar, MessageSquare, FileText, Users, BarChart, Clock, Award } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Features That Make Us Different</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for both clients and legal professionals</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Client Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0066cc] mb-8">For Clients</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Search className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Easy Lawyer Search</h4>
                <p className="text-gray-600">Find the right lawyer based on expertise, location, and reviews</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Calendar className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Online Booking</h4>
                <p className="text-gray-600">Schedule consultations at your convenience</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <MessageSquare className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Secure Messaging</h4>
                <p className="text-gray-600">Communicate directly with lawyers through our platform</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <FileText className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Case Tracking</h4>
                <p className="text-gray-600">Monitor your case progress and documentation</p>
              </div>
            </div>
          </div>

          {/* Lawyer Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0066cc] mb-8">For Lawyers</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Users className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Client Management</h4>
                <p className="text-gray-600">Efficiently manage your client relationships</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <BarChart className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Practice Analytics</h4>
                <p className="text-gray-600">Track your performance and growth metrics</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Clock className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Schedule Management</h4>
                <p className="text-gray-600">Organize your appointments and availability</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Award className="w-10 h-10 text-[#0066cc] mb-4" />
                <h4 className="text-xl font-semibold mb-2">Profile Showcase</h4>
                <p className="text-gray-600">Highlight your expertise and achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

