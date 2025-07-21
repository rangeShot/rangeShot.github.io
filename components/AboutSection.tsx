
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
                {/* I'm a backend engineer with over 5 years of experience building reliable, high-performance systems across B2B SaaS, travel, and edtech domains. I have expertise in Python, Java, and JavaScript, with hands-on experience in distributed systems, cloud-native architectures like AWS, and data pipelines.  */}
                I'm a backend engineer with over 5 years of experience building reliable, high-performance systems across B2B SaaS, travel, and edtech domains. I've consistently delivered backend solutions that are robust, scalable, and impact-driven.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {/* I’ve consistently delivered robust, scalable, and impactful backend solutions.  */}
                I blend technical depth with creative thinking, always striving to deliver systems that are both scalable and maintainable. I'm continuously exploring new technologies and architectural patterns to stay ahead in the ever-evolving engineering landscape.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Problem Solver</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">System Design</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Innovation Focused</span>

                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Javascript</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Distributed System</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Cloud Native Development</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Data Pipelines</span>
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
                  <span className="text-gray-700">Bachelors in Engineering</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-lightbulb-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                  <span className="text-gray-700">25+ Projects Delivered 🚀 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
