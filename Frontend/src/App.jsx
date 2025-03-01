// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/home/components/HowItWorks";
import NotFound from "./pages/NotFound";
import ClientLogin from "./pages/auth/ClientLogin/ClientLogin";
import LawyerLogin from "./pages/auth/LawyerLogin/LawyerLogin";
import Register from "./pages/auth/Registration/Registration";
import CookiePopup from "./components/CookiePopup";
import LoadingScreen from "./pages/loading/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show LoadingScreen while loading */}
      {isLoading && <LoadingScreen />}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/auth/client-login" element={<ClientLogin />} />
            <Route path="/auth/lawyer-login" element={<LawyerLogin />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookiePopup />
          {/* ToastContainer for displaying popups */}
          <ToastContainer
            position="top-right"
            autoClose={3000} // Close popups after 3 seconds
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </Router>
  );
};

export default App;