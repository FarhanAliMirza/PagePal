"use client";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fff8f3]">
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-purple-600">BookSwap</h1>
        <div className="space-x-4">
          <span>Hello, Aman Singh</span>
          <button className="border px-4 py-1 rounded">Logout</button>
        </div>
      </header>

      <main className="p-8">
        <h2 className="text-3xl font-bold mb-2">Your Dashboard</h2>
        <p className="mb-8">Find books and manage your requests.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold mx-auto">A</div>
            <h3 className="font-bold mt-4">Aman Singh</h3>
            <p className="text-sm">xcriminal369@gmail.com</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-purple-100 rounded-full">Book Seeker</span>
            <button className="mt-4 block w-full bg-purple-500 text-white py-2 rounded">Find Books</button>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold">Recently Added Books</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded shadow overflow-hidden">
                <Image src="/book1.jpg" alt="Book" width={600} height={400} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">To Kill a Mockingbird</h4>
                  <p className="text-sm">Harper Lee — New York</p>
                  <button className="mt-2 w-full bg-purple-500 text-white py-1 rounded">View Details</button>
                </div>
              </div>
              {/* Add more cards as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
