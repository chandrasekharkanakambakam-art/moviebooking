import { useMemo, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import { movies } from "../data/movies";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = [
    "All",
    ...new Set(movies.map((movie) => movie.genre)),
  ];

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        genre === "All" || movie.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-3xl font-bold">Movies</h1>

      <div className="mt-6">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mt-5">
        <GenreFilter
          genres={genres}
          selected={genre}
          setSelected={setGenre}
        />
      </div>

      {filteredMovies.length === 0 ? (
        <div className="py-20 text-center text-slate-400">
          No movies found.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}