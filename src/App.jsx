import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar downloadPdf={handleDownload} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

export default App