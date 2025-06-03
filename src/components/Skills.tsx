'use client'

import React from 'react'
import { Code, Database, Cloud, Smartphone, BarChart, Users, Target, Zap, CheckCircle, Star, TrendingUp, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Desenvolvimento & Tecnologia",
      color: "bg-blue-100 text-blue-600",
      skills: [
        { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
        { name: "React/Next.js", level: 95, category: "Frontend" },
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Python", level: 80, category: "Backend" },
        { name: "SQL/NoSQL", level: 85, category: "Database" },
        { name: "REST/GraphQL APIs", level: 90, category: "Integration" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "bg-green-100 text-green-600",
      skills: [
        { name: "AWS", level: 85, category: "Cloud" },
        { name: "Docker/Kubernetes", level: 75, category: "DevOps" },
        { name: "CI/CD", level: 80, category: "DevOps" },
        { name: "Monitoring & Logging", level: 85, category: "Observability" },
        { name: "Microservices", level: 80, category: "Architecture" },
        { name: "Serverless", level: 75, category: "Architecture" }
      ]
    },
    {
      icon: BarChart,
      title: "Analytics & Data",
      color: "bg-purple-100 text-purple-600",
      skills: [
        { name: "Google Analytics", level: 90, category: "Web Analytics" },
        { name: "Mixpanel/Amplitude", level: 85, category: "Product Analytics" },
        { name: "SQL Analytics", level: 85, category: "Data Analysis" },
        { name: "A/B Testing", level: 90, category: "Experimentation" },
        { name: "Cohort Analysis", level: 85, category: "User Behavior" },
        { name: "Business Intelligence", level: 80, category: "Reporting" }
      ]
    },
    {
      icon: Users,
      title: "Product Management",
      color: "bg-orange-100 text-orange-600",
      skills: [
        { name: "Product Strategy", level: 95, category: "Strategy" },
        { name: "Roadmap Planning", level: 90, category: "Planning" },
        { name: "User Research", level: 85, category: "Research" },
        { name: "Stakeholder Management", level: 90, category: "Communication" },
        { name: "Go-to-Market", level: 85, category: "Launch" },
        { name: "Pricing Strategy", level: 80, category: "Business" }
      ]
    }
  ]

  const methodologies = [
    {
      name: "Agile/Scrum",
      description: "Gestão ágil de produtos com sprints, retrospectivas e entrega contínua",
      experience: "8+ anos",
      icon: Target,
      tools: ["Jira", "Confluence", "Azure DevOps", "Linear"]
    },
    {
      name: "Design Thinking",
      description: "Abordagem centrada no usuário para solução de problemas complexos",
      experience: "6+ anos",
      icon: Users,
      tools: ["Miro", "Figma", "User Interviews", "Prototyping"]
    },
    {
      name: "Lean Startup",
      description: "Validação rápida de hipóteses através de MVPs e experimentação",
      experience: "7+ anos",
      icon: Zap,
      tools: ["A/B Testing", "Feature Flags", "Analytics", "User Feedback"]
    },
    {
      name: "OKRs",
      description: "Definição e acompanhamento de objetivos e resultados-chave",
      experience: "5+ anos",
      icon: TrendingUp,
      tools: ["Notion", "Monday", "Spreadsheets", "Dashboards"]
    }
  ]

  const tools = [
    {
      category: "Product Management",
      items: [
        { name: "Jira", type: "Project Management" },
        { name: "Confluence", type: "Documentation" },
        { name: "Notion", type: "Knowledge Base" },
        { name: "Linear", type: "Issue Tracking" },
        { name: "ProductBoard", type: "Roadmap" },
        { name: "Miro", type: "Collaboration" }
      ]
    },
    {
      category: "Analytics & Testing",
      items: [
        { name: "Google Analytics", type: "Web Analytics" },
        { name: "Mixpanel", type: "Product Analytics" },
        { name: "Amplitude", type: "User Analytics" },
        { name: "Optimizely", type: "A/B Testing" },
        { name: "LaunchDarkly", type: "Feature Flags" },
        { name: "Hotjar", type: "User Behavior" }
      ]
    },
    {
      category: "Design & Prototyping",
      items: [
        { name: "Figma", type: "Design" },
        { name: "Sketch", type: "Design" },
        { name: "InVision", type: "Prototyping" },
        { name: "Marvel", type: "Prototyping" },
        { name: "Principle", type: "Animation" },
        { name: "Framer", type: "Interactive Design" }
      ]
    },
    {
      category: "Development & DevOps",
      items: [
        { name: "VS Code", type: "IDE" },
        { name: "Git/GitHub", type: "Version Control" },
        { name: "Docker", type: "Containerization" },
        { name: "AWS", type: "Cloud Platform" },
        { name: "Vercel", type: "Deployment" },
        { name: "Postman", type: "API Testing" }
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      status: "Active"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      status: "Active"
    },
    {
      name: "Certified Scrum Product Owner",
      issuer: "Scrum Alliance",
      year: "2022",
      status: "Active"
    },
    {
      name: "PCI DSS Foundation",
      issuer: "PCI Security Standards Council",
      year: "2023",
      status: "Active"
    }
  ]

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: "Expert", color: "bg-green-500" }
    if (level >= 80) return { label: "Avançado", color: "bg-blue-500" }
    if (level >= 70) return { label: "Intermediário", color: "bg-yellow-500" }
    return { label: "Básico", color: "bg-gray-500" }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Settings className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Tecnologias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinação única de conhecimento técnico e visão de produto, 
            com experiência hands-on em desenvolvimento e gestão estratégica
          </p>
        </div>

        {/* Categorias de Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Competências Técnicas
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="card-large">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => {
                      const skillInfo = getSkillLevel(skill.level)
                      return (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium text-gray-900">{skill.name}</span>
                              <span className="text-sm text-gray-500 ml-2">({skill.category})</span>
                            </div>
                            <span className="text-sm font-medium text-gray-600">{skillInfo.label}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${skillInfo.color} transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Metodologias */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Metodologias & Frameworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => {
              const IconComponent = methodology.icon
              return (
                <div key={index} className="card text-center group hover:shadow-strong transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{methodology.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{methodology.description}</p>
                  <div className="text-xs text-primary-600 font-medium mb-3">{methodology.experience}</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {methodology.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Ferramentas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Ferramentas & Plataformas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((toolCategory, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center">{toolCategory.category}</h4>
                <div className="space-y-2">
                  {toolCategory.items.map((tool, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border hover:shadow-medium transition-shadow">
                      <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                      <div className="text-gray-500 text-xs">{tool.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Certificações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {cert.status}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{cert.name}</h4>
                <p className="text-gray-600 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Combinação Única: Técnico + Estratégico
              </h3>
              <p className="text-gray-300 mb-6">
                Poucos profissionais combinam conhecimento técnico profundo com visão estratégica de produto. 
                Esta combinação permite entregar soluções que são tanto tecnicamente sólidas quanto comercialmente viáveis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Hands-on Development
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Strategic Product Vision
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Data-Driven Decisions
                </div>
              </div>
              <a 
                href="#contato" 
                className="btn-secondary bg-white text-gray-900 hover:bg-gray-50"
              >
                Vamos Trabalhar Juntos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 