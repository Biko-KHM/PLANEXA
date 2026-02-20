import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [openDialog, setOpenDialog] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef();

  useEffect(() => {
    // favicon & theme setup
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/logo.png";
    document.head.appendChild(favicon);

    document.documentElement.classList.add("transition-colors", "duration-700");

    if (theme === "dark") document.documentElement.classList.add("dark");
    else if (theme === "light") document.documentElement.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      systemDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Hide header on scroll down
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) setHideHeader(true);
      else setHideHeader(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Click outside mobile menu to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const getUserProfile = async (tokenInfo) => {
    try {
      const resp = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        { headers: { Authorization: `Bearer ${tokenInfo?.access_token}`, Accept: "application/json" } }
      );
      localStorage.setItem("user", JSON.stringify(resp.data));
      setUser(resp.data);
      setOpenDialog(false);
      setMobileMenuOpen(false);
    } catch (err) {
      console.error("Failed to fetch profile", err);
    }
  };

  const pendulumRotate = [0, 12, -10, 8, -6, 4, -2, 0];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 lg:px-10 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-sm transition-transform duration-700 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group select-none flex-shrink-0">
        <div className="relative bg-white dark:bg-gray-100 rounded-xl shadow-sm p-0.5 sm:p-1 transition-transform group-hover:scale-105">
          <motion.img
            src="/logo.png"
            alt="PLANEXA Logo"
            className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 object-contain"
            animate={{ rotate: pendulumRotate }}
            transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            style={{ transformOrigin: "50% 0%" }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-blue-600 dark:text-blue-500 group-hover:text-orange-500 transition">
            PLANEXA
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">
            AI Travel Planner
          </span>
        </div>
      </a>

      {/* Desktop Controls */}
      <div className="hidden md:flex items-center gap-4">
        {/* Theme Selector */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform hover:scale-105">
              {theme === "light" ? <Sun className="h-5 w-5 text-yellow-500" /> : theme === "dark" ? <Moon className="h-5 w-5 text-gray-300" /> : <Monitor className="h-5 w-5 text-blue-500" />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-32 flex flex-col space-y-1 text-sm border-gray-200 dark:border-gray-700">
            <button onClick={() => setTheme("light")} className="flex items-center gap-2 hover:text-blue-500"><Sun className="h-4 w-4" /> Light</button>
            <button onClick={() => setTheme("dark")} className="flex items-center gap-2 hover:text-blue-400"><Moon className="h-4 w-4" /> Dark</button>
            <button onClick={() => setTheme("system")} className="flex items-center gap-2 hover:text-green-500"><Monitor className="h-4 w-4" /> System</button>
          </PopoverContent>
        </Popover>

        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/create-trip"><Button variant="outline" className="rounded-full hover:scale-105 transition text-xs sm:text-sm md:text-base">+ Create Trip</Button></a>
            <a href="/my-trips"><Button variant="outline" className="rounded-full hover:scale-105 transition text-xs sm:text-sm md:text-base">My Trips</Button></a>
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture || "/default-avatar.png"} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform object-cover" alt="user" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer hover:text-red-500 transition" onClick={() => { googleLogout(); localStorage.clear(); setUser(null); }}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)} className="bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 hover:scale-105 transition-transform text-xs sm:text-sm md:text-base">
            <FcGoogle className="h-4 sm:h-5 w-4 sm:w-5" /> Sign In
          </Button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-30"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 flex flex-col items-center gap-3 py-4 z-40 shadow-lg"
              ref={mobileMenuRef}
            >
              {/* Theme Selector Mobile */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {theme === "light" ? <Sun className="h-5 w-5 text-yellow-500" /> : theme === "dark" ? <Moon className="h-5 w-5 text-gray-300" /> : <Monitor className="h-5 w-5 text-blue-500" />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-32 flex flex-col space-y-1 text-sm border-gray-200 dark:border-gray-700">
                  <button onClick={() => setTheme("light")} className="flex items-center gap-2 hover:text-blue-500"><Sun className="h-4 w-4" /> Light</button>
                  <button onClick={() => setTheme("dark")} className="flex items-center gap-2 hover:text-blue-400"><Moon className="h-4 w-4" /> Dark</button>
                  <button onClick={() => setTheme("system")} className="flex items-center gap-2 hover:text-green-500"><Monitor className="h-4 w-4" /> System</button>
                </PopoverContent>
              </Popover>

              {user ? (
                <>
                  <a href="/create-trip"><Button variant="outline" className="w-11/12 rounded-full hover:scale-105 transition text-sm">+ Create Trip</Button></a>
                  <a href="/my-trips"><Button variant="outline" className="w-11/12 rounded-full hover:scale-105 transition text-sm">My Trips</Button></a>
                  <Button onClick={() => { googleLogout(); localStorage.clear(); setUser(null); setMobileMenuOpen(false); }} variant="outline" className="w-11/12 rounded-full hover:scale-105 transition text-sm">Logout</Button>
                </>
              ) : (
                <Button onClick={login} className="w-11/12 flex items-center gap-2 justify-center rounded-full hover:scale-105 transition text-sm">
                  <FcGoogle className="h-5 w-5" /> Sign In
                </Button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sign-In Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="text-center">
              <img src="/logo.png" alt="PLANEXA" className="h-10 mx-auto mb-3" />
              <h2 className="font-bold text-lg mt-3">Sign In With Google</h2>
              <p className="text-sm text-gray-500">Sign in securely using Google authentication</p>
              <Button onClick={login} className="w-full mt-5 flex gap-3 items-center justify-center hover:scale-105 transition-transform text-sm sm:text-base">
                <FcGoogle className="h-6 w-6" /> Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
