"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";
import { Link } from "react-scroll";

const navLinks = [
  { title: "Home", path: "home" },
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "email" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-[#121212]/80 backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* BRAND */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className="text-xl font-semibold text-white cursor-pointer"
          >
            Ro.dev
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-white"
            >
              {navbarOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md">
          <MenuOverLay links={navLinks} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
