import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { movies } from "../data/movies";

export default function BookingSuccess() {
  const [params] = useSearchParams();

  const movie = movies.find(
    (item) => item.id === Number(params.get("movie"))
  );

  const show = params.get("show");
  const seats = params.get("seats")?.split(",") || [];
  const total = Number(params.get("total"));

  const booking = {
    id: Date.now(),
    movie: movie.title,
    movieId: movie.id,
    show,
    seats,
    total,
    date: new Date().toLocaleDateString(),
  };

  const oldBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const exists = oldBookings.some(
    (item) =>
      item.id === booking.id ||
      (item.movieId === booking.movieId &&
        item.show === booking.show &&
        item.seats.join(",") === booking.seats.join(","))
  );

  if (!exists) {
    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, booking])
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <div className="rounded-2xl border border-green-900 bg-slate-900 p-8 text-center">
        <CheckCircle
          className="mx-auto text-green-400"
          size={70}
        />

        <h1 className="mt-5 text-3xl font-bold">
          Booking Confirmed!
        </h1>

        <p className="mt-2 text-slate-400">
          Your movie tickets have been booked successfully.
        </p>

        <div className="mt-8 rounded-xl bg-slate-950 p-5 text-left">
          <p>
            <span className="text-slate-400">Movie:</span>{" "}
            {movie.title}
          </p>

          <p className="mt-3">
            <span className="text-slate-400">Show:</span>{" "}
            {show}
          </p>

          <p className="mt-3">
            <span className="text-slate-400">Seats:</span>{" "}
            {seats.join(", ")}
          </p>

          <p className="mt-3">
            <span className="text-slate-400">Amount:</span>{" "}
            ₹{total}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/bookings"
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold"
          >
            My Bookings
          </Link>

          <Link
            to="/movies"
            className="rounded-lg border border-slate-700 px-6 py-3"
          >
            Browse More Movies
          </Link>
        </div>
      </div>
    </main>
  );
}