import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AddEmployee() {
  const [emp, setEmp] = useState({ name: "", email: "", department: "", salary: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setEmp({ ...emp, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/employees", emp)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4" >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={emp.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={emp.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={emp.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

         <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={emp.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}
