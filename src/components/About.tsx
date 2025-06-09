import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, and modern web technologies"
    },
    {
      icon: <Zap className="text-yellow-600\" size={24} />,
      title: "Backend Development",
      description: "Node.js, Python, databases, and API design"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "UI/UX Design",
      description: "User-centered design, prototyping, and design systems"
    },
    {
      icon: <Users className="text-green-600\" size={24} />,
      title: "Collaboration",
      description: "Team leadership, project management, and communication"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "Tailwind CSS", "Git", "Docker", "AWS", "Figma"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Story</h3>
            <p className="text-gray-600 leading-relaxed">
              My journey into the world of technology began with curiosity and a love for how websites work behind the scenes. While studying Computer Science at R.D. & S.H. National College, I found my true interest in web development and design. I enjoy building clean, interactive, and responsive user interfaces that not only look great but also solve real problems.

During my internship at Yotta Infrastructure, I worked as a Data Analyst Intern, where I learned the power of data—how to collect it, clean it, and turn it into useful insights using tools like Excel, SQL, and Python. This experience taught me attention to detail and the importance of writing efficient, clean code.

Apart from coding, I’ve completed training in Cyber Security and Career Skills, which gave me a strong foundation in professional practices and digital safety.

Every project I take on is an opportunity to learn, grow, and build something meaningful. I believe in continuous learning, team collaboration, and always staying updated with the latest in tech and design.


            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-4xl font-bold text-blue-600">Your Photo</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;