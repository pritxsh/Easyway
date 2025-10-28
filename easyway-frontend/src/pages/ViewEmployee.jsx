import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

export default function ViewEmployee() {
  const { id } = useParams();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    API.get(`/employees/${id}`).then((res) => setEmp(res.data));
  }, [id]);

  if (!emp) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{emp.name}</h2>
      <p>Email: {emp.email}</p>
      <p>Department: {emp.department}</p>

      <Link
        to="/"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back
      </Link>
    </div>
  );
}
