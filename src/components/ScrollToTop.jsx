import { useScroll } from '../hooks/useScroll'

export default function ScrollToTop() {
  const isVisible = useScroll(300)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-lg transition-all duration-300 hover:bg-gray-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
    >
      ⇡
    </button>
  )
}