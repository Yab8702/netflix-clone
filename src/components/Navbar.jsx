import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
export default function Navbar({ login }) {
  const { user, logout } = UserAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const navbarStyle = {
    backgroundColor: show ? "#111" : "transparent",
    transition: "all 0.5s ease",
  };
  return (
    <div
      className="fixed w-full p-4 flex items-center justify-between z-50"
      style={navbarStyle}
    >
      <div>
        <h1 className="p-4 ml-4">
          <Link to={login ? "/" : "#"}>
            <img
              src={logo}
              alt=""
              className="w-1/4  lg:w-2/4 sm:w-1/4 max-w-full"
            />
          </Link>
        </h1>
      </div>
      {user?.email ? (
        <div className="flex items-center">
          <h1 className="capitalize text-white mr-4 ">{user.email}</h1>
          <Link to="/">
            <button
              className="capitalize bg-red-600 px-6 py-1 rounded cursor-pointer"
              onClick={() => logout().then(() => navigate("/"))}
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="capitalize bg-red-600 px-6 py-1 rounded cursor-pointer">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
