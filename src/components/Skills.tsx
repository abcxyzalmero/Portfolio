'use client';

import { useScrollEffect } from '@/hooks/useScrollEffect';

const Skills = () => {
  const scrollProgress = useScrollEffect('skills');
  
  const skillCategories = [
    {
      title: "Languages",
      skills: ["PHP", "Java", "Python", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Tools",
      skills: ["VS Code", "MySQL", "Git/GitHub", "Bootstrap", "MS Word/Excel"]
    },
    {
      title: "Database",
      skills: ["MySQL", "phpMyAdmin"]
    },
    {
      title: "Development",
      skills: ["Web Dev", "UI/UX Design", "System Design"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Time Management", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl font-bold text-center mb-12 text-white transition-all duration-300"
          style={{
            opacity: 0.3 + scrollProgress * 0.7,
            transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
          }}
        >
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#2a2a2a] rounded-lg p-6 transition-all duration-300"
              style={{
                opacity: 0.3 + scrollProgress * 0.7,
                transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-[#1a1a1a] text-gray-300 rounded-full shadow-sm"
                    style={{
                      opacity: 0.3 + scrollProgress * 0.7,
                      transform: `translateY(${Math.max(0, 10 - scrollProgress * 10)}px)`,
                      transitionDelay: `${skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
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

export default Skills; 