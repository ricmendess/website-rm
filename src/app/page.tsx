import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ricardo Mendes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Head de Produtos na Bemobi
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Mais de 10 anos de experiência liderando equipes de produtos, 
            atualmente focado em implementação de pagamentos recorrentes.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.linkedin.com/in/ricardomendess/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 