export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 min-h-screen bg-gray-900 text-white flex items-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold">
          Contact Me
        </h2>

        <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-gray-400">
          Tertarik bekerja sama atau ingin berdiskusi seputar cybersecurity?
          Silakan hubungi saya.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:emailkamu@example.com"
            className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/usernamekamu"
            target="_blank"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}