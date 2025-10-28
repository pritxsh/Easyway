import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [emp, setEmp] = useState({ name: "", email: "", department: "" , salary: ""});

  useEffect(() => {
    API.get(`/employees/${id}`).then((res) => setEmp(res.data));
  }, [id]);

  const handleChange = (e) =>
    setEmp({ ...emp, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.put(`/employees/${id}`, emp)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={emp.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={emp.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="department"
          value={emp.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="salary"
          value={emp.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update
        </button>
      </form>
    </div>
  );
}
