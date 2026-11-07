import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-red-950 to-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-red-400">
              YOUR MOVIE EXPERIENCE
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Book Your
              <span className="text-red-500"> Favorite Movies</span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-300">
              Discover movies, select your preferred showtime,
              choose your seats and book tickets in just a few clicks.
            </p>

            <Link
              to="/movies"
              className="mt-8 inline-block rounded-xl bg-red-600 px-7 py-3 font-semibold hover:bg-red-700"
            >
              Browse Movies
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-4">
            <img
              src={movies[0].image}
              alt="Movie"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Popular Movies</h2>
            <p className="mt-2 text-slate-400">
              Watch the latest movies in theatres.
            </p>
          </div>

          <Link
            to="/movies"
            className="text-red-400 hover:text-red-300"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}