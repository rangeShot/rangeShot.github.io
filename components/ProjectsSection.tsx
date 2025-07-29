
'use client';

import { useState } from 'react';
import { getProjectImages, fallbackImages } from '../config/images';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('personal');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectImageSlides, setProjectImageSlides] = useState<{[key: string]: number}>({});

  const companyProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, handling 100K+ daily transactions",
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      imageType: "ecommerce",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts and data visualization",
      techStack: ["React", "D3.js", "Python", "PostgreSQL", "Redis"],
      imageType: "analytics",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure setup with automated deployment and monitoring for enterprise applications",
      techStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      imageType: "cloud",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Banking System",
      description: "Secure banking application with transaction processing, fraud detection, and real-time notifications",
      techStack: ["Java", "Spring Boot", "Oracle", "Redis", "Kafka"],
      imageType: "banking",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain tracking system with inventory management and logistics optimization",
      techStack: ["React", "Node.js", "PostgreSQL", "Docker", "GraphQL"],
      imageType: "supplyChain",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features",
      techStack: ["Vue.js", "PHP", "MySQL", "WebRTC", "AWS"],
      imageType: "healthcare",
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
      imageType: "taskManager",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Weather Forecast App",
      description: "Weather application with location-based forecasts, interactive maps, and weather alerts",
      techStack: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      imageType: "weather",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Personal Finance Tracker",
      description: "Financial management tool with expense tracking, budget planning, and investment portfolio analysis",
      techStack: ["React", "Chart.js", "Node.js", "SQLite"],
      imageType: "finance",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Recipe Sharing Platform",
      description: "Social platform for sharing recipes with rating system, meal planning, and shopping list generation",
      techStack: ["React", "Express.js", "MongoDB", "Cloudinary"],
      imageType: "recipe",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive fitness tracking app with workout plans, progress monitoring, and social features",
      techStack: ["React Native", "Node.js", "PostgreSQL", "Socket.io"],
      imageType: "fitness",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for organizing and sharing code snippets with syntax highlighting and team collaboration",
      techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      imageType: "codeSnippet",
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
                onClick={() => handleTabChange('personal')}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'personal' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Personal Projects
              </button>
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
                const projectImages = getProjectImages(project.imageType) || [fallbackImages.project];
                const hasMultipleImages = projectImages.length > 1;
                
                return (
                  <div key={startIndex + index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      {/* Project Image Navigation */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={() => prevProjectImage(index, projectImages.length)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-200 cursor-pointer z-20"
                          >
                            <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center text-gray-700"></i>
                          </button>
                          <button
                            onClick={() => nextProjectImage(index, projectImages.length)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-200 cursor-pointer z-20"
                          >
                            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-700"></i>
                          </button>
                        </>
                      )}
                      
                      <img 
                        src={projectImages[currentImageIndex] || fallbackImages.project}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = fallbackImages.project;
                        }}
                      />
                      
                      {/* Project Image Dots */}
                      {hasMultipleImages && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {projectImages.map((_, imageIndex: number) => (
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
