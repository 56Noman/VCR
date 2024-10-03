import { NavLink } from "react-router-dom";
import image from "./../assets/logo2.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns={image}
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
              className="lg:ml-20 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <details>
                  <summary>Routine</summary>
                  <ul className="">
                    <li>
                      <a>Teachers Routine</a>
                    </li>
                    <li>
                    <NavLink to="/teachersRoutine">Teachers Routine</NavLink>

                    </li>
                    <li>
                      <NavLink to="/changeRoutine">Change Routine</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contract</a>
              </li>
            </ul>
          </div>
          <div>
            <img width="52px" src={image} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="lg:ml-20 menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Routine</summary>
                <ul className="">
                  <li>
                  <NavLink to="/teachersRoutine">Teachers Routine</NavLink>
                    
                  </li>
                  <li>
                  <NavLink to="/studentsRoutine">Students Routine</NavLink>
                  </li>
                  <li>
                  <NavLink to="/changeRoutine">Change Routine</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contract</a>
            </li>
          </ul>
        </div>

        <div className="ml-28 lg:ml-0">
          <a className="btn btn-success">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
