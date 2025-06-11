'use client';

import { useScrollEffect } from '@/hooks/useScrollEffect';

const Projects = () => {
  const scrollProgress = useScrollEffect('projects');
  
  const projects = [
    {
      title: "Blind Vision: Mobile Obstacle Detection",
      role: "Capstone Leader",
      description: "An award-winning capstone project aimed at empowering the visually impaired through mobile obstacle detection technology.",
      tags: ["Mobile Development", "Computer Vision", "Accessibility"],
      image: "/projects/blind-vision.jpg"
    },
    {
      title: "DMSFI LEARNING RESOURCES CENTER Attendance System",
      role: "Developer",
      description: "A comprehensive attendance management system for the Local Civil Registry office.",
      tags: ["Web Development", "System Design", "Database Management"],
      image: "/projects/lcr-system.jpg"
    },
    {
      title: "DMSFI Audit System",
      role: "Developer",
      description: "An internal audit management system for streamlining and automating audit processes.",
      tags: ["System Development", "Process Automation", "Reporting"],
      image: "/projects/audit-system.jpg"
    },
    {
      title: "DMSFI Library Forms",
      role: "Developer",
      description: "Digital transformation of library forms and processes for improved efficiency.",
      tags: ["Web Development", "Form Design", "Process Optimization"],
      image: "/projects/library-forms.jpg"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl font-bold text-center mb-12 text-white transition-all duration-300"
          style={{
            opacity: 0.3 + scrollProgress * 0.7,
            transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
          }}
        >
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              style={{
                opacity: 0.3 + scrollProgress * 0.7,
                transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: `blur(${Math.max(0, 8 - scrollProgress * 8)}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 