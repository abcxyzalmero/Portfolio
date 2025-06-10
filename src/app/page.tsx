import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="mb-8">
              <img
                src="/profile.jpg"
                alt="Xurhiel May Navarette Almero"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Welcome to My Digital Space
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Step into my digital space — a reflection of my passion for innovation, design, and purpose-driven technology. I'm a dedicated tech explorer and a creative problem solver with a heart for impactful solutions. Through this portfolio, I invite you to browse a collection of my work that captures not just what I've done, but who I am as a learner, leader, and creator. From developing "Blind Vision: Mobile Obstacle Detection for Independent Blind Mobility"—an award-winning capstone project aimed at empowering the visually impaired—to collaborating with dynamic teams on systems that solve real-world problems, every project in this portfolio tells a story of growth, grit, and vision. Whether it's UI/UX design, system development, content creation, or academic writing, I strive to approach each task with empathy, strategy, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">🧠</span>
                <span>Driven by curiosity</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">🎯</span>
                <span>Focused on impact</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">💡</span>
                <span>Inspired to innovate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
