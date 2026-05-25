export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 md:min-h-screen bg-transparent text-white relative overflow-hidden px-6 py-28"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[160px_1fr] gap-10">
          <p data-aos="fade-up" className="text-sm text-gray-300">
            About
          </p>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-medium tracking-tight max-w-5xl"
            >
              Building secure and reliable digital solutions.
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 border-t border-white/20 pt-8">
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-gray-400 leading-relaxed"
              >
                <p>
                  I am a Cybersecurity Engineering student with a strong interest
                  in web security, penetration testing, and vulnerability analysis.
                  I enjoy learning how systems work, identifying potential
                  weaknesses, and documenting technical projects to improve my
                  practical skills.
                </p>

                <p className="mt-5">
                  My current focus is building a portfolio that showcases
                  cybersecurity projects, security testing documentation, and
                  web-based applications developed using modern technologies.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="350"
                className="border-l border-white/20 pl-6"
              >
                <p className="text-sm text-gray-500 mb-4">
                  Education
                </p>

                <h3 className="text-2xl font-semibold">
                  Politeknik Negeri Cilacap
                </h3>

                <p className="text-gray-400 mt-3">
                  Cybersecurity Engineering
                </p>

                <p className="text-gray-500 mt-1">
                  2023 — Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}