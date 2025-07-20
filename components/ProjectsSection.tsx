
'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('company');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectImageSlides, setProjectImageSlides] = useState<{[key: string]: number}>({});

  const companyProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, handling 100K+ daily transactions",
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      images: [
        "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20interface%20dashboard%20with%20clean%20design%2C%20shopping%20cart%20elements%2C%20product%20listings%2C%20professional%20business%20application%2C%20minimalist%20UI%20design%2C%20blue%20and%20white%20color%20scheme&width=400&height=250&seq=ecommerce-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=E-commerce%20product%20catalog%20page%20with%20grid%20layout%2C%20filter%20options%2C%20search%20functionality%2C%20professional%20online%20store%20interface%2C%20clean%20modern%20design&width=400&height=250&seq=ecommerce-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Shopping%20cart%20and%20checkout%20interface%2C%20payment%20processing%20screen%2C%20secure%20transaction%20page%2C%20professional%20e-commerce%20design%2C%20user-friendly%20layout&width=400&height=250&seq=ecommerce-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts and data visualization",
      techStack: ["React", "D3.js", "Python", "PostgreSQL", "Redis"],
      images: [
        "https://readdy.ai/api/search-image?query=Professional%20analytics%20dashboard%20interface%20with%20charts%2C%20graphs%2C%20data%20visualization%2C%20business%20intelligence%2C%20clean%20modern%20design%2C%20dark%20theme%2C%20professional%20layout&width=400&height=250&seq=analytics-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Data%20visualization%20charts%20and%20graphs%2C%20interactive%20dashboard%20elements%2C%20business%20metrics%20display%2C%20professional%20analytics%20interface%2C%20modern%20design&width=400&height=250&seq=analytics-project-2&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure setup with automated deployment and monitoring for enterprise applications",
      techStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      images: [
        "https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20diagram%2C%20server%20architecture%2C%20network%20topology%2C%20professional%20technical%20diagram%2C%20clean%20minimalist%20design%2C%20cloud%20computing%20visualization&width=400&height=250&seq=cloud-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=DevOps%20pipeline%20visualization%2C%20automated%20deployment%20workflow%2C%20CI%2FCD%20process%20diagram%2C%20professional%20technical%20illustration%2C%20modern%20design&width=400&height=250&seq=cloud-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Monitoring%20dashboard%20for%20cloud%20infrastructure%2C%20server%20metrics%2C%20performance%20analytics%2C%20professional%20system%20administration%20interface&width=400&height=250&seq=cloud-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Banking System",
      description: "Secure banking application with transaction processing, fraud detection, and real-time notifications",
      techStack: ["Java", "Spring Boot", "Oracle", "Redis", "Kafka"],
      images: [
        "https://readdy.ai/api/search-image?query=Banking%20application%20interface%2C%20financial%20dashboard%2C%20secure%20transaction%20system%2C%20professional%20banking%20UI%2C%20clean%20modern%20design%2C%20blue%20corporate%20theme&width=400&height=250&seq=banking-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Banking%20transaction%20history%20interface%2C%20account%20management%20screen%2C%20financial%20data%20visualization%2C%20professional%20banking%20application&width=400&height=250&seq=banking-project-2&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain tracking system with inventory management and logistics optimization",
      techStack: ["React", "Node.js", "PostgreSQL", "Docker", "GraphQL"],
      images: [
        "https://readdy.ai/api/search-image?query=Supply%20chain%20management%20dashboard%2C%20logistics%20tracking%2C%20inventory%20management%20interface%2C%20professional%20business%20application%2C%20clean%20modern%20design&width=400&height=250&seq=supply-chain-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Inventory%20tracking%20interface%2C%20warehouse%20management%20system%2C%20stock%20level%20monitoring%2C%20professional%20logistics%20application&width=400&height=250&seq=supply-chain-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Shipping%20and%20logistics%20tracking%20map%2C%20delivery%20route%20optimization%2C%20supply%20chain%20visualization%2C%20professional%20transportation%20interface&width=400&height=250&seq=supply-chain-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features",
      techStack: ["Vue.js", "PHP", "MySQL", "WebRTC", "AWS"],
      images: [
        "https://readdy.ai/api/search-image?query=Healthcare%20portal%20interface%2C%20medical%20dashboard%2C%20patient%20management%20system%2C%20clean%20medical%20application%20design%2C%20professional%20healthcare%20UI&width=400&height=250&seq=healthcare-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Medical%20appointment%20scheduling%20interface%2C%20calendar%20system%2C%20patient%20booking%20system%2C%20professional%20healthcare%20application&width=400&height=250&seq=healthcare-project-2&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: null
      }
    }
  ];

  const personalProjects = [
    {
      title: "Task Management App",
      description: "Personal productivity app with real-time collaboration features and intuitive drag-and-drop interface",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      images: [
        "https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%2C%20todo%20list%2C%20project%20management%2C%20clean%20UI%20design%2C%20productivity%20app%2C%20modern%20minimalist%20interface%2C%20organized%20layout&width=400&height=250&seq=task-app-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Kanban%20board%20interface%2C%20task%20organization%2C%20project%20collaboration%2C%20drag%20and%20drop%20functionality%2C%20professional%20productivity%20application&width=400&height=250&seq=task-app-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Task%20calendar%20view%2C%20deadline%20management%2C%20project%20timeline%2C%20scheduling%20interface%2C%20modern%20productivity%20app%20design&width=400&height=250&seq=task-app-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Weather Forecast App",
      description: "Weather application with location-based forecasts, interactive maps, and weather alerts",
      techStack: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      images: [
        "https://readdy.ai/api/search-image?query=Weather%20forecast%20application%20interface%2C%20weather%20maps%2C%20temperature%20charts%2C%20clean%20modern%20design%2C%20weather%20app%20UI%2C%20blue%20sky%20theme%2C%20professional%20layout&width=400&height=250&seq=weather-app-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Weather%20map%20interface%20with%20radar%2C%20precipitation%20tracking%2C%20interactive%20weather%20visualization%2C%20professional%20meteorological%20application&width=400&height=250&seq=weather-app-project-2&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Personal Finance Tracker",
      description: "Financial management tool with expense tracking, budget planning, and investment portfolio analysis",
      techStack: ["React", "Chart.js", "Node.js", "SQLite"],
      images: [
        "https://readdy.ai/api/search-image?query=Personal%20finance%20application%20interface%2C%20budget%20tracking%2C%20expense%20charts%2C%20financial%20dashboard%2C%20clean%20professional%20design%2C%20money%20management%20app%2C%20green%20and%20white%20theme&width=400&height=250&seq=finance-app-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Investment%20portfolio%20interface%2C%20stock%20tracking%2C%20financial%20analytics%2C%20professional%20investment%20management%20application&width=400&height=250&seq=finance-app-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Expense%20tracking%20interface%2C%20budget%20visualization%2C%20spending%20categories%2C%20personal%20finance%20management%20application&width=400&height=250&seq=finance-app-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Recipe Sharing Platform",
      description: "Social platform for sharing recipes with rating system, meal planning, and shopping list generation",
      techStack: ["React", "Express.js", "MongoDB", "Cloudinary"],
      images: [
        "https://readdy.ai/api/search-image?query=Recipe%20sharing%20platform%20interface%2C%20cooking%20app%2C%20food%20social%20media%2C%20recipe%20cards%2C%20clean%20modern%20design%2C%20culinary%20application%20UI&width=400&height=250&seq=recipe-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Recipe%20detail%20page%2C%20cooking%20instructions%2C%20ingredient%20list%2C%20professional%20culinary%20application%2C%20food%20photography&width=400&height=250&seq=recipe-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Meal%20planning%20interface%2C%20weekly%20menu%2C%20grocery%20list%20generator%2C%20professional%20cooking%20application%2C%20organized%20food%20planning&width=400&height=250&seq=recipe-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive fitness tracking app with workout plans, progress monitoring, and social features",
      techStack: ["React Native", "Node.js", "PostgreSQL", "Socket.io"],
      images: [
        "https://readdy.ai/api/search-image?query=Fitness%20tracker%20application%20interface%2C%20workout%20dashboard%2C%20health%20monitoring%2C%20exercise%20tracking%2C%20clean%20modern%20design%2C%20fitness%20app%20UI&width=400&height=250&seq=fitness-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Workout%20planning%20interface%2C%20exercise%20routines%2C%20fitness%20program%20management%2C%20professional%20health%20application&width=400&height=250&seq=fitness-project-2&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for organizing and sharing code snippets with syntax highlighting and team collaboration",
      techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      images: [
        "https://readdy.ai/api/search-image?query=Code%20snippet%20manager%20interface%2C%20developer%20tool%2C%20code%20editor%2C%20syntax%20highlighting%2C%20clean%20modern%20design%2C%20programming%20application%20UI&width=400&height=250&seq=code-snippet-project-1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Code%20organization%20interface%2C%20snippet%20library%2C%20programming%20tool%2C%20developer%20workspace%2C%20professional%20coding%20application&width=400&height=250&seq=code-snippet-project-2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Team%20collaboration%20interface%20for%20code%20sharing%2C%20developer%20community%2C%20code%20review%20system%2C%20professional%20programming%20platform&width=400&height=250&seq=code-snippet-project-3&orientation=landscape"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const currentProjects = activeTab === 'company' ? companyProjects : personalProjects;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentProjects.length / itemsPerPage);
  const startIndex = currentSlide * itemsPerPage;
  const visibleProjects = currentProjects.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextProjectImage = (projectIndex: number, totalImages: number) => {
    const key = `${activeTab}-${startIndex + projectIndex}`;
    setProjectImageSlides(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % totalImages
    }));
  };

  const prevProjectImage = (projectIndex: number, totalImages: number) => {
    const key = `${activeTab}-${startIndex + projectIndex}`;
    setProjectImageSlides(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToProjectImage = (projectIndex: number, imageIndex: number) => {
    const key = `${activeTab}-${startIndex + projectIndex}`;
    setProjectImageSlides(prev => ({
      ...prev,
      [key]: imageIndex
    }));
  };

  // Reset slide when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentSlide(0);
    setProjectImageSlides({});
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">My Projects</h2>
          
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => handleTabChange('company')}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'company' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Company Projects
              </button>
              <button
                onClick={() => handleTabChange('personal')}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'personal' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Personal Projects
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer z-10"
                >
                  <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center text-gray-600"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer z-10"
                >
                  <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center text-gray-600"></i>
                </button>
              </>
            )}

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
              {visibleProjects.map((project, index) => {
                const projectKey = `${activeTab}-${startIndex + index}`;
                const currentImageIndex = projectImageSlides[projectKey] || 0;
                const hasMultipleImages = project.images.length > 1;
                
                return (
                  <div key={startIndex + index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      {/* Project Image Navigation */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={() => prevProjectImage(index, project.images.length)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-200 cursor-pointer z-20"
                          >
                            <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center text-gray-700"></i>
                          </button>
                          <button
                            onClick={() => nextProjectImage(index, project.images.length)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-200 cursor-pointer z-20"
                          >
                            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-700"></i>
                          </button>
                        </>
                      )}
                      
                      <img 
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Project Image Dots */}
                      {hasMultipleImages && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {project.images.map((_, imageIndex) => (
                            <button
                              key={imageIndex}
                              onClick={() => goToProjectImage(index, imageIndex)}
                              className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                                imageIndex === currentImageIndex 
                                  ? 'bg-white' 
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.links.demo && (
                          <a 
                            href={project.links.demo}
                            className="flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-external-link-line w-4 h-4 flex items-center justify-center mr-1"></i>
                            Live Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a 
                            href={project.links.github}
                            className="flex items-center text-gray-600 hover:text-gray-800 font-medium cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-github-line w-4 h-4 flex items-center justify-center mr-1"></i>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dots Navigation */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                      index === currentSlide 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Projects Counter */}
            {totalPages > 1 && (
              <div className="text-center mt-4 text-gray-500 text-sm">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, currentProjects.length)} of {currentProjects.length} projects
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
