
'use client';

export default function CertificatesSection() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "Professional",
      icon: "ri-cloud-line",
      link: "#"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      type: "Professional",
      icon: "ri-cloud-line",
      link: "#"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      type: "Professional",
      icon: "ri-settings-3-line",
      link: "#"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      type: "Fundamentals",
      icon: "ri-cloud-line",
      link: "#"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      type: "Professional",
      icon: "ri-container-line",
      link: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      type: "Professional",
      icon: "ri-reactjs-line",
      link: "#"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      type: "Professional",
      icon: "ri-database-line",
      link: "#"
    },
    {
      title: "Scrum Master Certification",
      issuer: "Scrum Alliance",
      date: "2021",
      type: "Management",
      icon: "ri-team-line",
      link: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional':
        return 'bg-blue-100 text-blue-800';
      case 'Fundamentals':
        return 'bg-green-100 text-green-800';
      case 'Management':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Certificates & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <i className={`${cert.icon} w-6 h-6 flex items-center justify-center text-blue-600 text-xl`}></i>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                        {cert.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{cert.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.issuer}</p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={cert.link}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-external-link-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    View Certificate
                  </a>
                  <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
