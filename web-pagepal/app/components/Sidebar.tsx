"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-4">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-42 bg-[#46525e] text-white p-6 z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-white">BookSwap</h1>
          </div>

          <nav className="space-y-6">
            <Link href="/" className="block hover:text-purple-300">Home</Link>
            <Link href="/browse" className="block hover:text-purple-300">Browse Books</Link>
            <Link href="/about" className="block hover:text-purple-300">About</Link>
          </nav>
        </div>

        {/* Bottom Logout/Exit Button */}
        <div className="mt-10">
          <button
            className="flex items-center space-x-2 text-white hover:text-red-400"
            onClick={() => {
              // you can add logout logic here if needed
              alert("Logged out!");
            }}
          >
            <LogOut size={20} />
            <span>Exit</span>
          </button>
        </div>
      </aside>
    </>
  );
}
