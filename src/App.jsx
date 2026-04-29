import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App