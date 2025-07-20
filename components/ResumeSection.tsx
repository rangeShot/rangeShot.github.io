
'use client';

import { useState } from 'react';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Resume</h2>
          <p className="text-lg text-gray-600 mb-12">
            Download my complete resume or preview it below to learn more about my professional experience and qualifications.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-file-text-line w-10 h-10 flex items-center justify-center text-blue-600 text-3xl"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ranjeet Kumar - Engineering Resume</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive overview of my engineering experience, skills, projects, and achievements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer whitespace-nowrap"
              >
                <i className="ri-eye-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Preview Resume
              </button>
              <a 
                href="/resume.pdf" 
                download="Ranjeet_Kumar_Resume.pdf"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <i className="ri-user-line w-8 h-8 flex items-center justify-center text-blue-600 mb-4 text-2xl"></i>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional Experience</h4>
              <p className="text-gray-600 text-sm">5+ years of engineering experience across multiple industries and technologies.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <i className="ri-code-line w-8 h-8 flex items-center justify-center text-blue-600 mb-4 text-2xl"></i>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Skills</h4>
              <p className="text-gray-600 text-sm">Comprehensive list of programming languages, frameworks, and tools I work with.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <i className="ri-graduation-cap-line w-8 h-8 flex items-center justify-center text-blue-600 mb-4 text-2xl"></i>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Education & Certifications</h4>
              <p className="text-gray-600 text-sm">Academic background and professional certifications in engineering and technology.</p>
            </div>
          </div>
        </div>
      </div>
      
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Resume Preview</h3>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line w-6 h-6 flex items-center justify-center text-xl"></i>
              </button>
            </div>
            <div className="flex-1 p-4">
              <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-file-text-line w-16 h-16 flex items-center justify-center text-gray-400 mb-4 text-5xl mx-auto"></i>
                  <p className="text-gray-600">Resume preview would appear here</p>
                  <p className="text-sm text-gray-500 mt-2">PDF viewer integration required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
