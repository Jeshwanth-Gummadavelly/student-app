import { useState } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [page, setPage] = useState("home");
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const renderPage = () => {
    if (page === "home") {
      return (
        <>
          <h1 className="title">Student Management System</h1>
          <StudentForm addStudent={addStudent} />
          <StudentList students={students} />
        </>
      );
    }
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
  };

  return (
    <>
      <Navbar setPage={setPage} />
      <div className="container">
        {renderPage()}
      </div>
    </>
  );
}

export default App;