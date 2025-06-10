const Projects = () => {
  const projects = [
    {
      title: "Blind Vision: Mobile Obstacle Detection",
      role: "Capstone Leader",
      description: "An award-winning capstone project aimed at empowering the visually impaired through mobile obstacle detection technology.",
      tags: ["Mobile Development", "Computer Vision", "Accessibility"]
    },
    {
      title: "DMSFI LCR Attendance System",
      role: "Developer",
      description: "A comprehensive attendance management system for the Local Civil Registry office.",
      tags: ["Web Development", "System Design", "Database Management"]
    },
    {
      title: "DMSFI Audit System",
      role: "Developer",
      description: "An internal audit management system for streamlining and automating audit processes.",
      tags: ["System Development", "Process Automation", "Reporting"]
    },
    {
      title: "DMSFI Library Forms",
      role: "Developer",
      description: "Digital transformation of library forms and processes for improved efficiency.",
      tags: ["Web Development", "Form Design", "Process Optimization"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#60a5fa] mb-3">
                {project.role}
              </p>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-[#2a2a2a] text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 