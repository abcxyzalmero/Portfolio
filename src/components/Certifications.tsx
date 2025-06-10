const Certifications = () => {
  const certifications = [
    {
      title: "2nd Runner-Up, Capstone Exhibition 2024–2025",
      type: "Achievement"
    },
    {
      title: "Research Capstone Exhibit – Presenter",
      type: "Achievement"
    },
    {
      title: "Capstone Writing Seminar 1 & 2",
      type: "Certification"
    },
    {
      title: "MCITS 2024",
      type: "Certification"
    },
    {
      title: "Learn Python Programming Masterclass: Python 3 in 2025",
      type: "Course"
    },
    {
      title: "Python Complete Course & Flask Framework, HTML Essentials",
      type: "Course"
    },
    {
      title: "Git & GitHub for Beginners",
      type: "Course"
    },
    {
      title: "CSS and JavaScript Complete Course",
      type: "Course"
    },
    {
      title: "Python GUI Development with Tkinter",
      type: "Course"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications & Achievements</h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">
                  {cert.title}
                </h3>
                <span className="px-3 py-1 text-sm bg-[#2a2a2a] text-[#60a5fa] rounded-full">
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 