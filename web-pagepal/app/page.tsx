"use client";
import Link from "next/link";
import Image from "next/image";
// import Sidebar from "@/components/shared/Sidebar";

export default function HomePage() {
  return (
      <main className="w-full flex-1 bg-[#cbd6da] min-h-screen">
        {/* Centered Hero Section */}
        <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            Share Books, <span className="text-[#46525e]">Spread Knowledge</span>
          </h2>
          <p className="max-w-xl text-[#46525e] mb-6">
            A community platform where book lovers can exchange, give away, or rent books directly.
          </p>
          <div className="space-x-4">
            <Link href="/register" className="bg-[#46525e] text-white px-6 py-2 rounded">Login</Link>
            <Link href="/register" className="border border-[#46525e] text-[#46525e] px-6 py-2 rounded">Browse Books</Link>
          </div>
        </section>
      </main>
  );
}
