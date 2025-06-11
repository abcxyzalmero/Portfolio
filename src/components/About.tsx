'use client';

import { useScrollEffect } from '@/hooks/useScrollEffect';

const About = () => {
  const scrollProgress = useScrollEffect('about');

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl font-bold text-center mb-12 text-white transition-all duration-300"
          style={{
            opacity: 0.3 + scrollProgress * 0.7,
            transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
          }}
        >
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div 
              className="aspect-square rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                filter: `blur(${Math.max(0, 8 - scrollProgress * 8)}px)`,
                transform: `scale(${1 + scrollProgress * 0.05})`,
              }}
            >
              <img
                src="/about-photo.jpg"
                alt="Xurhiel May Navarette Almero"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#60a5fa] rounded-full opacity-20 blur-2xl transition-all duration-300"
              style={{
                opacity: 0.2 + scrollProgress * 0.3,
                transform: `scale(${1 + scrollProgress * 0.2})`,
              }}
            ></div>
          </div>

          {/* Content Section */}
          <div 
            className="space-y-8 transition-all duration-300"
            style={{
              opacity: 0.3 + scrollProgress * 0.7,
              transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
            }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Xurhiel May Navarette Almero
              </h3>
              <p className="text-lg text-gray-300">
                Bachelor of Science in Information Technology
              </p>
            </div>

            <div className="space-y-6">
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

            <div className="text-center md:text-left pt-8">
              <p className="text-gray-300 italic">
                "Passionate about creating technology that makes a difference in people's lives"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 