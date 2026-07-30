const StudentTable = ({ students,setEditingStudent  }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Marks</th>
          <th>Result</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.marks}</td>
            <td
            style={{
                color: student.marks >= 40 ? "green" : "red",
                fontWeight: "bold",
            }}
            >
            {student.marks >= 40 ? "Pass" : "Fail"}
            </td>
            <td>
                <button
                className="edit-btn"
                onClick={() => setEditingStudent(student)}
                >
                Edit
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;