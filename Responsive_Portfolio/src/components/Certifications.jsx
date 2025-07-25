const Certifications = () => {
  const certificates = [
    { title: "Python Essentials 1 & 2", issuer: "Cisco / NDG", date: "2024" },
    { title: "CCNA: Enterprise Networking", issuer: "Cisco", date: "2024" },
    { title: "NPTEL: Leadership & Team Effectiveness", issuer: "NPTEL", date: "2024" },
    { title: "Preliminary English Test (PET – A2 Level)", issuer: "Cambridge University", date: "2023" },
    { title: "Linguaskill (Score: 593/600)", issuer: "Cambridge English", date: "2024" },
    { title: "Internshala Java Internship", issuer: "Internshala", date: "Aug 2024" },
    { title: "Stack Hack 2024", issuer: "Hackathon Participant", date: "2024" },
    { title: "Vignan Mahotsav 2024", issuer: "Event Coordinator (Certified)", date: "2024" },
  ];

  return (
    <section className="min-h-screen px-4 py-10 bg-transparent text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="border border-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-white bg-opacity-20 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p className="text-sm">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
