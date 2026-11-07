export default function Seat({
  seat,
  selected,
  booked,
  onClick,
}) {
  return (
    <button
      disabled={booked}
      onClick={() => onClick(seat)}
      className={`h-9 w-9 rounded-t-lg text-xs font-semibold transition ${
        booked
          ? "cursor-not-allowed bg-slate-700 text-slate-500"
          : selected
          ? "bg-red-600 text-white"
          : "bg-slate-300 text-slate-900 hover:bg-green-400"
      }`}
    >
      {seat}
    </button>
  );
}