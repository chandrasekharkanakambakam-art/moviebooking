export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold">
            Cine<span className="text-red-500">Book</span>
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Your simple and reliable movie ticket booking application.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
            <a href="/bookings">My Bookings</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>

          <p className="mt-3 text-sm text-slate-400">
            Email: support@cinebook.com
          </p>

          <p className="text-sm text-slate-400">
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © 2026 CineBook. All rights reserved.
      </div>
    </footer>
  );
}