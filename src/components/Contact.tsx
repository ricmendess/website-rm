'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Clock, User, Building, MessageSquare } from 'lucide-react'
import { PERSONAL_DATA } from '../lib/types'
import { siteConfig } from '../lib/config'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envio do formulário (substituir por integração real com Formspree)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aqui seria a integração real com Formspree ou outro serviço
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })

      setSubmitStatus('success')
      setFormData({ name: '', company: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ricardo.mendes@email.com',
      href: 'mailto:ricardo.mendes@email.com',
      description: 'Resposta em até 24h'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/ricardomendess',
      href: siteConfig.linkedinUrl,
      description: 'Conecte-se comigo'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, SP',
      href: null,
      description: 'Disponível para remoto'
    },
    {
      icon: Clock,
      label: 'Disponibilidade',
      value: 'Seg-Sex, 9h-18h',
      href: null,
      description: 'Horário comercial'
    }
  ]

  const reasons = [
    {
      icon: User,
      title: 'Oportunidades de Carreira',
      description: 'Posições de Head de Produtos, CPO ou consultoria estratégica'
    },
    {
      icon: Building,
      title: 'Consultoria em Produtos',
      description: 'Otimização de produtos, pagamentos recorrentes e estratégia'
    },
    {
      icon: MessageSquare,
      title: 'Networking & Mentoria',
      description: 'Troca de experiências e orientação para outros PMs'
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interessado em discutir oportunidades, projetos ou trocar experiências? 
            Estou sempre aberto a novas conexões e desafios interessantes.
          </p>
        </div>

        {/* Motivos para entrar em contato */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Por que entrar em contato?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Formulário de contato */}
          <div className="order-2 lg:order-1">
            <div className="card-large">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Nome da empresa (opcional)"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu.email@empresa.com"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                    placeholder="Conte-me sobre a oportunidade, projeto ou como posso ajudar..."
                  />
                </div>

                {/* Status de envio */}
                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <p className="text-green-700">Mensagem enviada com sucesso! Retornarei em breve.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-red-700">Erro ao enviar mensagem. Tente novamente ou use o email direto.</p>
                  </div>
                )}

                {/* Botão de envio */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </div>
                  )}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Campos obrigatórios. Seus dados são tratados com total confidencialidade.
              </p>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              
              {/* Informações diretas */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{info.label}</h4>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Tempo de resposta */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-gray-900 mb-2">⚡ Resposta rápida</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Comprometo-me a responder todas as mensagens em até 24 horas durante dias úteis.
                </p>
                <p className="text-gray-600 text-sm">
                  Para urgências, conecte-se diretamente pelo LinkedIn.
                </p>
              </div>

              {/* Call to action LinkedIn */}
              <div className="text-center">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-linkedin inline-flex items-center hover:scale-105 shadow-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Conectar no LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ rápido */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Perguntas frequentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Você está disponível para freelance?</h4>
              <p className="text-gray-600 text-sm">Sim, para projetos de consultoria em produtos e pagamentos recorrentes.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Aceita posições remotas?</h4>
              <p className="text-gray-600 text-sm">Absolutamente! Tenho experiência consolidada em trabalho remoto.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Faz mentoria?</h4>
              <p className="text-gray-600 text-sm">Sim, adoro ajudar outros PMs a crescerem na carreira.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 