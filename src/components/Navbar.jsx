import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

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
                    ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "py-2 px-4 rounded-md "
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/listed-books"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "py-2 px-4 rounded-md "
                }
              >
                Listed Books
              </NavLink>

              <NavLink
                to="/pages-to-read"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "py-2 px-4 rounded-md "
                }
              >
                Pages to Read
              </NavLink>

              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "py-2 px-4 rounded-md "
                }
              >
                Blogs
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                    : "py-2 px-4 rounded-md "
                }
              >
                Contact Us
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
                  ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "py-2 px-4 rounded-md "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "py-2 px-4 rounded-md "
              }
            >
              Listed Books
            </NavLink>

            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : `py-2 px-4 rounded-md`
              }
            >
              Pages to Read
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "py-2 px-4 rounded-md "
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 rounded-md text-green-500 border border-green-500"
                  : "py-2 px-4 rounded-md "
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className="gap-4 navbar-end">
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="dark"
                className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
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
