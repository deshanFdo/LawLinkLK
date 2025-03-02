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
import { AppContext } from "./context/AppContext"; // Import the context

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  // Function to fetch user data (mock implementation)
  const getUserData = async () => {
    // Replace this with your actual logic to fetch user data
    console.log("Fetching user data...");
  };

  return (
    <Router>
      {/* Provide the AppContext to the entire app */}
      <AppContext.Provider
        value={{
          backendUrl: "http://your-backend-url.com", // Replace with your backend URL
          setIsLoggedIn, // Function to update login state
          getUserData, // Function to fetch user data
          isLoggedIn, // Current login state
        }}
      >
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
      </AppContext.Provider>
    </Router>
  );
};

export default App;