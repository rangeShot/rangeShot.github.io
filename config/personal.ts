// Centralized personal information configuration
// Update your details here and they'll be reflected across the entire portfolio

export const personalInfo = {
  // Basic Information
  name: "Ranjeet Kumar",
  title: "Backend Engineer",
  tagline: "Passionate about building innovative solutions and creating impactful technology that makes a difference.",
  
  // Contact Information
  contact: {
    email: "dev.ranjeetkr@gmail.com",
    phone: "+91 9111111111",
    location: "Bengaluru, India",
    country: "India"
  },
  
  // Resume
  resume: {
    url: "https://drive.google.com/file/d/1uu7pUZZN58T7I5j0A5IMQmEJwtcZYKVo/view",
    previewUrl: "https://drive.google.com/file/d/1uu7pUZZN58T7I5j0A5IMQmEJwtcZYKVo/preview",
    downloadName: "Ranjeet_Kumar_Resume.pdf"
  },
  
  // Social Links
  social: {
    github: "https://github.com/rangeShot",
    linkedin: "https://linkedin.com/in/rangeshot",
    twitter: null, // Add if you have Twitter
    instagram: null // Add if you have Instagram
  },
  
  // Professional Information
  experience: {
    years: "5+",
    projects: "25+",
    education: "Bachelors in Engineering"
  },
  
  // Skills & Expertise
  expertise: [
    "Problem Solver",
    "System Design", 
    "Innovation Focused",
    "Distributed System",
    "Cloud Native Development",
    "Data Pipelines"
  ],
  
  // Quick Facts
  quickFacts: [
    {
      icon: "ri-map-pin-line",
      text: "Based in India"
    },
    {
      icon: "ri-code-line", 
      text: "5+ Years Experience"
    },
    {
      icon: "ri-graduation-cap-line",
      text: "Bachelors in Engineering"
    },
    {
      icon: "ri-lightbulb-line",
      text: "25+ Projects Delivered 🚀"
    },
    {
      icon: "ri-server-line",
      text: "Experience with Distributed Systems"
    },
    {
      icon: "ri-star-line",
      text: "Python, Java, AWS & Scalable APIs Expert"
    }
  ],
  
  // Coding Platforms
  codingPlatforms: [
    {
      name: 'StopStalk',
      username: 'rs119574',
      url: 'https://www.stopstalk.com/user/profile/rs119574',
      platformKey: 'stopstalk',
      color: 'text-green-600',
      hoverColor: 'hover:text-green-800',
      bgColor: 'bg-green-50',
      description: 'Competitive Programming Tracker'
    },
    {
      name: 'GeeksForGeeks',
      username: 'rs119574',
      url: 'https://auth.geeksforgeeks.org/user/rs119574',
      platformKey: 'geeksforgeeks',
      color: 'text-orange-600',
      hoverColor: 'hover:text-orange-800',
      bgColor: 'bg-orange-50',
      description: 'Programming Articles & Practice'
    },
    {
      name: 'CodeChef',
      username: 'rs119574',
      url: 'https://www.codechef.com/users/rs119574',
      platformKey: 'codechef',
      color: 'text-yellow-600',
      hoverColor: 'hover:text-yellow-800',
      bgColor: 'bg-yellow-50',
      description: 'Competitive Programming Contest'
    },
    {
      name: 'Codeforces',
      username: 'itsB2',
      url: 'https://codeforces.com/profile/itsB2',
      platformKey: 'codeforces',
      color: 'text-red-600',
      hoverColor: 'hover:text-red-800',
      bgColor: 'bg-red-50',
      description: 'Programming Contests & Ratings'
    },
    {
      name: 'HackerRank',
      username: 'rs119574',
      url: 'https://www.hackerrank.com/rs119574',
      platformKey: 'hackerrank',
      color: 'text-purple-600',
      hoverColor: 'hover:text-purple-800',
      bgColor: 'bg-purple-50',
      description: 'Coding Challenges & Skills'
    },
    {
      name: 'Topcoder',
      username: 'rs119574',
      url: 'https://www.topcoder.com/members/rs119574',
      platformKey: 'topcoder',
      color: 'text-indigo-600',
      hoverColor: 'hover:text-indigo-800',
      bgColor: 'bg-indigo-50',
      description: 'Algorithm & Development Contests'
    },
    {
      name: 'GitHub',
      username: 'rangeShot',
      url: 'https://github.com/rangeShot',
      platformKey: 'github',
      color: 'text-gray-800',
      hoverColor: 'hover:text-gray-900',
      bgColor: 'bg-gray-50',
      description: 'Code Repositories & Projects'
    },
    {
      name: 'LinkedIn',
      username: 'rangeshot',
      url: 'https://linkedin.com/in/rangeshot',
      platformKey: 'linkedin',
      color: 'text-blue-600',
      hoverColor: 'hover:text-blue-800',
      bgColor: 'bg-blue-50',
      description: 'Professional Network'
    }
  ],
  
  // Competitive Programming Stats
  cpStats: {
    problemsSolved: "500+",
    contestsParticipated: "50+",
    activePlatforms: "8+"
  }
};

// Helper functions
export const getContactInfo = () => personalInfo.contact;
export const getResumeInfo = () => personalInfo.resume;
export const getSocialLinks = () => personalInfo.social;
export const getCodingPlatforms = () => personalInfo.codingPlatforms;
export const getQuickFacts = () => personalInfo.quickFacts;
export const getCPStats = () => personalInfo.cpStats; 