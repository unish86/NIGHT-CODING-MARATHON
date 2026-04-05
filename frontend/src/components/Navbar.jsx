import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
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
              <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm sm:inline">
                {user?.name}
              </span>
              <button
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                onClick={handleLogout}
              >
                Logout
              </button>
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
