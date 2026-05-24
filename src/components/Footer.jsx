export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-500 border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm">
        <p>
          © {year} Hafidz Fauzi. All rights reserved.
        </p>

        <p>
          Built with React, Tailwind CSS, and AOS.
        </p>
      </div>
    </footer>
  )
}