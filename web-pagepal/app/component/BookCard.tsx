type BookProps = {
    title: string;
    author: string;
    genre: string;
    location: string;
    imageUrl: string;
    available?: boolean;
  };
  
  export default function BookCard({
    title,
    author,
    genre,
    location,
    imageUrl,
    available = true,
  }: BookProps) {
    return (
      <div className="rounded-xl shadow-md bg-white max-w-xs overflow-hidden border">
        <div className="relative h-40">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          {available && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              Available
            </span>
          )}
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-700">{author}</p>
          <p className="text-xs text-gray-500">Genre: {genre}</p>
          <p className="text-xs text-gray-500">📍 {location}</p>
          <button className="mt-3 w-full bg-purple-600 text-white text-sm rounded-md py-1 hover:bg-purple-700">
            View Details
          </button>
        </div>
      </div>
    );
  }
  