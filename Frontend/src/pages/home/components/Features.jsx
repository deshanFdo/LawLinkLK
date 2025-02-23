import { Search, Clock, MessageSquare, Shield, Users, TrendingUp, Calendar, BadgeCheck } from "lucide-react"

export default function Features() {
  const clientFeatures = [
    {
      icon: Search,
      title: "Easy Lawyer Search",
      description: "Find the right lawyer based on expertise, location, and reviews",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get responses from lawyers within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "Secure Communication",
      description: "Chat directly with lawyers through our secure platform",
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All lawyers are verified and credentials checked",
    },
  ]

  const lawyerFeatures = [
    {
      icon: Users,
      title: "Expand Your Reach",
      description: "Connect with potential clients across Sri Lanka",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Practice",
      description: "Build your online presence and client base",
    },
    {
      icon: Calendar,
      title: "Efficient Scheduling",
      description: "Manage appointments and consultations easily",
    },
    {
      icon: BadgeCheck,
      title: "Professional Profile",
      description: "Showcase your expertise and client reviews",
    },
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Make Us Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers unique features for both clients and legal professionals, making legal service access
            and delivery more efficient than ever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Client Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Clients</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {clientFeatures.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-[#0066cc] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lawyer Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Lawyers</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {lawyerFeatures.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-[#0066cc] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

