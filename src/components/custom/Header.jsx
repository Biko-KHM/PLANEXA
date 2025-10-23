import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [openDialog, setOpenDialog] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    // ✅favicon/logo as loading icon
    const favicon =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/logo.png";
    document.head.appendChild(favicon);

    document.documentElement.classList.add("transition-colors", "duration-700");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const getUserProfile = async (tokenInfo) => {
    try {
      const resp = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(resp.data));
      setUser(resp.data);
      setOpenDialog(false);
    } catch (err) {
      console.error("Failed to fetch profile", err);
    }
  };

  const pendulumRotate = [0, 12, -10, 8, -6, 4, -2, 0];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-2 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 
      backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-sm transition-all duration-700"
    >
      {/* Logo */}
      <a href="/" className="flex flex-col items-center group select-none">
        <motion.img
          src="/logo.png"
          alt="PLANEXA Logo"
          className="h-8 md:h-10 w-auto object-contain"
          animate={{ rotate: pendulumRotate }}
          transition={{
            duration: 3.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ transformOrigin: "50% 0%" }}
        />
        <span className="mt-1 text-base md:text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-200 group-hover:text-orange-500 transition">
          PLANEXA
        </span>
      </a>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Theme Selector */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform hover:scale-105"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : theme === "dark" ? (
                <Moon className="h-5 w-5 text-gray-300" />
              ) : (
                <Monitor className="h-5 w-5 text-blue-500" />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-32 flex flex-col space-y-1 text-sm border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setTheme("light")}
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <Sun className="h-4 w-4" /> Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Moon className="h-4 w-4" /> Dark
            </button>
            <button
              onClick={() => setTheme("system")}
              className="flex items-center gap-2 hover:text-green-500"
            >
              <Monitor className="h-4 w-4" /> System
            </button>
          </PopoverContent>
        </Popover>

        {/* Auth + Navigation */}
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button
                variant="outline"
                className="rounded-full hover:scale-105 transition"
              >
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button
                variant="outline"
                className="rounded-full hover:scale-105 transition"
              >
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture || "/default-avatar.png"}
                  className="h-[32px] w-[32px] rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform object-cover"
                  alt="user"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer hover:text-red-500 transition"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    setUser(null);
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => setOpenDialog(true)}
            className="bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FcGoogle className="h-5 w-5" />
            Sign In
          </Button>
        )}
      </div>

      {/* Sign-In Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="text-center">
              <img
                src="/logo.png"
                alt="PLANEXA"
                className="h-10 mx-auto mb-3"
              />
              <h2 className="font-bold text-lg mt-3">Sign In With Google</h2>
              <p className="text-sm text-gray-500">
                Sign in securely using Google authentication
              </p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-3 items-center justify-center hover:scale-105 transition-transform"
              >
                <FcGoogle className="h-6 w-6" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;