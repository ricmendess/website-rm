import React from 'react'
import { Users, Target, TrendingUp, Award, Building, Calendar } from 'lucide-react'
import { PERSONAL_DATA } from '../lib/types'

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Liderança de Equipes",
      description: "Experiência liderando equipes multidisciplinares de produto, desenvolvimento e design"
    },
    {
      icon: Target,
      title: "Estratégia de Produto",
      description: "Definição de roadmaps estratégicos alinhados com objetivos de negócio e necessidades do usuário"
    },
    {
      icon: TrendingUp,
      title: "Growth & Métricas",
      description: "Foco em crescimento sustentável através de análise de dados e otimização contínua"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Histórico de entrega de produtos que geram impacto real no negócio e na experiência do usuário"
    }
  ]

  const experience = [
    {
      period: "2019 - Presente",
      company: "Bemobi",
      role: "Head de Produtos",
      description: "Liderança da estratégia de produtos com foco em pagamentos recorrentes e billing systems"
    },
    {
      period: "2016 - 2019",
      company: "Empresa Anterior",
      role: "Senior Product Manager",
      description: "Gestão de produtos digitais e implementação de metodologias ágeis"
    },
    {
      period: "2014 - 2016",
      company: "Startup Tech",
      role: "Product Manager",
      description: "Desenvolvimento de produtos do zero ao mercado, validação de hipóteses e growth hacking"
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {PERSONAL_DATA.summary}
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Texto principal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transformando Ideias em Produtos de Sucesso
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Com mais de uma década no mercado de produtos digitais, desenvolvi uma expertise única 
                em transformar necessidades complexas de negócio em soluções elegantes e eficazes. 
                Minha jornada me levou desde startups em crescimento até grandes corporações, 
                sempre com foco em resultados mensuráveis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atualmente na <span className="font-semibold text-primary-600">Bemobi</span>, 
                lidero iniciativas estratégicas em pagamentos recorrentes, uma área que combina 
                complexidade técnica com impacto direto no negócio. Acredito que os melhores 
                produtos nascem da intersecção entre tecnologia, design e estratégia de negócio.
              </p>
            </div>

            {/* Filosofia */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
              <h4 className="font-semibold text-gray-900 mb-2">Minha Filosofia</h4>
              <p className="text-gray-600 italic">
                "Produtos excepcionais são construídos por equipes excepcionais. 
                Meu papel é criar o ambiente onde a inovação floresce e os resultados acontecem."
              </p>
            </div>
          </div>

          {/* Estatísticas e highlights */}
          <div className="space-y-8">
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Produtos Lançados</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-gray-600 text-sm">Equipes Lideradas</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Anos em Pagamentos</div>
              </div>
            </div>

            {/* Empresa atual */}
            <div className="bg-gradient-primary text-white p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Building className="w-6 h-6 mr-3" />
                <h4 className="font-semibold">Atualmente</h4>
              </div>
              <p className="text-lg font-medium mb-1">{PERSONAL_DATA.title}</p>
              <p className="text-primary-100 mb-2">na {PERSONAL_DATA.company}</p>
              <p className="text-sm text-primary-100">
                Liderando a evolução dos sistemas de pagamentos recorrentes 
                e otimização da experiência de billing
              </p>
            </div>
          </div>
        </div>

        {/* Highlights de competências */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Principais Competências
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div key={index} className="card text-center group hover:shadow-strong">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline de experiência */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Trajetória Profissional
          </h3>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-sm font-medium text-primary-600">{exp.period}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-1 mr-8 relative">
                  {index !== experience.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary-200"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{exp.role}</h4>
                  <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 