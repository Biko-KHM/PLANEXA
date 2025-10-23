import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import plane3d from "/plane3d.png";
import landing from "/landing.png";

function Hero() {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 md:px-24 overflow-hidden transition-all duration-700
      bg-gradient-to-b from-[#e3f2fd] via-[#ffffff] to-[#ffedd5] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]`}
    >
      {/* Title */}
      <motion.h1
        className={`font-extrabold text-4xl md:text-6xl text-center mt-36 text-gray-700 dark:text-gray-200`}
        // ⬆ Increased margin-top so it sits fully below header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-amber-300">
          Discover Your Next Adventure with AI:
        </span>
        <br />
        Personalized Itineraries at Your Fingertips
      </motion.h1>

      {/* Description */}
      <motion.p
        className={`text-lg md:text-xl text-center mt-6 max-w-2xl text-gray-700 dark:text-gray-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Your personal travel curator — building seamless, smart, and stunning
        journeys tailored to your dreams and budget.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
      >
        <Link to="/create-trip">
          <Button className="px-8 py-3 text-lg rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Get Started — It’s Free
          </Button>
        </Link>
      </motion.div>

      {/* Main Illustration */}
      <motion.img
        src={landing}
        alt="AI Travel Landing"
        className="mt-16 w-full max-w-5xl object-contain drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      />

      {/* ✈️ Plane animation (diagonal, slightly higher) */}
      <motion.img
        src="/plane3d.png"
        alt="plane"
        className="absolute bottom-10 left-[-100px] w-32 md:w-48 pointer-events-none select-none"
        animate={{
          x: [0, "110vw"],
          y: [0, "-150px", "-220px"],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default Hero;