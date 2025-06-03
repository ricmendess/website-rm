import React from 'react'
import { Linkedin, ExternalLink, ArrowUp } from 'lucide-react'
import { PERSONAL_DATA, SOCIAL_LINKS } from '../lib/types'
import { siteConfig } from '../lib/config'

const Footer = () => {
  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Função para scroll para seção específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const quickLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'cases', label: 'Cases' },
    { id: 'pagamentos', label: 'Pagamentos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contato', label: 'Contato' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conteúdo principal do footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Informações pessoais */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{PERSONAL_DATA.name}</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                {PERSONAL_DATA.title} na {PERSONAL_DATA.company} com {PERSONAL_DATA.experience} de experiência 
                liderando equipes de produtos, especialista em pagamentos recorrentes.
              </p>
              
              {/* Links sociais */}
              <div className="flex items-center space-x-4">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent-linkedin text-white font-medium rounded-lg hover:bg-accent-linkedin/90 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Especialidades */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Product Management</li>
                <li>Pagamentos Recorrentes</li>
                <li>Billing Systems</li>
                <li>Product Strategy</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright e botão voltar ao topo */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} {PERSONAL_DATA.name}. Todos os direitos reservados.
          </div>
          
          {/* Botão voltar ao topo */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 