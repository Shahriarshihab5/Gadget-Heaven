import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white px-6">
      <h1 className="text-9xl font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        The page you are looking for doesn’t exist or has been moved. Let's get you back home.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white !text-purple-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
      >
        Go Home
      </button>
      <div className="mt-12">
        <img
          src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090180.jpg"
          alt="404 illustration"
          className="w-80 md:w-[500px] opacity-80"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
