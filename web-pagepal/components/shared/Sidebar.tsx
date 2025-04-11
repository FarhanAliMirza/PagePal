"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [bookmarkPosition, setBookmarkPosition] = useState(0);

  // Animate the bookmark movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBookmarkPosition((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        className={`fixed top-0 left-0 h-full w-42 bg-[#46525e] text-white p-4 z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 flex flex-col justify-between`}
      >
        {/* Top Section with SimpleBookPagePal content */}
        <div>
          <div className="mb-6 flex flex-col items-center justify-center p-4 relative">
            {/* Book style block */}
            <div className="bg-indigo-600 rounded-lg p-6 shadow-lg relative">
              <h1 className="text-3xl font-bold text-white">Page Pal</h1>

              {/* Decorative lines */}
              <div className="mt-2 bg-indigo-400 h-1 w-20 rounded-full"></div>
              <div className="mt-2 bg-indigo-400 h-1 w-16 rounded-full"></div>

              {/* Bookmark animation */}
              <div
                className={`absolute -right-2 bg-red-500 w-4 h-12 transition-all duration-1000 ease-in-out rounded-b-lg transform ${
                  bookmarkPosition === 0 ? "-top-2" : "-top-6"
                }`}
              ></div>

              {/* Page fold */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-indigo-400 border-r-transparent transform -translate-y-px"></div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="space-y-6 text-lg">
            <Link href="/" className="block hover:text-purple-300">Home</Link>
            <Link href="/browse" className="block hover:text-purple-300">Browse Books</Link>
            <Link href="/about" className="block hover:text-purple-300">About</Link>
          </nav>
        </div>

        {/* Bottom Exit Button */}
        <div className="mt-10">
          <button
            className="flex items-center space-x-2 text-white hover:text-red-400"
            onClick={() => {
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
