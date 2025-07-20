
'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "ri-code-line",
      skills: [
        { name: "Python", level: 95, icon: "ri-code-line" },
        { name: "Java", level: 90, icon: "ri-cup-line" },
        { name: "JavaScript", level: 92, icon: "ri-javascript-line" },
        { name: "SQL", level: 88, icon: "ri-database-2-line" },
        { name: "C", level: 75, icon: "ri-code-s-slash-line" },
        { name: "C++", level: 80, icon: "ri-code-s-slash-line" },
        { name: "MATLAB", level: 70, icon: "ri-function-line" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "ri-stack-line",
      skills: [
        { name: "Flask", level: 90, icon: "ri-flask-line" },
        { name: "FastAPI", level: 85, icon: "ri-rocket-line" },
        { name: "Django", level: 88, icon: "ri-global-line" },
        { name: "React", level: 92, icon: "ri-reactjs-line" },
        { name: "GraphQL", level: 80, icon: "ri-git-branch-line" },
        { name: "Apollo Server", level: 75, icon: "ri-server-line" },
        { name: "Struts", level: 70, icon: "ri-layout-line" },
        { name: "Serverless Framework", level: 78, icon: "ri-cloud-line" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: "ri-database-line",
      skills: [
        { name: "MongoDB", level: 90, icon: "ri-database-line" },
        { name: "Redis", level: 85, icon: "ri-database-line" },
        { name: "Elasticsearch", level: 82, icon: "ri-search-line" },
        { name: "Hasura", level: 75, icon: "ri-database-2-line" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "ri-cloud-line",
      skills: [
        { name: "AWS", level: 88, icon: "ri-cloud-line" },
        { name: "Docker", level: 85, icon: "ri-container-line" },
        { name: "CI/CD Pipelines", level: 83, icon: "ri-repeat-line" },
        { name: "New Relic", level: 75, icon: "ri-bar-chart-line" },
        { name: "CloudWatch", level: 80, icon: "ri-eye-line" },
        { name: "Git", level: 95, icon: "ri-git-branch-line" }
      ]
    },
    {
      title: "Security & Authentication",
      icon: "ri-shield-line",
      skills: [
        { name: "IAM", level: 85, icon: "ri-shield-user-line" },
        { name: "Auth0", level: 80, icon: "ri-lock-line" },
        { name: "JWT", level: 88, icon: "ri-key-line" },
        { name: "SAML", level: 75, icon: "ri-secure-payment-line" },
        { name: "RBAC", level: 82, icon: "ri-user-settings-line" }
      ]
    },
    {
      title: "Additional Technologies",
      icon: "ri-tools-line",
      skills: [
        { name: "Kafka", level: 78, icon: "ri-exchange-line" },
        { name: "Shopify", level: 72, icon: "ri-store-line" },
        { name: "Gephi", level: 65, icon: "ri-node-tree" },
        { name: "LLM", level: 80, icon: "ri-brain-line" },
        { name: "RAG", level: 75, icon: "ri-search-2-line" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <i className={`${category.icon} w-6 h-6 flex items-center justify-center text-blue-600 mr-3 text-xl`}></i>
                  <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className={`${skill.icon} w-4 h-4 flex items-center justify-center text-gray-600 mr-2`}></i>
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-8">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
