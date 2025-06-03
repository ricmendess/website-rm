import React from 'react'
import { ArrowDown, Download, Linkedin, ExternalLink } from 'lucide-react'
import { PERSONAL_DATA } from '../lib/types'
import { siteConfig } from '../lib/config'

const Hero = () => {
  // Função para scroll suave para próxima seção
  const scrollToNext = () => {
    const element = document.getElementById('sobre')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Apresentação principal */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Olá, eu sou{' '}
              <span className="gradient-text">{PERSONAL_DATA.name}</span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 animate-slide-up animate-delay-200">
              <p className="mb-2">
                <span className="font-semibold text-primary-600">{PERSONAL_DATA.title}</span> na {PERSONAL_DATA.company}
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl">
                {PERSONAL_DATA.experience} liderando equipes de produtos, especialista em{' '}
                <span className="font-semibold text-primary-600">pagamentos recorrentes</span>
              </p>
            </div>
          </div>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animate-delay-400">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin hover:scale-105 shadow-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Ver LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            
            <a
              href="/cv-ricardo-mendes.pdf"
              download
              className="btn-secondary hover:scale-105 shadow-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          {/* Estatísticas rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 animate-slide-up animate-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Anos em Pagamentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Foco em Resultados</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce-slow animate-delay-1000">
            <button
              onClick={scrollToNext}
              className="inline-flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors group"
              aria-label="Rolar para próxima seção"
            >
              <span className="text-sm mb-2 group-hover:text-primary-600">Saiba mais</span>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Padding para compensar header fixo */}
      <div className="absolute top-0 left-0 right-0 h-16 lg:h-20"></div>
    </section>
  )
}

export default Hero 