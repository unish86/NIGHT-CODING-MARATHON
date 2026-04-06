import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive(path)
        ? "bg-slate-900 text-white shadow-sm"
        : "text-slate-600 hover:bg-white hover:text-orange-500"
    }`;

  const handleLogout = () => {
    setShowProfile(false);
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white shadow-lg shadow-slate-900/15">
            NC
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Night Coding
            </p>
            <p className="text-sm font-semibold text-slate-900">Interview Prep Studio</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 rounded-full bg-slate-100/80 p-1.5">
          <Link className={linkClasses("/")} to="/">
            Home
          </Link>

          {isAuthenticated ? (
            <>
              <Link className={linkClasses("/dashboard")} to="/dashboard">
                Dashboard
              </Link>
              <div className="relative">
                <button
                  type="button"
                  aria-expanded={showProfile}
                  aria-label="Open profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-orange-300 hover:text-orange-500"
                  onClick={() => setShowProfile((prev) => !prev)}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 21a7 7 0 0 0-14 0" />
                    <circle cx="12" cy="8" r="4" />
                  </svg>
                </button>

                {showProfile ? (
                  <div className="absolute right-0 top-14 w-72 rounded-3xl border border-white/80 bg-white/95 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {user?.name || "User"}
                        </p>
                        <p className="text-sm text-slate-500">
                          {user?.email || "No email available"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                      Signed in to continue your interview prep.
                    </div>

                    <button
                      className="mt-4 w-full rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <Link className={linkClasses("/login")} to="/login">
                Login
              </Link>
              <Link
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
