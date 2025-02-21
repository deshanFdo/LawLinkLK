
import { useState } from "react";
import {
  Users,
  Clock,
  Shield,
  Bell,
  Briefcase,
  Calendar,
  FileText,
  Activity,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/408b0406-9672-4272-84c1-d00632bc89fa.png')] opacity-20 bg-cover bg-center animate-fade-in" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "200ms" }}>
              Connecting Lawyers and<br />Clients with Ease
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "400ms" }}>
              Your trusted platform for legal connections in Sri Lanka
            </p>
            <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 duration-200">
                For Clients
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md backdrop-blur-sm transition-all transform hover:scale-105 duration-200">
                For Lawyers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                src="/lovable-uploads/408b0406-9672-4272-84c1-d00632bc89fa.png"
                alt="Legal Connections"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-gray-900">
                Simplifying Legal Connections
              </h2>
              <p className="text-gray-600">
                LawLinkLK makes it easy to connect clients with the right legal professionals. Our platform streamlines the process of posting cases, booking consultations, and managing legal documents in a secure and efficient manner.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: "Easy Case Posting" },
                  { icon: Users, text: "Quick Consultations" },
                  { icon: Shield, text: "Secure Platform" },
                  { icon: Bell, text: "Real-time Updates" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="text-primary" />
                For Clients
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Post Case Anonymously",
                    description:
                      "Share your legal issues while protecting your identity",
                  },
                  {
                    icon: Calendar,
                    title: "Schedule Consultations",
                    description:
                      "Book consultations with top lawyers in minutes",
                  },
                  {
                    icon: FileText,
                    title: "Secure Document Storage",
                    description:
                      "Store and manage your legal documents securely",
                  },
                  {
                    icon: Activity,
                    title: "Track Your Case Progress",
                    description:
                      "Get updates and notifications about your case status",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up transform hover:scale-105 duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Lawyers */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="text-primary" />
                For Lawyers
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Briefcase,
                    title: "Case Management Tools",
                    description:
                      "Manage and organize client cases efficiently",
                  },
                  {
                    icon: Users,
                    title: "Client Connections",
                    description:
                      "Easily connect with clients and schedule consultations",
                  },
                  {
                    icon: FileText,
                    title: "Secure Document Sharing",
                    description:
                      "Share and store legal documents securely with clients",
                  },
                  {
                    icon: Activity,
                    title: "Case Tracking",
                    description:
                      "Track the progress of your cases and stay updated",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up transform hover:scale-105 duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How do I post a case as a client?",
                answer:
                  "You can easily post your case by signing up and filling out our simple case submission form. Your identity can remain anonymous if you choose.",
              },
              {
                question: "How can I find the right lawyer for my case?",
                answer:
                  "Our platform matches you with lawyers based on your case requirements and their expertise. You can view lawyer profiles, ratings, and reviews before making a choice.",
              },
              {
                question: "How does secure document storage work?",
                answer:
                  "All documents are encrypted and stored securely in our cloud storage. Only you and your authorized lawyer can access them.",
              },
              {
                question: "What types of cases can I post on LawLinkLK?",
                answer:
                  "You can post various types of legal cases including civil, criminal, corporate, family law, and more. Our platform caters to a wide range of legal needs in Sri Lanka.",
              },
              {
                question: "How are lawyer ratings and reviews managed?",
                answer:
                  "Clients can rate and review lawyers after their cases are completed. All reviews are verified to ensure authenticity and maintain the quality of our platform.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Email: contact@lawlinklk.com</p>
                  <p>Phone: +94 11 234 5678</p>
                  <p>
                    Office Hours:<br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/lawlinklk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-all transform hover:scale-110 duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/lawlinklk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-all transform hover:scale-110 duration-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/lawlinklk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-all transform hover:scale-110 duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 LawLinkLK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
