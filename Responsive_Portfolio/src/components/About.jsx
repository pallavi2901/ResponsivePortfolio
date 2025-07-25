const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-white px-4">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I'm <strong>Pallavi</strong>, a passionate Computer Science & Engineering student deeply interested in Web Development, Artificial Intelligence, Machine Learning, and System Programming.
          I love blending classic UI/UX with modern innovations like 3D animations, bare-metal OS, and intelligent systems.
        </p>
        <p className="mt-4 text-md leading-relaxed">
          Some of the major projects I’ve worked on include:
          <br />
          <strong>• E-commerce Website</strong><br />
          <strong>• EduTimely</strong> – A Smart Student Planner with Calendar, To-do, Pomodoro, and Grade Tracker<br />
          <strong>• Responsive Portfolio</strong> – Built using React + Vite with 3D scenes and clean animations<br />
          <strong>• University Bus Tracking App</strong> – Real-time location-based system using the MERN Stack
        </p>
        <p className="mt-4 text-md leading-relaxed">
          I also actively contribute to open-source projects and love building visually appealing and user-friendly interfaces.
        </p>
      </div>
    </section>
  );
};

export default About;
