import React from 'react';
import { Cloud, GitBranch, Container, Cog, Activity, Shield, Code, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "CI/CD",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Jenkins", "GitHub Actions", "ArgoCD", "AWS CodePipeline"],
      color: "from-teal-500 to-teal-600"
    },
    {
      category: "Containers & Orchestration",
      icon: <Container className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Infrastructure as Code",
      icon: <Cog className="w-8 h-8" />,
      skills: ["Terraform", "Ansible"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Monitoring",
      icon: <Activity className="w-8 h-8" />,
      skills: ["Prometheus", "Grafana"],
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Security",
      icon: <Shield className="w-8 h-8" />,
      skills: ["OWASP", "IAM", "RBAC", "SSL/TLS"],
      color: "from-red-500 to-red-600"
    },
    {
      category: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "Bash"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      category: "Other Tools",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Git", "Helm", "SonarQube"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-600/30 hover:border-blue-500/50"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {category.category}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-900/30 hover:text-blue-300 transition-all duration-300"
                  >
                    {skill}
                  </div>
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