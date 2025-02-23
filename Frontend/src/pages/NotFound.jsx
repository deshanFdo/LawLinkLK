import { useNavigate } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0066cc] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => navigate("/")} className="btn-primary flex items-center justify-center gap-2">
            <Home size={20} />
            Back to Home
          </button>
          <button onClick={() => navigate(-1)} className="btn-secondary flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

