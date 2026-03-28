function About() {
  return (
    <>
      <div className="about-container">
        <h2>About StudentApp</h2>
        <p>
          StudentApp is a modern Student Management System built using React.
          It allows dynamic student addition, clean UI rendering and interactive components.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>⚡ Fast</h3>
            <p>Built using Vite + React for blazing fast performance.</p>
          </div>

          <div className="about-card">
            <h3>🎨 Modern UI</h3>
            <p>Dark theme with glassmorphism and smooth hover effects.</p>
          </div>

          <div className="about-card">
            <h3>📚 Scalable</h3>
            <p>Component-based architecture for easy expansion.</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          padding: 40px 8%;
          color: white;
          animation: fadeIn 0.6s ease-in-out;
        }

        .about-container h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #38bdf8, #6366f1);
          -webkit-background-clip: text;
          color: transparent;
        }

        .about-container p {
          text-align: center;
          max-width: 700px;
          margin: auto;
          margin-bottom: 40px;
          color: #cbd5e1;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .about-card {
          background: linear-gradient(145deg, #1e293b, #0f172a);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 5px 5px 15px #0a0f1d,
                      -5px -5px 15px #1e293b;
          transition: 0.3s;
        }

        .about-card:hover {
          transform: translateY(-10px) scale(1.03);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default About;