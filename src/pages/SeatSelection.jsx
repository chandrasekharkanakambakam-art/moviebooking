import { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Seat from "../components/Seat";
import { movies } from "../data/movies";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

const bookedSeats = ["A3", "A4", "C5", "D6", "F2", "G7"];

export default function SeatSelection() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  const show = params.get("show");

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((current) =>
      current.includes(seat)
        ? current.filter((item) => item !== seat)
        : [...current, seat]
    );
  };

  const total = useMemo(
    () => selectedSeats.length * movie.price,
    [selectedSeats, movie.price]
  );

  const continueBooking = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login before booking.");
      navigate("/login");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    navigate(
      `/success?movie=${movie.id}&show=${encodeURIComponent(
        show
      )}&seats=${encodeURIComponent(selectedSeats.join(","))}&total=${total}`
    );
  };

  if (!movie) {
    return (
      <div className="py-20 text-center">
        Movie not found
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Select Your Seats
        </h1>

        <p className="mt-2 text-slate-400">
          {movie.title} • {show}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
        <div className="mb-10">
          <div className="mx-auto h-2 max-w-lg rounded-full bg-slate-300" />
          <p className="mt-3 text-center text-sm text-slate-500">
            SCREEN
          </p>
        </div>

        <div className="space-y-4">
          {rows.map((row) => (
            <div
              key={row}
              className="flex items-center justify-center gap-2 sm:gap-3"
            >
              <span className="w-5 text-sm text-slate-500">
                {row}
              </span>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
                const seat = `${row}${number}`;

                return (
                  <Seat
                    key={seat}
                    seat={seat}
                    selected={selectedSeats.includes(seat)}
                    booked={bookedSeats.includes(seat)}
                    onClick={toggleSeat}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
          <span>🟩 Selected</span>
          <span>⬜ Available</span>
          <span>⬛ Booked</span>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Selected Seats
          </p>

          <p className="font-semibold">
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "No seats selected"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Total Amount
          </p>

          <p className="text-2xl font-bold text-red-400">
            ₹{total}
          </p>
        </div>

        <button
          onClick={continueBooking}
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          Confirm Booking
        </button>
      </div>
    </main>
  );
}