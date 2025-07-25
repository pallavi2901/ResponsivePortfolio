const Projects = () => {
  const projects = [
    {
      title: "Kemae – E-commerce Website",
      description: "A fully responsive e-commerce web application with product listings, cart functionality, and secure checkout. Built using React, MongoDB, and Node.js.",
      tech: ["MERN", "React", "Express", "MongoDB"],
    },
    {
      title: "Edu-Timely Organizer",
      description: "A smart productivity suite for students featuring a calendar, Pomodoro timer, notes, agenda, and grade tracker. Built using the MERN stack.",
      tech: ["MERN", "React", "Node.js"],
    },
    {
      title: "Friends-Only Chat App",
      description: "A secure, real-time messaging app for close connections. Includes QR-based friend addition, animated UI, and private reels.",
      tech: ["MERN", "Socket.io", "Lottie"],
    },
    {
      title: "AI Resume Generator",
      description: "An intelligent resume builder supporting multiple templates, multilingual translation, and DOCX/PDF export.",
      tech: ["MERN", "JSX", "PDFMake"],
    },
    {
      title: "University Bus Tracker",
      description: "Live tracking system for university buses showing real-time arrival updates and routes, enhancing student transport efficiency.",
      tech: ["MERN", "Map APIs", "Socket.io"],
    },
    {
      title: "Developer Portfolio",
      description: "My 3D animated portfolio built with Vite + React, featuring interactive visuals, email integration, and a custom design.",
      tech: ["React", "Three.js", "EmailJS"],
    },
  ];

  return (
    <section className="min-h-screen px-4 py-10 bg-transparent text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
            <p className="mt-2 text-white">{proj.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm bg-white bg-opacity-30 text-white rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
