import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import ViewEmployee from "./pages/ViewEmployee";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/view/:id" element={<ViewEmployee />} />
        </Routes>
      </div>
    </div>
  );
}
