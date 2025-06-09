import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Deepak_Pandit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: "Data Analyst",
      company: "Yotta Infrastructure Solutions Pvt.LTD.",
      period: "2024 - 2025",
      description: "Assisting in Data Extraction,Cleaning,Aand Visualization To Support Decision-Making Across Department."
    },
    {
      title: "Frontend Developer",
      company: "7sharads.in",
      period: "2024 - 2025",
      description: "Created responsive web applications and collaborated with design teams to implement pixel-perfect UIs."
    },
    {
      title: "Full Stack Developer",
      company: "Hiranandani Group.",
      period: "2025 - Current",
      description: "Contributed to various projects while learning modern web development practices and agile methodologies."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "RD.&SH National College Bandra ",
      period: "2022 - 2025",
      description: "Focused on software engineering, data structures, and web technologies."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download my full resume or explore my experience and education below.
          </p>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <FileText className="mr-3 text-blue-600" size={24} />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{job.period}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <FileText className="mr-3 text-blue-600" size={24} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">TCS ION Career Edge</span>
                  <span className="text-sm text-gray-500">2023</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">GUVI Python Professional Certificate</span>
                  <span className="text-sm text-gray-500">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;