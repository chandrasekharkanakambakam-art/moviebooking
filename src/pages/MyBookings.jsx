import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";

export default function MyBookings() {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const cancelBooking = (id) => {
    const updated = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <h1 className="text-3xl font-bold">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="py-20 text-center">
          <Ticket
            className="mx-auto text-slate-600"
            size={60}
          />

          <h2 className="mt-5 text-xl font-semibold">
            No bookings yet
          </h2>

          <p className="mt-2 text-slate-400">
            Start booking your favorite movies.
          </p>

          <Link
            to="/movies"
            className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-3"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="mt-7 space-y-5">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex flex-col justify-between gap-5 sm:flex-row">
                <div>
                  <h2 className="text-xl font-bold">
                    {booking.movie}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Show: {booking.show}
                  </p>

                  <p className="mt-1 text-slate-400">
                    Seats: {booking.seats.join(", ")}
                  </p>

                  <p className="mt-1 text-slate-400">
                    Booking Date: {booking.date}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <p className="text-xl font-bold text-red-400">
                    ₹{booking.total}
                  </p>

                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="mt-4 rounded-lg border border-red-600 px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}