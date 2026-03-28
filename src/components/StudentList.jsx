import "./StudentList.css";

function StudentList({ students }) {
  const showDetails = (student) => {
    alert(
      `Name: ${student.name}
ID: ${student.id}
Branch: ${student.branch}
Email: ${student.email}`
    );
  };

  return (
    <div className="student-grid">
      {students.length === 0 ? (
        <p className="empty">No Students Added Yet</p>
      ) : (
        students.map((student) => (
          <div key={student.id} className="card">
            <h3 onClick={() => showDetails(student)}>
              {student.name}
            </h3>
            <p>{student.branch}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;