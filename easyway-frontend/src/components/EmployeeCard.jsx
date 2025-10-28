import { Link } from "react-router-dom";

export default function EmployeeCard({ emp, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-1">{emp.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{emp.email}</p>
      <p className="text-gray-500 text-sm mb-3">{emp.department}</p>

      <div className="flex space-x-2">
        <Link
          to={`/edit/${emp.id}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(emp.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
