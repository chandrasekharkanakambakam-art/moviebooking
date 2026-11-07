import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function MovieCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
      <img
        src={movie.image}
        alt={movie.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold">{movie.title}</h2>

          <span className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            {movie.rating}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-400">
          {movie.genre} • {movie.language}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {movie.duration}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">
            ₹{movie.price}
          </span>

          <Link
            to={`/movie/${movie.id}`}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}