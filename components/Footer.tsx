
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ranjeet Kumar</h3>
            <p className="text-gray-400">Engineer | Problem Solver | Innovation Enthusiast</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/ranjeet-kumar" 
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-github-line w-6 h-6 flex items-center justify-center text-2xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/ranjeet-kumar" 
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-linkedin-line w-6 h-6 flex items-center justify-center text-2xl"></i>
            </a>
            <a 
              href="mailto:ranjeet.kumar@email.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-2xl"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ranjeet Kumar. All rights reserved. Built with passion and modern technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
