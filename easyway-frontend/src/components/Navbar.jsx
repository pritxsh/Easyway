import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../services/authStore";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-xl font-semibold">
          Easyway
        </Link>
        <div className="space-x-4 flex items-center">
          <Link
            to="/employees"
            className={`hover:underline ${pathname === "/employees" ? "font-bold" : ""}`}
          >
            Employees
          </Link>
          <Link
            to="/employees/add"
            className={`hover:underline ${pathname === "/employees/add" ? "font-bold" : ""}`}
          >
            Add Employee
          </Link>
          <span>Welcome, {user?.username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
