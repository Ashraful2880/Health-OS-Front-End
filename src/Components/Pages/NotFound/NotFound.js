import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="lg:py-14 py-6 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <div className="error-bg">
          <h1 className="text-center text-7xl font-bold py-6">
            4<span className="text-[#2563eb]">0</span>4
          </h1>
        </div>

        <div>
          <h3 className="text-xl font-semibold -mt-10">
            Look like you're lost
          </h3>
          <p className="\text-sm text-gray-400 mb-6">
            the page you are looking for not avaible!
          </p>

          <Link
            to="/home"
            className="text-white hover:text-[#2563eb] font-semibold px-6 py-2 bg-[#2563eb] hover:bg-white border border-[#2563eb] rounded-md duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
