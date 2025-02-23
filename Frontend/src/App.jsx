import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import NotFound from "./pages/NotFound"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ClientDashboard from "./pages/client/Dashboard"
import LawyerDashboard from "./pages/lawyer/Dashboard"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/lawyer/dashboard" element={<LawyerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

