import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container mx-auto my-5">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-3 btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 gap-4 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "text-black py-2 px-4 rounded-md"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/listed-books"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "text-black py-2 px-4 rounded-md"
                }
              >
                Listed Books
              </NavLink>

              <NavLink
                to="/pages-to-read"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "text-black py-2 px-4 rounded-md"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-4 px-1 text-xl menu menu-horizontal">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "text-black py-2 px-4 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "text-black py-2 px-4 rounded-md"
              }
            >
              Listed Books
            </NavLink>

            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "text-black py-2 px-4 rounded-md"
              }
            >
              Pages to Read
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "text-black py-2 px-4 rounded-md"
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "text-black py-2 px-4 rounded-md"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="gap-4 navbar-end">
          <a className="btn bg-[#23BE0A] text-white hover:bg-[#49a13c]">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white hover:bg-[#489fa8]">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
