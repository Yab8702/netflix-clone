// import Navbar from "./Navbar";
// import Home from "../pages/Home";
// import Profile from "../pages/Profile";
// import SignIn from "../pages/SignIn";
// import Signup from "../pages/SignUp";
import { Routes, Route } from "react-router-dom";
import HeaderContent from "./HeaderContent";
import HeaderBottom from "./HeaderBottom";
// import Hero from "./Hero";
export default function Header() {
  return (
    <header className="header w-full h-screen ">
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <HeaderContent />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
      <HeaderBottom />
    </header>
  );
}
