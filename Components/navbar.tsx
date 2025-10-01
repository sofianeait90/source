"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1F2A45] text-white  fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo2.png"
              alt="HaylanCare Logo"
              width={160}
              height={80}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-green-400 transition">
              Visit
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              About
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              FAQ
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2A45] px-4 pb-4 space-y-2">
          <Link href="#" className="block hover:text-green-400 transition">
            Visit
          </Link>
          <Link href="#" className="block hover:text-green-400 transition">
            About
          </Link>
          <Link href="#" className="block hover:text-green-400 transition">
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
