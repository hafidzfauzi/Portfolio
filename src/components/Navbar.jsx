export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="font-bold text-lg">
          Hafidz Fauzi
        </a>

        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}