
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary animate-fade-in">
              LawLinkLK
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'features', label: 'Features' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Contact Us' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary transition-colors transform hover:scale-105 duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-all transform hover:scale-105 duration-200 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
