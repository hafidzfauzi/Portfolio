import { useState } from 'react'
import { navItems } from '../data/navItems'
import { useScroll } from '../hooks/useScroll'

export default function Navbar({ downloadPdf }) {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useScroll(50)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full text-white z-[9999] transition-all duration-300 overflow-visible ${isScrolled || isOpen
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
        <a href="#home" className="font-bold text-lg">
          Hafidz Fauzi
        </a>

        <ul className="hidden lg:flex gap-6 text-md items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-gray-400 transition">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={downloadPdf}
              className="px-4 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all text-sm font-medium"
            >
              Download PDF
            </button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[10000] text-3xl text-white"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <ul className="flex flex-col text-center py-5 gap-5">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                downloadPdf();
              }}
              className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all mx-auto block"
            >
              Download PDF
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}