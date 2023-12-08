import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import Movies from "./components/Movies";
import Signup from "./pages/Signup";

export default function App() {
  const location = useLocation();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Check if the current path name is "/signin" or "/signup"
    const isLoginPage =
      location.pathname === "/signin" || location.pathname === "/signup";
    setLogin(isLoginPage);
  }, [location]);

  return (
    <>
      <AuthContextProvider>
        <Navbar login={login} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}
