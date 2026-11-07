import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email and password.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: form.email.split("@")[0],
        email: form.email,
      })
    );

    navigate("/");
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-5">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-7"
      >
        <h1 className="text-3xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-slate-400">
          Login to book your movie tickets.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="mt-7 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-red-500"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-red-600 py-3 font-semibold hover:bg-red-700"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-400">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}