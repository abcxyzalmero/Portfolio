const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Xurhiel May Navarette Almero
            </h3>
            <p className="text-lg text-gray-300">
              Bachelor of Science in Information Technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Education</h4>
              <p className="text-gray-300">
                Graduated with a Bachelor of Science in Information Technology, 
                focusing on software development and system design.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Personal Values</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Continuous Learning</li>
                <li>Innovation & Creativity</li>
                <li>Empathy & User-Centric Design</li>
                <li>Problem-Solving Excellence</li>
                <li>Collaborative Leadership</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-300 italic">
              "Passionate about creating technology that makes a difference in people's lives"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 