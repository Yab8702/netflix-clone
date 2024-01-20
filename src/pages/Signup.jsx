import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Signup() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const checkEmailRegistered = async (email) => {
    // Implement your logic to check if email is already registered
  };

  const handleSubmit = async (e) => {
    setSubmit(true);
    e.preventDefault();
    try {
      if (email !== "" && password !== "" && confirmPassword !== "") {
        // Check if email is not already registered
        const isEmailRegistered = await checkEmailRegistered(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          !isEmailRegistered &&
          password === confirmPassword &&
          password.length >= 6 &&
          emailRegex.test(email)
        ) {
          await signUp(email, password);
          navigate("/movies");
        } else {
          setError("Invalid email or password >6");
        }
      } else {
        setError("Field cannot be empty");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="w-full h-screen header">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <form
            className="bg-black/80 shadow-lg rounded px-12 pt-6 pb-8 mb-4"
            style={{ height: "550px", padding: "40px", margin: "20px" }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl text-left font-bold mb-8">Sign Up</h1>
            <div className="erro">
              <span className="text-red-500 text-sm">{submit && error}</span>
            </div>

            <div className="mb-8">
              <input
                className="shadow appearance-none border rounded w-full py-4 px-6 text-white-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700"
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <input
                className="shadow appearance-none border rounded w-full py-4 px-6 text-white-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <input
                className="shadow appearance-none border rounded w-full py-4 px-6 text-white-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700"
                id="ConfirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-start">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                type="submit"
                disabled
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-between mb-4 mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-blue-600"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <span className="ml-4 text-gray-300 text-lg">Remember Me</span>
              </label>
              <Link to="#" className="text-lg">
                Need help?
              </Link>
            </div>
            <div className="flex items-center justify-start">
              <span className="text-gray-300 text-lg">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
