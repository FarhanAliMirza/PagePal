"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-purple-600">BookSwap</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/browse">Browse Books</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="border px-4 py-1 rounded">Login</Link>
          <Link href="/signup" className="bg-purple-500 text-white px-4 py-1 rounded">Sign Up</Link>
        </nav>
      </header>

      <section className="text-center bg-purple-50 py-20">
        <h2 className="text-4xl font-extrabold">Share Books, <span className="text-purple-600">Spread Knowledge</span></h2>
        <p className="mt-4 max-w-lg mx-auto">A community platform where book lovers can exchange, give away, or rent books directly.</p>
        <div className="mt-6 space-x-4">
          <Link href="/signup" className="bg-purple-600 text-white px-6 py-2 rounded">Join the Community</Link>
          <Link href="/browse" className="border px-6 py-2 rounded">Browse Books</Link>
        </div>
      </section>

      <section className="bg-[#fff8f3] p-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Recently Added Books</h3>
          <Link href="/browse" className="text-purple-600">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-4">
            <Image src="/book1.jpg" alt="Book" width={300} height={200} className="rounded mb-2" />
            <h4 className="font-bold">To Kill a Mockingbird</h4>
            <p className="text-sm text-gray-600">Harper Lee — New York</p>
            <Link href="/login" className="mt-2 inline-block bg-purple-500 text-white px-4 py-1 rounded">View Details</Link>
          </div>
        </div>
      </section>
    </div>
  );
}