import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Clock } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Sify Technologies Limited",
      position: "Digital Engineer Trainee",
      duration: "July 2024 - Present",
      location: "Chennai, India",
      type: "Professional Experience",
      highlights: [
        "Deployed containerized applications on Kubernetes, reducing deployment errors by 40%",
        "Built an end-to-end CI/CD framework with Jenkins, improving team productivity by 20% through automated testing and deployment",
        "Designed CI/CD pipelines with Jenkins and GitHub Actions, reducing release cycles from 2 weeks to 3 days",
        "Automated infrastructure provisioning and configuration using Terraform and Ansible, improving consistency and reducing manual effort."
      ],
      technologies: ["Kubernetes", "Jenkins", "Docker", "CI/CD", "Automation"]
    },
    {
      company: "Sri Sairam Engineering College",
      position: "Bachelor of Engineering - Computer Science",
      duration: "2020 - 2024",
      location: "Chennai, India",
      type: "Education",
      highlights: [
        "Graduated with CGPA of 8.61",
        "Specialized in software engineering and cloud technologies",
        "Participated in various technical projects and competitions",
        "Built strong foundation in computer science fundamentals"
      ],
      technologies: ["Computer Science", "Software Engineering", "Cloud Computing", "Programming"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-800"></div>

                {/* Content */}
                <div className="lg:w-5/12">
                  <div className="group p-8 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-600/30 hover:border-blue-500/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Professional Experience' 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : 'bg-teal-900/50 text-teal-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3 text-gray-300">
                          <TrendingUp className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-xs font-medium hover:bg-blue-900/30 hover:text-blue-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
