const projects = [
  {
    title: 'Web Security Testing',
    desc: 'Simulasi pengujian keamanan website menggunakan pendekatan vulnerability assessment dan penetration testing.',
    tech: ['React', 'Burp Suite', 'OWASP'],
  },
  {
    title: 'SQL Injection Lab',
    desc: 'Project latihan eksploitasi dan mitigasi SQL Injection pada aplikasi web lokal.',
    tech: ['PHP', 'MySQL', 'SQLMap'],
  },
  {
    title: 'Vulnerability Scanner Report',
    desc: 'Dokumentasi hasil scanning kerentanan menggunakan Nessus untuk analisis keamanan sistem.',
    tech: ['Nessus', 'Linux', 'Security Audit'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 data-aos="fade-up" className="text-4xl font-bold">
            Projects
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-gray-400">
            Beberapa project yang saya kerjakan dalam bidang cybersecurity dan web security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-6 text-sm text-cyan-400 hover:text-cyan-300">
                View Detail →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}