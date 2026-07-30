import { useEffect, useState } from "react";
import axios from "axios";
import "./StudentForm.css";
import "./StudentTable.css";
const StudentForm = ({
  fetchStudents,
  editingStudent,
  setEditingStudent,
}) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    marks: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent({
        name: editingStudent.name,
        email: editingStudent.email,
        course: editingStudent.course,
        marks: editingStudent.marks,
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingStudent) {
        // UPDATE Student
        await axios.put(
          `http://localhost:5000/students/${editingStudent._id}`,
          student
        );

        
      } else {
        // ADD Student
        await axios.post(
          "http://localhost:5000/students",
          student
        );

        console.log("Student added successfully");
      }

      // Refresh table
      fetchStudents();

      // Clear form
      setStudent({
        name: "",
        email: "",
        course: "",
        marks: "",
      });

      // Exit edit mode
      setEditingStudent(null);

    } catch (err) {
      console.log("Something went wrong");
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="marks"
        placeholder="Marks"
        value={student.marks}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <>
          {" "}
          <button
            type="button"
            onClick={() => {
              setEditingStudent(null);

              setStudent({
                name: "",
                email: "",
                course: "",
                marks: "",
              });
            }}
          >
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

export default StudentForm;