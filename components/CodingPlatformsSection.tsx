
'use client';

export default function CodingPlatformsSection() {
  const platforms = [
    {
      name: 'StopStalk',
      username: 'rs119574',
      url: 'https://www.stopstalk.com/user/profile/rs119574',
      logo: 'https://readdy.ai/api/search-image?query=StopStalk%20competitive%20programming%20platform%20logo%20icon%20green%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=stopstalk1&orientation=squarish',
      color: 'text-green-600',
      hoverColor: 'hover:text-green-800',
      bgColor: 'bg-green-50',
      description: 'Competitive Programming Tracker'
    },
    {
      name: 'GeeksForGeeks',
      username: 'rs119574',
      url: 'https://auth.geeksforgeeks.org/user/rs119574',
      logo: 'https://readdy.ai/api/search-image?query=GeeksforGeeks%20logo%20green%20orange%20programming%20platform%20icon%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=gfg1&orientation=squarish',
      color: 'text-orange-600',
      hoverColor: 'hover:text-orange-800',
      bgColor: 'bg-orange-50',
      description: 'Programming Articles & Practice'
    },
    {
      name: 'CodeChef',
      username: 'rs119574',
      url: 'https://www.codechef.com/users/rs119574',
      logo: 'https://readdy.ai/api/search-image?query=CodeChef%20logo%20brown%20orange%20chef%20hat%20programming%20contest%20platform%20icon%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=codechef1&orientation=squarish',
      color: 'text-yellow-600',
      hoverColor: 'hover:text-yellow-800',
      bgColor: 'bg-yellow-50',
      description: 'Competitive Programming Contest'
    },
    {
      name: 'Codeforces',
      username: 'itsB2',
      url: 'https://codeforces.com/profile/itsB2',
      logo: 'https://readdy.ai/api/search-image?query=Codeforces%20logo%20red%20blue%20programming%20contest%20platform%20icon%20CF%20letters%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=codeforces1&orientation=squarish',
      color: 'text-red-600',
      hoverColor: 'hover:text-red-800',
      bgColor: 'bg-red-50',
      description: 'Programming Contests & Ratings'
    },
    {
      name: 'HackerRank',
      username: 'rs119574',
      url: 'https://www.hackerrank.com/rs119574',
      logo: 'https://readdy.ai/api/search-image?query=HackerRank%20logo%20green%20hexagon%20programming%20platform%20icon%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=hackerrank1&orientation=squarish',
      color: 'text-purple-600',
      hoverColor: 'hover:text-purple-800',
      bgColor: 'bg-purple-50',
      description: 'Coding Challenges & Skills'
    },
    {
      name: 'Topcoder',
      username: 'rs119574',
      url: 'https://www.topcoder.com/members/rs119574',
      logo: 'https://readdy.ai/api/search-image?query=Topcoder%20logo%20blue%20programming%20contest%20platform%20icon%20TC%20letters%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=topcoder1&orientation=squarish',
      color: 'text-indigo-600',
      hoverColor: 'hover:text-indigo-800',
      bgColor: 'bg-indigo-50',
      description: 'Algorithm & Development Contests'
    },
    {
      name: 'GitHub',
      username: 'rangeShot',
      url: 'https://github.com/rangeShot',
      logo: 'https://readdy.ai/api/search-image?query=GitHub%20logo%20black%20cat%20octocat%20programming%20repository%20platform%20icon%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=github1&orientation=squarish',
      color: 'text-gray-800',
      hoverColor: 'hover:text-gray-900',
      bgColor: 'bg-gray-50',
      description: 'Code Repositories & Projects'
    },
    {
      name: 'LinkedIn',
      username: 'rangeshot',
      url: 'https://linkedin.com/in/rangeshot',
      logo: 'https://readdy.ai/api/search-image?query=LinkedIn%20logo%20blue%20professional%20network%20platform%20icon%20in%20letters%20minimal%20clean%20design%20simple%20background&width=64&height=64&seq=linkedin1&orientation=squarish',
      color: 'text-blue-600',
      hoverColor: 'hover:text-blue-800',
      bgColor: 'bg-blue-50',
      description: 'Professional Network'
    }
  ];

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
            {platforms.map((platform, index) => (
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
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 object-contain"
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Problems Solved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <p className="text-gray-600">Contests Participated</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
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
