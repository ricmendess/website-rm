'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Linkedin, ExternalLink } from 'lucide-react'
import { PERSONAL_DATA } from '../lib/types'
import { siteConfig } from '../lib/config'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para adicionar background ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navegação smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'cases', label: 'Cases' },
    { id: 'pagamentos', label: 'Pagamentos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contato', label: 'Contato' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/Nome */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl lg:text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              {PERSONAL_DATA.name}
            </button>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* LinkedIn Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-accent-linkedin text-white font-medium rounded-lg hover:bg-accent-linkedin/90 transition-all duration-200 hover:scale-105 shadow-medium"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 shadow-soft">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* LinkedIn Button - Mobile */}
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-3 py-2 bg-accent-linkedin text-white font-medium rounded-lg hover:bg-accent-linkedin/90 transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Ver LinkedIn
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 