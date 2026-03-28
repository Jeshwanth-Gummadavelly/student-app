import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <style>{`
        .contact-container {
          padding: 40px 8%;
          animation: fadeIn 0.6s ease-in-out;
        }

        .contact-container h2 {
          text-align: center;
          font-size: 30px;
          margin-bottom: 30px;
          color: #38bdf8;
        }

        form {
          max-width: 500px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        form input, 
        form textarea {
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: #1e293b;
          color: white;
          outline: none;
          transition: 0.3s;
        }

        form input:focus,
        form textarea:focus {
          box-shadow: 0 0 10px #38bdf8;
        }

        form button {
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(90deg, #2563eb, #6366f1);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        form button:hover {
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default Contact;