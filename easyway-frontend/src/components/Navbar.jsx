import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-xl font-semibold">
          Easyway
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className={`hover:underline ${pathname === "/" ? "font-bold" : ""}`}
          >
            Employees
          </Link>
          <Link
            to="/add"
            className={`hover:underline ${pathname === "/add" ? "font-bold" : ""}`}
          >
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
}
