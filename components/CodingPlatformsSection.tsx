
'use client';

import { getPlatformLogo, fallbackImages } from '../config/images';
import { personalInfo } from '../config/personal';

export default function CodingPlatformsSection() {
  return (
    <section id="coding-platforms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Coding Platforms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with me across various competitive programming platforms and professional networks. 
              I actively participate in coding contests and contribute to open-source projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.codingPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.bgColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${platform.bgColor.replace('50', '100')} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    <img 
                      src={getPlatformLogo(platform.platformKey)} 
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = fallbackImages.platform;
                      }}
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{platform.description}</p>
                  
                  <div className={`${platform.color} ${platform.hoverColor} font-medium text-sm transition-colors duration-200`}>
                    @{platform.username}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Competitive Programming Stats</h3>
              <p className="text-gray-600 mb-6">
                Active participant in various coding competitions with consistent problem-solving practice across multiple platforms.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.cpStats.problemsSolved}</div>
                  <p className="text-gray-600">Problems Solved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{personalInfo.cpStats.contestsParticipated}</div>
                  <p className="text-gray-600">Contests Participated</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{personalInfo.cpStats.activePlatforms}</div>
                  <p className="text-gray-600">Active Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
