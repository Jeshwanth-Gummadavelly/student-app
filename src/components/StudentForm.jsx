import { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    branch: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);

    setFormData({
      name: "",
      id: "",
      branch: "",
      email: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
      <input name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;