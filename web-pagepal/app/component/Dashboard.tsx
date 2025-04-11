import BookCard from "./BookCard";

const mockBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    location: "New York",
    imageUrl: "/mockingbird.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    location: "Chicago",
    imageUrl: "/gatsby.jpg",
  },
  {
    title: "Find Your Happiness",
    author: "KCR",
    genre: "Fantasy",
    location: "Bangalore, India",
    imageUrl: "/happiness.jpg",
  },
];

export default function Dashboard() {
  return (
    <main className="p-8 bg-[#fef7f3] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
      <p className="text-gray-600 mb-10">Find books and manage your requests.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* User Profile Card */}
        <div className="col-span-1 bg-white p-6 rounded-xl shadow">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold mx-auto">
              A
            </div>
            <h2 className="mt-4 font-semibold">Aman Singh</h2>
            <p className="text-sm text-gray-500">xcriminal369@gmail.com</p>
            <span className="text-xs mt-2 inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded">
              Book Seeker
            </span>
            <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700">
              Find Books
            </button>
          </div>
        </div>

        {/* Book Cards */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBooks.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </main>
  );
}
