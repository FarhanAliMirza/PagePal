"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <div className="text-xl font-bold text-purple-600">📚 BookSwap</div>
      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/browse">Browse Books</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <div className="ml-4 space-x-2">
          <Link href="/login">
            <button className="px-4 py-1 border rounded-md">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
