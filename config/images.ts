// Centralized image configuration
// Replace external API URLs with local images or reliable alternatives

export const projectImages = {
  // Company Projects
  ecommerce: [
    "/images/projects/ecommerce-dashboard.jpg",
    "/images/projects/ecommerce-catalog.jpg", 
    "/images/projects/ecommerce-checkout.jpg"
  ],
  analytics: [
    "/images/projects/analytics-dashboard.jpg",
    "/images/projects/analytics-charts.jpg"
  ],
  cloud: [
    "/images/projects/cloud-infrastructure.jpg",
    "/images/projects/devops-pipeline.jpg",
    "/images/projects/monitoring-dashboard.jpg"
  ],
  banking: [
    "/images/projects/banking-interface.jpg",
    "/images/projects/banking-transactions.jpg"
  ],
  supplyChain: [
    "/images/projects/supply-chain-dashboard.jpg",
    "/images/projects/inventory-tracking.jpg",
    "/images/projects/logistics-tracking.jpg"
  ],
  healthcare: [
    "/images/projects/healthcare-portal.jpg",
    "/images/projects/appointment-scheduling.jpg"
  ],

  // Personal Projects
  taskManager: [
    "/images/projects/task-management.jpg",
    "/images/projects/kanban-board.jpg",
    "/images/projects/task-calendar.jpg"
  ],
  weather: [
    "/images/projects/weather-app.jpg",
    "/images/projects/weather-map.jpg"
  ],
  finance: [
    "/images/projects/finance-tracker.jpg",
    "/images/projects/investment-portfolio.jpg",
    "/images/projects/expense-tracking.jpg"
  ],
  recipe: [
    "/images/projects/recipe-platform.jpg",
    "/images/projects/recipe-detail.jpg",
    "/images/projects/meal-planning.jpg"
  ],
  fitness: [
    "/images/projects/fitness-tracker.jpg",
    "/images/projects/workout-planning.jpg"
  ],
  codeSnippet: [
    "/images/projects/code-snippet-manager.jpg",
    "/images/projects/code-organization.jpg",
    "/images/projects/team-collaboration.jpg"
  ]
};

export const platformLogos = {
  stopstalk: "/images/platforms/stopstalk-logo.png",
  geeksforgeeks: "/images/platforms/gfg-logo.png",
  codechef: "/images/platforms/codechef-logo.png",
  codeforces: "/images/platforms/codeforces-logo.png",
  hackerrank: "/images/platforms/hackerrank-logo.png",
  topcoder: "/images/platforms/topcoder-logo.png",
  github: "/images/platforms/github-logo.png",
  linkedin: "/images/platforms/linkedin-logo.png"
};

// Fallback images for when local images are not available
export const fallbackImages = {
  project: "/images/fallback/project-placeholder.jpg",
  platform: "/images/fallback/platform-placeholder.png",
  profile: "/assets/profile_pic.jpg"
};

// Default project images (can be replaced with actual project screenshots)
export const getProjectImages = (projectType: string): string[] => {
  const images = projectImages[projectType as keyof typeof projectImages];
  return images || [fallbackImages.project];
};

// Default platform logos (can be replaced with actual platform logos)
export const getPlatformLogo = (platform: string): string => {
  const logo = platformLogos[platform as keyof typeof platformLogos];
  return logo || fallbackImages.platform;
}; 