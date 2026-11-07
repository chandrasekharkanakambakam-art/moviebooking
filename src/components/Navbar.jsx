import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Film, Ticket } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Film className="text-red-500" />
          <span>
            Cine<span className="text-red-500">Book</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>

          <Link to="/movies" className="hover:text-red-400">
            Movies
          </Link>

          {user && (
            <Link to="/bookings" className="flex items-center gap-1 hover:text-red-400">
              <Ticket size={18} />
              My Bookings
            </Link>
          )}

          {user ? (
            <button
              onClick={logout}
              className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} to="/movies">
              Movies
            </Link>

            {user && (
              <Link onClick={() => setOpen(false)} to="/bookings">
                My Bookings
              </Link>
            )}

            {user ? (
              <button
                onClick={logout}
                className="rounded-lg bg-red-600 px-4 py-2"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={() => setOpen(false)}
                to="/login"
                className="rounded-lg bg-red-600 px-4 py-2 text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}