'use client'

import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Cases from '../components/Cases'
import PaymentsExpertise from '../components/PaymentsExpertise'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Cases />
      <PaymentsExpertise />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
} 