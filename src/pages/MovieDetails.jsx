import { Link, useParams } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { movies } from "../data/movies";

export default function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h1 className="text-3xl font-bold">Movie not found</h1>
        <Link
          to="/movies"
          className="mt-5 inline-block text-red-400"
        >
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-[500px] w-full rounded-2xl object-cover"
        />

        <div className="flex flex-col justify-center">
          <span className="text-red-400">{movie.genre}</span>

          <h1 className="mt-2 text-4xl font-bold">
            {movie.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-5 text-slate-400">
            <span className="flex items-center gap-2">
              <Star className="text-yellow-400" size={18} />
              {movie.rating}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={18} />
              {movie.duration}
            </span>

            <span>{movie.language}</span>
          </div>

          <p className="mt-6 leading-7 text-slate-300">
            {movie.description}
          </p>

          <h2 className="mt-8 text-xl font-bold">
            Select Showtime
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {movie.shows.map((show) => (
              <Link
                key={show}
                to={`/seats/${movie.id}?show=${encodeURIComponent(show)}`}
                className="rounded-lg border border-slate-700 px-4 py-3 text-center hover:border-red-500 hover:bg-red-600"
              >
                {show}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}