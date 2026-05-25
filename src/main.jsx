import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Root() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disable: window.innerWidth < 768,
    })
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
