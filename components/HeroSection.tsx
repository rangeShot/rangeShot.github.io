
'use client';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Hi,<br />
              I'm Ranjeet Kumar.<br />
              I'm an Engineer.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Passionate about building innovative solutions and creating impactful technology that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20young%20male%20engineer%20portrait%20with%20clean%20background%2C%20modern%20professional%20headshot%2C%20confident%20smile%2C%20business%20casual%20attire%2C%20soft%20lighting%2C%20minimal%20background%2C%20high%20quality%20photography%20style&width=400&height=400&seq=hero-portrait&orientation=squarish"
                  alt="Ranjeet Kumar - Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
