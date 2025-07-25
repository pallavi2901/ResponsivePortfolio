// const Skills = () => {
//     const skills = [
//       "HTML", "CSS", "JavaScript", "React", "C", "C++", "Java", "Python",
//       "Machine Learning", "Data Mining", "MySQL", "Git", "Linux", "Vite"
//     ];
  
//     return (
//       <section className="text-center">
//         <h2 className="text-4xl font-bold mb-8 text-white">My Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 text-center w-32 h-32 flex items-center justify-center text-lg font-semibold text-white hover:scale-105 transition-transform"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default Skills;
  const Skills = () => {
  const skills = [
    "Java", "Python", "C++", "MERN", "React", "Node.js", "MongoDB", "Express.js",
    "HTML", "CSS", "JavaScript", "Data Structures", "Algorithms", "Git", "Linux"
  ];

  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 text-center w-32 h-32 flex items-center justify-center text-lg font-semibold text-white hover:scale-105 transition-transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
