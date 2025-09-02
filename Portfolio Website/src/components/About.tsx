import React from 'react';
import { Code, Cloud, GitBranch, Shield } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Expert in AWS & Azure cloud platforms"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "CI/CD Automation",
      description: "Streamlined deployment pipelines"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Container Orchestration",
      description: "Kubernetes & Docker expertise"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Monitoring",
      description: "Robust security practices & observability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate DevOps Engineer with expertise in building and managing robust cloud infrastructure, 
              implementing efficient CI/CD pipelines, and orchestrating scalable containerized applications. 
              My experience spans across multiple cloud platforms, automation tools, and modern DevOps practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              With a strong foundation in cloud technologies like AWS and Azure, I specialize in Infrastructure as Code 
              using Terraform and Ansible, container orchestration with Kubernetes and Docker, and comprehensive monitoring 
              solutions using Prometheus and Grafana. I'm also proficient in scripting with Python and Bash to automate 
              complex workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-teal-900/50 text-teal-300 rounded-full text-sm font-medium">Leadership</span>
              <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">Collaboration</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl hover:from-blue-900/30 hover:to-teal-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-blue-400 group-hover:text-teal-400 transition-colors duration-300 mb-3">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;