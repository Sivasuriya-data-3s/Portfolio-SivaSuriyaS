import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "OCI Certified DevOps Professional",
      issuer: "Oracle",
      description: "Comprehensive certification covering Oracle Cloud Infrastructure DevOps practices, CI/CD, and automation.",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      description: "Validates expertise in developing and maintaining applications on the AWS platform.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Ultimate Ansible Bootcamp",
      issuer: "Professional Training",
      description: "Advanced training in Ansible automation, playbooks, and infrastructure management.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-600/30 hover:border-blue-500/50"
            >
              {/* Certificate Header */}
              <div className={`p-6 bg-gradient-to-r ${cert.color}`}>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-full border border-blue-500/30">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Continuously pursuing additional cloud and DevOps certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;