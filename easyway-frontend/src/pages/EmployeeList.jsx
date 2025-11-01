import { useEffect, useState } from "react";
import API from "../services/api";
import EmployeeCard from "../components/EmployeeCard";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/api/employees")
      .then((res) => setEmployees(res.data.content || res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteEmployee = (id) => {
    if (confirm("Delete this employee?")) {
      API.delete(`/api/employees/${id}`).then(() => {
        setEmployees(employees.filter((e) => e.id !== id));
      });
    }
  };

  return (
    <div className="p-4 bg-blue-400">
      <h2 className="text-2xl font-semibold mb-3 ">Employee Directory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} emp={emp} onDelete={deleteEmployee} />
        ))}
      </div>
    </div>
  );
}
