import React from 'react';
import { ExternalLink, Github, Code, Cloud, GitBranch, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "End-to-End DevOps for Golang Web App",
      description: "Complete DevOps pipeline implementation for a Golang web application with automated testing, deployment, and monitoring.",
      technologies: ["GitHub Actions", "ArgoCD", "Helm", "Kubernetes", "Python", "Bash", "RBAC", "IAM"],
      highlights: [
        "Implemented GitHub Actions CI/CD pipeline for automated testing and building",
        "Set up ArgoCD for GitOps-based continuous deployment",
        "Created Helm charts for Kubernetes application packaging",
        "Implemented RBAC and IAM security policies",
        "Automated infrastructure tasks using Python and Bash scripts"
      ],
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud-Native MERN Stack Application",
      description: "Fully automated cloud-native MERN stack application with infrastructure as code, secure networking, and comprehensive monitoring.",
      technologies: ["Terraform", "Jenkins", "ArgoCD", "Route 53", "SSL/TLS", "Prometheus", "Grafana", "AWS"],
      highlights: [
        "Automated infrastructure provisioning using Terraform",
        "Implemented Jenkins and ArgoCD for robust CI/CD pipeline",
        "Configured Route 53 DNS management with SSL/TLS certificates",
        "Set up comprehensive monitoring with Prometheus and Grafana",
        "Ensured high availability and scalability across cloud regions"
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-600/30 hover:border-blue-500/50"
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-blue-100 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-teal-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium hover:bg-blue-900/30 hover:text-blue-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
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