import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listed-books">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/pages-to-read">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listed-books">Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="/pages-to-read">Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
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
