


import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      {}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-500 mb-6">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Your Order is Placed!
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for ordering. We’re preparing your food!
      </p>

      <button
        onClick={() => navigate("/foods")}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Back to Menu
      </button>
    </div>
  );
};

export default OrderSuccess;
