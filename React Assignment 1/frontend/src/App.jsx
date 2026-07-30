import { useEffect, useState } from "react";
import axios from "axios";

import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Result Management</h1>

      <StudentForm
        fetchStudents={fetchStudents}
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />

      <StudentTable
        students={students}
        setEditingStudent={setEditingStudent}
      />
    </div>
  );
}

export default App;