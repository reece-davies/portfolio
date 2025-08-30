"use client";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-5">
      <nav className="flex items-center justify-evenly w-80 sm:120 md:w-150 max-w-screen px-6 py-4 rounded-full shadow-md backdrop-blur-md border border-dark-gray">
        {/* Left - Navigation */}
        <div>
          Navigation
        </div>

        {/* Center - Social */}
        <div>
          Social
        </div>
      </nav>
    </div>
  );
}