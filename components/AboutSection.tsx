
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate engineer with expertise in full-stack development, cloud technologies, and system architecture. 
                With several years of experience in the tech industry, I've worked on diverse projects ranging from web applications 
                to complex distributed systems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, always focusing on delivering 
                scalable and maintainable solutions. I'm constantly learning new technologies and methodologies to stay 
                at the forefront of engineering innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Problem Solver</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Team Player</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Innovation Focused</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                  <span className="text-gray-700">Based in India</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-code-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                  <span className="text-gray-700">B.Tech in Engineering</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-lightbulb-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                  <span className="text-gray-700">20+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
