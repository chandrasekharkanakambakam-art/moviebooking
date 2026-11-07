export default function GenreFilter({ genres, selected, setSelected }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelected(genre)}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
            selected === genre
              ? "bg-red-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}